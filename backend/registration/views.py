from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import PatientRegistrationForm
from .forms import TherapistRegistrationForm
from .forms import RegistrationForm
from django.http import JsonResponse
from main.models.LocationModel import Location
from cities_light.models import City
from rest_framework import generics
from main.serializers import UserSerializer
from main.models.UserModel import User


def register_patient(request):
    if request.method == "POST":
        form = PatientRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            #user.timezone = form.cleaned_data['timezone']
            login(request, user)  
            return redirect("home")  
    else:
        form = PatientRegistrationForm()
    return render(request, "registration/register_patient.html", {"form": form})


def register_therapist(request):
    if request.method == 'POST':
        form = TherapistRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save() 
            #user.timezone = form.cleaned_data['timezone']
            user.is_therapist = True
            user.save()
            login(request, user)
            return redirect('home')
        else:
            print(form.errors)  
    else:
        form = TherapistRegistrationForm()
    return render(request, 'registration/register_therapist.html', {'form': form})

def get_cities(request):
    country_code = request.GET.get('country')
    cities = City.objects.filter(country__code2=country_code).values('id', 'name')
    return JsonResponse(list(cities), safe=False)

class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
