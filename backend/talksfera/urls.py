from django.urls import path, include
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from login import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('registration/', include('registration.urls')),
    path('login/', include('login.urls')),
    path('register/', TemplateView.as_view(template_name="index.html"), name='register'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
