from django.contrib import admin
from django.urls import path, include



from home import views


# Errors- user name is already defined in django, use different name for writing function 

urlpatterns = [
    path("", views.index , name="home"),
    
    path("about/", views.about , name="about"),
    path("contact/", views.contact , name="contact"),
    path("services/", views.services , name="services"),
    
    path("login/",views.loginUser, name="loginUser"),
    path("signup/", views.signupUser, name="signupUser"),
    path("logout/", views.logoutUser, name="logout"),
    
    
]

# defining custom 404 url page :
# Define the custom 404 page view
handler404 = 'home.views.custom_404_page'
