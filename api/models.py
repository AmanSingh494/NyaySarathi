from django.db import models
# for importing user
from django.contrib.auth.models import User
# Create your models here.
class Chat(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    response = models.TextField()
    # Automatically saves the time and date for every message and response
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        finalOutput =  f"{self.user.username} : {self.message}"
        return finalOutput