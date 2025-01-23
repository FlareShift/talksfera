from django.contrib import admin
from django.contrib.auth.models import User
from main.models.UserModel import User
from main.models.SexModel import Sex 
from main.models.LanguageModel import Language

admin.site.register(User)

admin.site.register(Sex) 

admin.site.register(Language)  
