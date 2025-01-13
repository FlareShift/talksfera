from django.db import models
from django.conf import settings
from django.contrib.auth.models import User, AbstractUser
import uuid
import os
from django.utils.deconstruct import deconstructible
from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image
import io

class CustomUser(AbstractUser):
    is_therapist = models.BooleanField(default=False)  

def therapist_doc_upload_path(instance, filename):
    return f'therapists/{instance.therapist.id}/{uuid.uuid4()}{filename}'

def avatar_upload_path(instance, filename):
    ext = filename.split('.')[-1] if '.' in filename else 'jpg' 
    new_filename = f"{uuid.uuid4()}.{ext}"
    return f"avatars/{new_filename}"

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to=avatar_upload_path, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)

    def save(self, *args, **kwargs):
        # Видаляємо старий файл, якщо замінюється аватар
        try:
            this = Profile.objects.get(id=self.id)
            if this.avatar and this.avatar != self.avatar:
                if os.path.isfile(this.avatar.path):
                    os.remove(this.avatar.path)
        except Profile.DoesNotExist:
            pass  

        super().save(*args, **kwargs)
        

class TherapistDocument(models.Model):
    therapist = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'is_staff': True})
    document = models.FileField(upload_to=therapist_doc_upload_path)