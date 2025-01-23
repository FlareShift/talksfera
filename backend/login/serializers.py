from rest_framework import serializers

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)  # Зробимо його необов'язковим
    password = serializers.CharField(write_only=True)