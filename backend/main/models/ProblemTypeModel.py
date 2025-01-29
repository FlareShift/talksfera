from django.db import models

class Problem_Type(models.Model):
    description = models.CharField(max_length=45)

    def __str__(self):
        return self.description