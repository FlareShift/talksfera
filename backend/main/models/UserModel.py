from django.db import models
from django.contrib.auth.models import AbstractUser
from .SexModel import Sex
from .LanguageModel import Language
from .UserLanguageModel import User_Language  


class User(AbstractUser):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    languages = models.ManyToManyField(Language, through='User_Language', related_name='users')
    location = models.ForeignKey('main.Location', null=True, on_delete=models.SET_NULL, related_name='user_location')
    birth_date = models.DateField(null=True)
    sex = models.ForeignKey(Sex, null=True, on_delete=models.SET_NULL)
    photo = models.CharField(max_length=300, blank=True, null=True)
    #timezone = models.CharField(max_length=63, blank=True, null=True)
    is_therapist = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.email

        if self.location:
            self.location.save()

        super().save(*args, **kwargs)

        # existing_languages = set(User_Language.objects.filter(user=self).values_list("language_id", flat=True))
        # new_languages = set(self.languages.all().values_list("id", flat=True))

        # if existing_languages != new_languages:
        #     User_Language.objects.filter(user=self).delete()
        #     User_Language.objects.bulk_create([
        #         User_Language(user=self, language_id=lang_id) for lang_id in new_languages
        #     ])
