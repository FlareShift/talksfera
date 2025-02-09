from django.db import models
from django.conf import settings
from .LanguageModel import Language

User = settings.AUTH_USER_MODEL  # Використовуємо налаштування AUTH_USER_MODEL

class User_Language(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_language_relations')
    language = models.ForeignKey(Language, on_delete=models.CASCADE, related_name='user_language_relations')
    
    class Meta:
        unique_together = ('user', 'language')
        db_table = 'main_user_language'
        
    def __str__(self):
        return f'{self.user.username} - {self.language.language_name}'


