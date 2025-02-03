from django.db import models
from .PatientModel import Patient
from .TherapistModel import Therapist

class Session(models.Model):
    time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)