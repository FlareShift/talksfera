from django.db import models

class Location(models.Model):
    country = models.CharField(max_length=45)
    city = models.CharField(max_length=45)

    def __str__(self):
        return f'{self.city}, {self.country}'

    class Meta:
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'

