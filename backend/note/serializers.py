from rest_framework import serializers
from .models import EmotionEntry, Goal, SubGoal, Resource

class EmotionEntrySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = EmotionEntry
        fields = '__all__'


class SubGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubGoal
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    subgoals = SubGoalSerializer(many=True, read_only=True)

    class Meta:
        model = Goal
        fields = '__all__'


class ResourceSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Resource
        fields = '__all__'
