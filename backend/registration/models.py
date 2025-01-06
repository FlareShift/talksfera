from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django_countries.fields import CountryField

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        max_length=15,
        validators=[RegexValidator(regex=r'^\+380\d{9}$', message="Невірний формат номера телефону.")]
    )
    birth_date = models.DateField()
    gender = models.CharField(
        max_length=10,
        choices=[('male', 'Чоловіча'), ('female', 'Жіноча'), ('other', 'Інша')]
    )
    language = models.CharField(
        max_length=20,
        choices=[('ukrainian', 'Українська'), ('english', 'Англійська'), ('polish', 'Польська')]
    )
    country = CountryField()
    city = models.CharField(max_length=50)
    timezone = models.CharField(max_length=50)
    is_therapist = models.BooleanField(default=False)

class TherapistProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    education = models.TextField()
    certificates = models.FileField(upload_to='certificates/')
    experience_years = models.PositiveIntegerField()
    therapy_types = models.TextField()
    treatment_methods = models.TextField()
    availability = models.TextField()