from django.db import models

class Therapy_Type(models.Model):
    therapy_type = models.CharField(max_length=45)

    def __str__(self):
        return self.therapy_type