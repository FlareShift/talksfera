from django.db import models

# Create your models here.

class Message(models.Model):
    room = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[{self.timestamp}] {self.username}: {self.text}"
