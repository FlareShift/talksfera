from datetime import date, datetime
from rest_framework import serializers
from .models import User, Patient, Therapist, Sex, Language, User_Language

class SexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sex
        fields = ['id', 'name']

class UserSerializer(serializers.ModelSerializer):
    sex = serializers.PrimaryKeyRelatedField(queryset=Sex.objects.all())
    languages = serializers.PrimaryKeyRelatedField(
        queryset=Language.objects.all(), many=True, required=False
    )

    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'password',
            'phone_number', 'birth_date', 'sex', 'agree_to_terms', 'photo' 'languages'
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        languages = validated_data.pop('languages', [])
        user = User.objects.create_user(**validated_data)
        
        for lang in languages:
            User_Language.objects.create(user=user, language=lang)

        return user


    
