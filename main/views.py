from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.views import APIView

from .models import User, Sex
from .serializers import UserSerializer
# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
