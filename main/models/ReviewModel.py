from django.db import models
from .PatientModel import Patient
from .TherapistModel import Therapist

class Review(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    review = models.TextField()