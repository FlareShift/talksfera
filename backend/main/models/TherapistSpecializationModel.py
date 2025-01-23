from django.db import models
from .SpecializationModel import Specialization
from .TherapistModel import Therapist

class Therapist_Specialization(models.Model):
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    specialization = models.ForeignKey(Specialization, on_delete=models.CASCADE)

    class Meta:

        unique_together = ('therapist', 'specialization')