from django.contrib import admin
from django.urls import path, include



from home import views

urlpatterns = [
    path("", views.index , name="home"),
    # path("", views.index , name="home"),
    # path("about/", views.about , name="about"),
    # path("contact/", views.contact , name="contact"),
    # path("services/", views.services , name="services"),
    # path("recipe/", views.recipe , name="recipe"),
    # # path("process_message/", views.process_message, name="process_message"),
    # path("recipe_search/", views.recipe_search, name="recipe_search"),



    
]
