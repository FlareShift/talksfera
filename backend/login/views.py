# login/views.py

from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')  # email або телефон
        password = request.POST.get('password')

        # Аутентифікація через кастомний бекенд
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Змінити на вашу головну сторінку
        else:
            messages.error(request, "Invalid email/phone or password")

    return render(request, 'login/login.html')
