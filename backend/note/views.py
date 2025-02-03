from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import EmotionEntry, Goal, SubGoal, Resource
from .serializers import EmotionEntrySerializer, GoalSerializer, SubGoalSerializer, ResourceSerializer

class EmotionEntryViewSet(viewsets.ModelViewSet):
    queryset = EmotionEntry.objects.all()  # ✅ Добавляем queryset
    serializer_class = EmotionEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()  # ✅ Добавляем queryset
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SubGoalViewSet(viewsets.ModelViewSet):
    queryset = SubGoal.objects.all()  # ✅ Добавляем queryset
    serializer_class = SubGoalSerializer
    permission_classes = [IsAuthenticated]


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()  # ✅ Добавляем queryset
    serializer_class = ResourceSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
