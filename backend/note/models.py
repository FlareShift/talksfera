from django.db import models
from main.models import User

class EmotionEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    mood = models.IntegerField(choices=[(i, i) for i in range(11)])
    note = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.email} - {self.date} - {self.mood}"


class Goal(models.Model):
    PRIORITY_CHOICES = [
        ('high', 'Высокий'),
        ('medium', 'Средний'),
        ('low', 'Низкий'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    comment = models.TextField(blank=True)
    date = models.DateField()

    def __str__(self):
        return f"{self.user.email} - {self.title} ({self.priority})"


class SubGoal(models.Model):
    goal = models.ForeignKey(Goal, on_delete=models.CASCADE, related_name='subgoals')
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.goal.title} - {self.title} ({'✅' if self.completed else '❌'})"


class Resource(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    url = models.URLField(blank=True, null=True)
    note = models.TextField(blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.title}"
