from django.db import models

from .TherapistModel import Therapist
from .TherapyTypeModel import Therapy_Type

class Therapist_Therapy_Method(models.Model):
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    therapy_method = models.ForeignKey(Therapy_Type, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('therapist', 'therapy_method')