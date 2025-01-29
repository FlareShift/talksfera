from django.db import models
from django.contrib.auth.models import AbstractUser
from .SexModel import Sex
from .LanguageModel import Language

class User(AbstractUser):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    language = models.ManyToManyField(Language, through='User_Language', blank=True)
    location = models.ForeignKey('main.Location', null=True, on_delete=models.SET_NULL, related_name='user_location')
    birth_date = models.DateField(null=True)
    sex = models.ForeignKey(Sex, null=True, on_delete=models.SET_NULL)
    photo = models.CharField(max_length=300, blank=True, null=True)
    timezone = models.CharField(max_length=63, blank=True, null=True)
    is_therapist = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.email  # Username буде email
        super().save(*args, **kwargs)
