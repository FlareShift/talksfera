from datetime import date, datetime

from rest_framework import serializers
from .models import User, Patient, Therapist, Sex

class SexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sex
        fields = ['id', 'name']

class UserSerializer(serializers.ModelSerializer):
    sex = serializers.PrimaryKeyRelatedField(queryset=Sex.objects.all())

    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'password',
            'phone_number', 'birth_date', 'sex', 'agree_to_terms', 'photo'
        ]
        extra_kwargs = {'password': {'write_only': True}}


