from rest_framework import serializers
from .models import UserAccount


class SingupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model = UserAccount
        fields = ['name','email','phone','password','password2','is_verified']
        extra_kwargs={
      'password':{'write_only':True}
    }
        
    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2', None)
        return UserAccount.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
     email = serializers.EmailField(max_length=100)
     class Meta:
        model = UserAccount
        fields = ['email','password']

  
            

            