from django.db import models
from .UserModel import User

class Location(models.Model):
    country = models.CharField(max_length=45)
    city = models.CharField(max_length=45)
    user = models.ForeignKey(User, on_delete=models.CASCADE)