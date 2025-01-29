from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('patient/', views.register_patient, name='register_patient'),
    path('therapist/', views.register_therapist, name='register_therapist'),
    path('register/', TemplateView.as_view(template_name='registration/register.html'), name='register'),

    path('get_cities_by_country/<str:country>/', views.get_cities, name='get_cities'),
]
from django.urls import path
from . import views
