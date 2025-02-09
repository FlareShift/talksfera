from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import get_cities
from .views import UserRegistrationView 

urlpatterns = [
    path('patient/', views.register_patient, name='register_patient'),
    path('therapist/', views.register_therapist, name='register_therapist'),
    path('register/', TemplateView.as_view(template_name='registration/register.html'), name='register'),
    path('get-cities/', get_cities, name='get_cities'),
    #path('api/register/', UserRegistrationView.as_view(), name='api-register'),  # Для API

]
