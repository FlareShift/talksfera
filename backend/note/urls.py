from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmotionEntryViewSet, GoalViewSet, SubGoalViewSet, ResourceViewSet

router = DefaultRouter()
router.register(r'emotions', EmotionEntryViewSet)
router.register(r'goals', GoalViewSet)
router.register(r'subgoals', SubGoalViewSet)
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
