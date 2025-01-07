from django.http import HttpResponse
from django.shortcuts import render
import os
from django.conf import settings

from rest_framework import viewsets
from .models import User, Sex
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def index(request):
    # Проверяем, существует ли файл React сборки
    react_index_path = os.path.join(settings.BASE_DIR, 'frontend', 'build', 'index.html')

    if os.path.exists(react_index_path):
        # Рендерим файл React
        return render(request, 'index.html')
    else:
        # Если сборка не найдена
        return HttpResponse("React build not found. Please build the frontend.", status=404)


def home(request):
    return HttpResponse("home")


def register_user(request):
    return HttpResponse("register_user")


def login(request):
    return HttpResponse("login")


def resources_courses(request):
    return HttpResponse("resources_courses")


def about_us(request):
    return HttpResponse("about_us")


def business(request):
    return HttpResponse("business")


def review(request):
    return HttpResponse("review")


def contact(request):
    return HttpResponse("contact")


def therapist(request):
    return HttpResponse("therapist")
