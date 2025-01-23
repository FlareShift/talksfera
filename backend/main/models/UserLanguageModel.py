from django.db import models
from .LanguageModel import Language
from .UserModel import User

class User_Language(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'language')

    