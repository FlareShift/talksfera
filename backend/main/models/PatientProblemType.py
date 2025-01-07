from django.db import models
from .PatientModel import Patient
from .ProblemTypeModel import Problem_Type

class Patient_Problem_Type(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    problem_type = models.ForeignKey(Problem_Type, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('patient', 'problem_type')