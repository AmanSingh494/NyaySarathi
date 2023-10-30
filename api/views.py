from django.shortcuts import render,redirect

from django.http import JsonResponse
# written by admin


from django.utils import timezone
from .models import Chat
# For API handling and request OpenAI
import json
import openai
import requests
# from django.conf import settings 

# Create your views here.



openai.api_key_path = "F:/backup-kali/codeFiles/projects/NyaySarathi/.env"

# By chat-gpt needs modification for further usage 
def get_vidura_response(user_message):
    
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content":"You are an helpful Legal Assistant who has knowledge of Constitution of India along with that, you have read all the books regarding Legal "},
            {"role": "user", "content": user_message},
        ]
    )
    answer = response.choices[0].message.content.strip()
    return answer
    

# Handliing request for vidura from openai api
def vidura(request):
    chats = Chat.objects.filter(user = request.user)

    if request.method == 'POST':
        user_message = request.POST.get("message")
        vidura_response = get_vidura_response(user_message)

        chat = Chat(user = request.user, message = user_message, response= vidura_response, created_at = timezone.now())

        chat.save()


        return render(request, "vidura.html", {"chats": chats})
    
    return render(request, "vidura.html", {"chats" : chats })


