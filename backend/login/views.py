from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.http import JsonResponse
from django.contrib.auth import authenticate, login


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['message'] = "Login successful"
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


def login_view(request):
    if request.method == 'POST':
        if request.content_type == 'application/json':  # Для API-запитів
            import json
            data = json.loads(request.body)
            username = data.get('username')  # email або телефон
            password = data.get('password')
        else:  # Для класичної форми
            username = request.POST.get('username')
            password = request.POST.get('password')

        # Аутентифікація
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if request.content_type == 'application/json':
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return redirect('home')  # Змінити на вашу головну сторінку
        else:
            if request.content_type == 'application/json':
                return JsonResponse({'error': 'Invalid email/phone or password'}, status=401)
            else:
                messages.error(request, "Invalid email/phone or password")

    return render(request, 'login/login.html')


