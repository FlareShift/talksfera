from django.urls import path
from . import views

urlpatterns = [
    path('patient/', views.register_patient, name='register_patient'),
    path('therapist/', views.register_therapist, name='register_therapist'),
]