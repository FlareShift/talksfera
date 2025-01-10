from django.db import models

class Problem_Type(models.Model):
    description = models.CharField(max_length=45)