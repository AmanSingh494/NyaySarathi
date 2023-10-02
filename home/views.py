from django.shortcuts import render,redirect

from django.http import JsonResponse

# from .models import Recipe

# Create your views here.

def index(request):
    return render(request, "index.html") # you can also give variables ,
