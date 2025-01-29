from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import PatientRegistrationForm
from .forms import TherapistRegistrationForm
from .forms import RegistrationForm
from django.http import JsonResponse
from main.models.LocationModel import Location

def register_patient(request):
    if request.method == "POST":
        form = PatientRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.timezone = form.cleaned_data['timezone']
            login(request, user)  # Автоматичний вхід після реєстрації
            return redirect("home")  # Заміни на URL домашньої сторінки
    else:
        form = PatientRegistrationForm()
    return render(request, "registration/register_patient.html", {"form": form})


def register_therapist(request):
    if request.method == 'POST':
        form = TherapistRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save() 
            user.timezone = form.cleaned_data['timezone']
            user.is_therapist = True
            user.save()
            login(request, user)
            return redirect('home')
        else:
            print(form.errors)  # Вивести помилки, якщо форма не валідна
    else:
        form = TherapistRegistrationForm()
    return render(request, 'registration/register_therapist.html', {'form': form})

def get_cities(request, country):
    cities = Location.objects.filter(country=country).values_list('city', flat=True)
    return JsonResponse({'cities': list(cities)})


