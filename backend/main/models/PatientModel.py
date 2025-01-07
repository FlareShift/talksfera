from django.db import models
from .UserModel import  User

class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    therapy_price = models.DecimalField(max_digits=10, decimal_places=2)
    range_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_test = models.BooleanField(default=False)