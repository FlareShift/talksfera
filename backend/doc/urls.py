from django.urls import path
from . import views

urlpatterns = [
    path('therapist-dashboard/<int:therapist_id>/', views.therapist_dashboard, name='therapist_dashboard'),
    path('user-dashboard/<int:user_id>/', views.user_dashboard, name='user_dashboard'),
    path('upload-avatar/<int:user_id>/', views.upload_avatar, name='upload_avatar'),
    path('upload-document/<int:therapist_id>/', views.upload_therapist_document, name='upload_document'),

]