from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json


# Кастомный сериализатор для JWT
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['message'] = "Login successful"
        return data


# Кастомный класс для получения JWT токенов
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# Функция для обработки логина
def login_view(request):
    if request.method == 'POST':
        if request.content_type == 'application/json':  # Для API-запитів
            data = json.loads(request.body)
            username = data.get('username')  # email или телефон
            password = data.get('password')
        else:  # Для класической формы
            username = request.POST.get('username')
            password = request.POST.get('password')

        # Аутентификация
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Генерация JWT токенов
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token

            # Возвращаем токены в ответе
            if request.content_type == 'application/json':
                return JsonResponse({
                    'message': 'Login successful',
                    'access': str(access_token),
                    'refresh': str(refresh),
                }, status=200)
            else:
                return redirect('home')  # Перенаправление на домашнюю страницу (измените на вашу)
        else:
            if request.content_type == 'application/json':
                return JsonResponse({'error': 'Invalid email/phone or password'}, status=401)
            else:
                messages.error(request, "Invalid email/phone or password")

    return render(request, 'login/login.html')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user
    return Response({
        "username": user.username,
        "email": user.email,
    })