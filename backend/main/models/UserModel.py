from django.db import models
import pytz
from .SexModel import Sex
from .LanguageModel import Language
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    birth_date = models.DateField(null=True) #
    sex = models.ForeignKey(Sex, null=True, on_delete=models.SET_NULL)
    photo = models.CharField(max_length=300, blank=True, null=True)
    language = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    is_therapist = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email']

    def save(self, *args, **kwargs):
        if self.email:
            self.username = self.email
        super().save(*args, **kwargs)
