from django.urls import path
from . import views
from login.views import login_view

urlpatterns = [
    path('', login_view, name='login')
]
