from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('patient/', views.register_patient, name='register_patient'),
    path('therapist/', views.register_therapist, name='register_therapist'),
    path('register/', TemplateView.as_view(template_name='registration/register.html'), name='register'),
]