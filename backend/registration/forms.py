from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError
from main.models.LanguageModel import Language
from main.models.SexModel import Sex
from main.models.TherapistModel import Therapist
from main.models.PatientModel import Patient
from main.models.TherapyTypeModel import Therapy_Type
from main.models.ProblemTypeModel import Problem_Type
from main.models.SpecializationModel import Specialization
from main.models.LocationModel import Location
import pytz
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget
from cities_light.models import City
from main.models.UserModel import User

User = get_user_model()

class RegistrationForm(UserCreationForm):
    # Ваші кастомні поля
    first_name = forms.CharField(max_length=50, required=True, label="Ім'я")
    last_name = forms.CharField(max_length=50, required=True, label="Прізвище")
    email = forms.EmailField(required=True, label="Email")
    phone_number = forms.CharField(max_length=20, label="Номер телефону", required=False)
    birth_date = forms.DateField(
        required=True,
        widget=forms.SelectDateWidget(years=range(1920, 2018)),
        label="Дата народження"
    )
    sex = forms.ModelChoiceField(queryset=Sex.objects.all(), label="Стать")

    languages = forms.ModelMultipleChoiceField(
        queryset=Language.objects.all(),
        widget=forms.CheckboxSelectMultiple,  # або forms.SelectMultiple для випадаючого списку
        required=False
    )

    class Meta:
        model = Language
        fields = ['languages']

    country = CountryField().formfield(
        widget=forms.Select(attrs={'class': 'form-control', 'id': 'country-select'})
    )
    city = forms.ModelChoiceField(
        queryset=City.objects.none(),  
        widget=forms.Select(attrs={'class': 'form-control', 'id': 'city-select'})
    )


    # Поля для паролів, які використовує UserCreationForm
    password1 = forms.CharField(widget=forms.PasswordInput, label="Пароль")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Повторіть пароль")
    accept_terms = forms.BooleanField(required=True, label="Я погоджуюсь з умовами")
    
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'phone_number', 'birth_date',
                  'sex', 'languages', 'country', 'city', 'accept_terms', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if 'country' in self.data:
            country_code = self.data.get('country')
            self.fields['city'].queryset = City.objects.filter(country__code2=country_code)

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise ValidationError("Цей email вже використовується.")
        return email

    def clean_country(self):
        country = self.cleaned_data.get('country')
        if not country:
            raise forms.ValidationError("Будь ласка, оберіть країну!")
        return country

    import logging

    logger = logging.getLogger(__name__)

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
            country = self.cleaned_data.get('country')
            city = self.cleaned_data.get('city')
            if country and city:
                location, created = Location.objects.get_or_create(user=user, country=country, city=city)
                user.location = location
                user.save()
            else:
                raise ValidationError("Будь ласка, виберіть країну і місто")
            self.cleaned_data['languages'].update(users=user) 
        return user


class PatientRegistrationForm(RegistrationForm):
    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_therapist = False  
        if commit:
            user.save()
            patient = Patient(user=user)
            patient.save()
        return user


class TherapistRegistrationForm(RegistrationForm):
    qualification = forms.CharField(widget=forms.Textarea, required=False)
    work_experience = forms.IntegerField(
        required=True,
        widget=forms.Select(choices=[(i, str(i)) for i in range(0, 71)]),
        label="Роки досвіду"
    )
    therapy_types = forms.ModelMultipleChoiceField(
        queryset=Therapy_Type.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        label="Типи терапії",
        required=False
    )
    specializations = forms.ModelMultipleChoiceField(
        queryset=Specialization.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        label="Методи лікування",
        required=False
    )
    problems = forms.ModelMultipleChoiceField(
        queryset=Problem_Type.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        label="Проблеми з якими працюєте",
        required=False
    )

    available = forms.CharField(widget=forms.Textarea, required=False)

    class Meta(RegistrationForm.Meta):
        fields = RegistrationForm.Meta.fields + ('qualification', 'work_experience', 'therapy_types', 'specializations', 'problems', 'available')

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
            therapist = Therapist.objects.create(
                user=user,
                qualification=self.cleaned_data.get('qualification'),
                work_experience=self.cleaned_data.get('work_experience'),
                available=self.cleaned_data.get('available')
            )
            therapist.therapy_types.set(self.cleaned_data.get('therapy_types'))
            therapist.specializations.set(self.cleaned_data.get('specializations'))
            therapist.problems.set(self.cleaned_data.get('problems'))
            therapist.save()
        return user
