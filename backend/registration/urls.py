from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('register/', TemplateView.as_view(template_name='registration/register.html'), name='register'),
]