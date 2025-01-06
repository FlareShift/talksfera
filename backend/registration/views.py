from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegistrationForm, TherapistRegistrationForm

def register_patient(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = RegistrationForm()
    return render(request, 'registration/register_patient.html', {'form': form})

def register_therapist(request):
    if request.method == 'POST':
        form = TherapistRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_therapist = True
            user.save()
            TherapistProfile.objects.create(
                user=user,
                education=form.cleaned_data['education'],
                certificates=form.cleaned_data['certificates'],
                experience_years=form.cleaned_data['experience_years'],
                therapy_types=form.cleaned_data['therapy_types'],
                treatment_methods=form.cleaned_data['treatment_methods'],
                availability=form.cleaned_data['availability']
            )
            login(request, user)
            return redirect('home')
    else:
        form = TherapistRegistrationForm()
    return render(request, 'registration/register_therapist.html', {'form': form})

# Create your views here.
