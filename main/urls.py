from rest_framework import routers
from django.urls import path
from . import views
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns = [
    path('', include(router.urls)),
    #path('register', views.register_user, name='register_user'),
    #path('login', views.login, name='login'),
    #path('courses', views.resources_courses, name='resources_courses'),
    #path('about-us', views.about_us, name='about_us'),
    #path('business', views.business, name='business'),
    #path('reviews', views.review, name='review'),
    #path('contact', views.contact, name='contact'),
    #path('therapists', views.therapist, name='therapists'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
