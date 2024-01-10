from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import SingupSerializer,LoginSerializer
from .email import send_link_via_mail
from .utils import get_tokens_for_user
import uuid
from .models import UserAccount
from django.contrib.auth import authenticate




# Create your views here.
class SignupView(APIView):
    def post(self,request):
        try:
            serializer = SingupSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                user = UserAccount.objects.filter(email=serializer.validated_data['email']).first()
                if user :
                    return Response({
                        'status': 400,
                        'msg': 'Email already exists. Please use a different email address.',
                    })
                user_obj = serializer.save()
                email_token=str(uuid.uuid4())
                user_obj.email_token = email_token
                user_obj.save()
                token = get_tokens_for_user(user_obj)
                send_link_via_mail(user_obj.email,user_obj.email_token)
                return Response({
                    'status' : 200,
                    'msg' : 'Please confirm your email address to complete the registration',
                    'data' : serializer.data,
                    'token' : token

                })
            return Response({
                'status' : 400,
                'msg': 'validation error',
                'data' : serializer.errors
            })
        
        except Exception as e:
            print(e)
            return Response({
                'status' : 500,
                'msg' : 'Something went worng'
            }) 
        

class VerifyView(APIView):
    def post(self,request,email_token):
        try:
            user = UserAccount.objects.get(email_token__iexact=email_token)   
            user.is_verified = True
            user.save()
            return Response({
                'status' : 200,
                'msg' : 'Your account verified and user registered successfully',
                'token' : email_token
            }) 
        
        except Exception as e:
            return Response({
                'status' : 500,
                'msg' : 'Invalid token'
            })


class LoginView(APIView):
    def post(self,request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email,password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({
                'status':200,
                'msg' : 'Login Success',
                'token' : token
            })
        return Response({
            'status':400,
            'errors':{'non_field_errors':['Email or Password is not Valid']}

        })