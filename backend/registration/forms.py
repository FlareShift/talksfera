from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError
from main.models.LanguageModel import Language
from main.models.SexModel import Sex
import pytz


User = get_user_model()

class RegistrationForm(UserCreationForm):
    # Ваші кастомні поля
    name = forms.CharField(max_length=50, required=True, label="Ім'я")
    surname = forms.CharField(max_length=50, required=True, label="Прізвище")
    email = forms.EmailField(required=True, label="Email")
    phone_number = forms.CharField(max_length=20, required=True, label="Номер телефону")
    birth_date = forms.DateField(
        required=True,
        widget=forms.SelectDateWidget(years=range(1920, 2018)),
        label="Дата народження"
    )
    sex = forms.ModelChoiceField(queryset=Sex.objects.all(), label="Стать")
    language = forms.ModelChoiceField(queryset=Language.objects.all(), label="Мова")
    country = forms.CharField(max_length=50, required=True, label="Країна")
    city = forms.CharField(max_length=50, required=True, label="Місто")
    accept_terms = forms.BooleanField(required=True, label="Я погоджуюсь з умовами")
    
    # Поля для паролів, які використовує UserCreationForm
    password1 = forms.CharField(widget=forms.PasswordInput, label="Пароль")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Повторіть пароль")
    
    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.set_password(self.cleaned_data['password1'])  # Встановлення пароля
            user.save()
        return user
    
    class Meta:
        model = User
        fields = ('name', 'surname', 'email', 'phone_number', 'birth_date', 
                  'sex', 'language', 'country', 'city', 'accept_terms', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise ValidationError("Цей email вже використовується.")
        return email



# class TherapistRegistrationForm(RegistrationForm):
#     education = forms.CharField(widget=forms.Textarea)
#     certificates = forms.FileField()
#     experience_years = forms.IntegerField()
#     therapy_types = forms.CharField(widget=forms.Textarea)
#     treatment_methods = forms.CharField(widget=forms.Textarea)
#     availability = forms.CharField(widget=forms.Textarea)

#     class Meta(RegistrationForm.Meta):
#         fields = RegistrationForm.Meta.fields + ('education', 'certificates', 'experience_years', 'therapy_types', 'treatment_methods', 'availability')



