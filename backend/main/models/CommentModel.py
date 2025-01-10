from django.db import models
from .PatientModel import Patient
from .TherapistModel import Therapist

class Comment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    comment = models.CharField(max_length=255)