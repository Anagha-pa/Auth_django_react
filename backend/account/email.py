from django.conf import settings
from django.core.mail import send_mail


                
def send_link_via_mail(email,email_token):
    subject = 'Your account needs to be verified'
    message =  f'Click on the link to verify http://localhost:8000/api/account/verify/{email_token}/'
    email_form = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject,message,email_form,recipient_list)
    return True
    