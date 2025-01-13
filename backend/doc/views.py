from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import AvatarUploadForm, TherapistDocumentUploadForm
from .models import CustomUser, TherapistDocument, Profile
from django.views.decorators.csrf import csrf_exempt
from .models import Profile, TherapistDocument


def upload_avatar(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id) 
    profile = get_object_or_404(Profile, user=user) 

    if request.method == 'POST':
        avatar = request.FILES.get('avatar')
        if avatar:
            profile.avatar = avatar
            profile.save()
            return redirect('user_dashboard', user_id=user.id) 

    return render(request, 'upload_avatar.html', {'user': user, 'profile': profile})


def upload_therapist_document(request, therapist_id): 
    therapist = get_object_or_404(CustomUser, id=therapist_id)

    if not therapist.is_therapist:
        return render(request, 'doc/error.html', {'message': 'User is not a therapist.'})

    if request.method == 'POST':
        form = TherapistDocumentUploadForm(request.POST, request.FILES)
        if form.is_valid():
            document = form.save(commit=False)
            document.therapist = therapist
            document.save()
            return render(request, 'success.html', {'message': 'Document uploaded successfully!'})
    else:
        form = TherapistDocumentUploadForm()

    return render(request, 'upload_document.html', {'form': form, 'therapist': therapist})


def user_dashboard(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    return render(request, 'user_dashboard.html', {'user': user})


def therapist_dashboard(request, therapist_id):
    therapist = get_object_or_404(CustomUser, id=therapist_id)

    if not therapist.is_therapist:
        return render(request, 'error.html', {'message': 'User is not a therapist.'})

    documents = therapist.therapistdocument_set.all()
    return render(request, 'therapist_dashboard.html', {
        'therapist': therapist,
        'documents': documents,
    })