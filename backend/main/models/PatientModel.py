from django.db import models
from .UserModel import  User

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="patient")
    therapy_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    range_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    is_test = models.BooleanField(default=False)