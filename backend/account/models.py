from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from .manager import UserManager

# Create your models here.

class UserAccount(AbstractBaseUser,PermissionsMixin):
    username = None
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=100, unique=True, null=True, blank=True)
    phone = models.CharField(max_length=10, null=True,blank=True)
    is_verified = models.BooleanField(default=False)
    email_token = models.CharField(max_length=200, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name