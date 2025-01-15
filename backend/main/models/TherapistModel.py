from django.db import models
from .UserModel import User

class Therapist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    therapy_type = models.IntegerField()
    qualifications = models.IntegerField()
    work_experience = models.IntegerField()
    available = models.DateTimeField(null=True, blank=True)