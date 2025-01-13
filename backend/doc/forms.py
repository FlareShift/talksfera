from django import forms
from .models import Profile, TherapistDocument


class AvatarUploadForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['avatar']

class TherapistDocumentUploadForm(forms.ModelForm):
    class Meta:
        model = TherapistDocument
        fields = ['document']

