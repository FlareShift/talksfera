from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)
    is_therapist = models.BooleanField(default=False)  
    email = models.EmailField(unique=True, blank=False)

    REQUIRED_FIELDS = ['email'] 

    def __str__(self):
        return self.email

