from django.contrib import admin
from django.urls import path, include



from . import views


# Errors- user name is already defined in django, use different name for writing function 

urlpatterns = [

    path("vidura/", views.vidura, name="vidura"),
 
]
