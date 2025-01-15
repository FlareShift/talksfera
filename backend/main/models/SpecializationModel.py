from django.db import models

class Specialization(models.Model):
    name = models.CharField(max_length=45)