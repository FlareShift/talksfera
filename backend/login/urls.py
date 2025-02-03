from django.urls import path
from . import views
from login.views import login_view
from .views import CustomTokenObtainPairView, get_user_info
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', login_view, name='login'),  # Путь для login
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Путь для получения токенов
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Путь для обновления токена

    path('user/me/', get_user_info, name='user-info'),
]
