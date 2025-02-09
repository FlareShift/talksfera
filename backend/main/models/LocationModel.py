from django.db import models
from django.conf import settings
from django.db import models
from cities_light.models import Country, City 
from django_countries.fields import CountryField

User = settings.AUTH_USER_MODEL

class Location(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='locations')
    country = CountryField(blank_label='Select country')
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.city.name}, {self.country.name}' if self.city else f'{self.country.name}'

    class Meta:
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'



