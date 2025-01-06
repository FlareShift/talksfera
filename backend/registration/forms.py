from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError
from .models import CustomUser, TherapistProfile

class RegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone_number = forms.CharField(required=True)
    birth_date = forms.DateField(required=True, widget=forms.SelectDateWidget(years=range(1900, 2024)))
    gender = forms.ChoiceField(choices=CustomUser._meta.get_field('gender').choices)
    language = forms.ChoiceField(choices=CustomUser._meta.get_field('language').choices)
    country = forms.CharField(required=True)
    city = forms.CharField(required=True)
    timezone = forms.CharField(required=True)
    accept_terms = forms.BooleanField(required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone_number', 'birth_date', 'gender', 'language', 'country', 'city', 'timezone', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError("Цей email вже використовується.")
        return email

class TherapistRegistrationForm(RegistrationForm):
    education = forms.CharField(widget=forms.Textarea)
    certificates = forms.FileField()
    experience_years = forms.IntegerField()
    therapy_types = forms.CharField(widget=forms.Textarea)
    treatment_methods = forms.CharField(widget=forms.Textarea)
    availability = forms.CharField(widget=forms.Textarea)

    class Meta(RegistrationForm.Meta):
        fields = RegistrationForm.Meta.fields + ('education', 'certificates', 'experience_years', 'therapy_types', 'treatment_methods', 'availability')