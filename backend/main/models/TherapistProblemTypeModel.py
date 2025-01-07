from django.db import models
from .TherapistModel import Therapist
from .ProblemTypeModel import Problem_Type

class Therapist_Problem_Type(models.Model):
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    problem_type = models.ForeignKey(Problem_Type, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('therapist', 'problem_type')