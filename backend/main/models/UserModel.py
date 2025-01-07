from django.db import models

from .SexModel import Sex


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    birth_date = models.DateField()
    sex = models.ForeignKey(Sex, null=True, on_delete=models.SET_NULL)
    agree_to_terms = models.BooleanField(default=False)
    photo = models.CharField(max_length=300, blank=True, null=True)