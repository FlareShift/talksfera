from django.urls import path, include
from django.contrib import admin
from django.views.generic import TemplateView
from login import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),  # API для основного приложения
    path('api-auth/', include('rest_framework.urls')),
    path('', TemplateView.as_view(template_name='index.html')),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Логин
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Обновление токена

    path('registration/', include('registration.urls')),
    path('login/', include('login.urls')),

    path('register/', TemplateView.as_view(template_name="index.html"), name='register'),

    # ✅ Добавляем API для блокнота (note)
    path('api/note/', include('note.urls')),
]
