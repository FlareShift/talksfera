from django.db import models

class Therapy_Type(models.Model):
    therapy_type = models.CharField(max_length=45)