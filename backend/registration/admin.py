from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from main.models.UserModel import User
from main.models.SexModel import Sex 
from main.models.LanguageModel import Language
from main.models.TherapyTypeModel import Therapy_Type
from main.models.ProblemTypeModel import Problem_Type
from main.models.SpecializationModel import Specialization
from main.models.TherapistModel import Therapist
from main.models.PatientModel import Patient
from django import forms
from django.core.exceptions import ValidationError
from main.models.UserLanguageModel import User_Language


# Реєструємо моделі для адміністратора
admin.site.register(Sex) 
admin.site.register(Language)  
admin.site.register(Therapy_Type)  
admin.site.register(Problem_Type)  
admin.site.register(Specialization)  
admin.site.register(Therapist)
admin.site.register(Patient)


class CustomUserAdmin(UserAdmin):
    list_display = ['email', 'first_name', 'last_name', 'location', 'get_languages']

    def get_location(self, obj):
        return obj.location.city if obj.location else "-"
    get_location.short_description = "Location"

    def get_languages(self, obj):
        return ", ".join([ul.language.language_name for ul in User_Language.objects.filter(user=obj)])
    get_languages.short_description = "Languages"

    list_filter = ('is_active', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name', 'phone_number')
    ordering = ('id',)

    fieldsets = None  # Вимикаємо групування полів

    add_fieldsets = (
        (None, {
            'fields': ('username', 'password1', 'password2', 'first_name', 'last_name', 'email', 'phone_number', 
                       'birth_date', 'sex', 'languages', 'location', 'agree_to_terms', 'is_active', 'is_staff', 
                       'is_superuser', 'is_therapist', 'qualification', 'availabile')
        }),
    )
    


# Реєструємо користувача з кастомним адміном
admin.site.register(User, CustomUserAdmin)


class User_LanguageAdmin(admin.ModelAdmin):
    list_display = ('user', 'language')
    list_filter = ('user', 'language')
    search_fields = ('user__username', 'language__language_name')

admin.site.register(User_Language, User_LanguageAdmin)