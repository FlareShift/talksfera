from django.db import models
from .UserModel import User
from .TherapyTypeModel import Therapy_Type
from .SpecializationModel import Specialization
from .ProblemTypeModel import Problem_Type

class Therapist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="therapist")
    qualification = models.TextField(blank=True, null=True)
    work_experience = models.IntegerField(default=0)
    therapy_types = models.ManyToManyField(Therapy_Type, blank=True)
    specializations = models.ManyToManyField('Specialization', through='Therapist_Specialization' , blank=True, related_name="therapists")
    problems = models.ManyToManyField(Problem_Type, blank=True)
    available = models.TextField(blank=True, null=True)
