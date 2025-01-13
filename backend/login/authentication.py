# login/authentication.py

from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import CustomUser

class EmailOrPhoneBackend(BaseBackend):
    """
    Кастомний бекенд для аутентифікації користувачів через email або телефон.
    """
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = CustomUser.objects.get(email=username)
        except CustomUser.DoesNotExist:
            try:
                user = CustomUser.objects.get(phone_number=username)
            except CustomUser.DoesNotExist:
                return None

        if user and check_password(password, user.password):
            return user
        return None

    def get_user(self, user_id):
        try:
            return CustomUser.objects.get(pk=user_id)
        except CustomUser.DoesNotExist:
            return None
