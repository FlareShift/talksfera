from django.db import models

class Language(models.Model):
    language_name = models.CharField(max_length=45)

    def __str__(self):
        return f'{self.language_name}'
