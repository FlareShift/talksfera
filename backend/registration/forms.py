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



User = get_user_model()


class RegistrationForm(UserCreationForm):
    # Ваші кастомні поля
    first_name = forms.CharField(max_length=50, required=True, label="Ім'я")
    last_name = forms.CharField(max_length=50, required=True, label="Прізвище")
    email = forms.EmailField(required=True, label="Email")
    timezone = forms.CharField(widget=forms.HiddenInput())
    phone_number = forms.CharField(max_length=20, label="Номер телефону", required=False)
    birth_date = forms.DateField(
        required=True,
        widget=forms.SelectDateWidget(years=range(1920, 2018)),
        label="Дата народження"
    )
    sex = forms.ModelChoiceField(queryset=Sex.objects.all(), label="Стать")
    language = forms.ModelChoiceField(queryset=Language.objects.all(), widget=forms.CheckboxSelectMultiple, label="Мова", required=False )
    unique_countries = Location.objects.order_by('country').values_list('country', flat=True).distinct()
    timezone = forms.CharField(widget=forms.HiddenInput())
    # Якщо у вас є значення за замовчуванням:
    # country = forms.ChoiceField(
    # choices=[(country, country) for country in Location.objects.values_list('country', flat=True).distinct()],
    # label="Країна",
    # required=False
    # )
    city = forms.ChoiceField(choices=[], label="Місто", required=False)
    # Поля для паролів, які використовує UserCreationForm
    password1 = forms.CharField(widget=forms.PasswordInput, label="Пароль")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Повторіть пароль")
    accept_terms = forms.BooleanField(required=True, label="Я погоджуюсь з умовами")
    
    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.set_password(self.cleaned_data['password1'])  # Встановлення пароля
            user.save()
            languages = self.cleaned_data.get('language')
            if languages:
                user.language.set(languages)  
                user.save()
        return user

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['city'].choices = [("", "Спочатку виберіть країну")]
    
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'phone_number', 'birth_date',
                  'sex', 'language', 'country', 'city', 'accept_terms', 'password1', 'password2')

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

class PatientRegistrationForm(RegistrationForm):
    #додаткові поля для регістрації пацієнта
    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_therapist = False  # Пацієнт не терапевт
        if commit:
            user.save()
            # Створення об'єкта пацієнта
            patient = Patient.objects.create(user=user)
            patient.save()
        return user

class TherapistRegistrationForm(RegistrationForm):
    qualification = forms.CharField(widget=forms.Textarea, required=False)  
    #certificates = forms.FileField()
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