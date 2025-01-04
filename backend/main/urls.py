from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

from login.views import login_view

urlpatterns = [
    path('', views.index, name='home'),
    path('register', views.register_user, name='register_user'),
    path('login/', login_view, name='login'),
    path('courses', views.resources_courses, name='resources_courses'),
    path('about-us', views.about_us, name='about_us'),
    path('business', views.business, name='business'),
    path('reviews', views.review, name='review'),
    path('contact', views.contact, name='contact'),
    path('therapists', views.therapist, name='therapists'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

