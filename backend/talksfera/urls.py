from django.urls import path, include
from django.contrib import admin
from django.views.generic import TemplateView
from login import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('login/', include('login.urls')),
]
