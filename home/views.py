from django.shortcuts import render,redirect

from django.http import JsonResponse
# written by admin

from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate,login, logout
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, "index.html") # you can also give variables ,

def about(request):
    return render(request,"about.html")

def services(request):
    return render(request, "services.html")

def contact(request):
    return render(request, "contact.html")




def loginUser(request):
    if request.method =="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')


        #checking user credentials 

        user = authenticate(username=username, password=password)

        if user is not None:
            #A backend authenticated the credentials
            login(request, user)
     
            return redirect('/vidura') 

        else:
            # No backend authenticated the credentials
            error_message = "Invalid username or password! Please try again."
            messages.error(request, error_message)
            # return render(request, 'login.html')
            return render(request, "login.html", {"error_message" : error_message} )


    return render(request, 'login.html')

def signupUser(request):
    if request.method =="POST":
        # Get the parameters
        username = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['password']
        pass2 = request.POST['cnf-password']

        # check for erroneous parameters
        if len(username) > 10:
            error_msg1 = "username must be under 10 characters."
            messages.error(request,error_msg1 )
            return render(request, 'signup.html', {"error_message" : error_msg1})

        # Checking username fulfills the criteria
        if not username.isalnum():
            error_msg2 = "username should only contain letters and nubmers "
            messages.error(request, error_msg2)
            return render(request,'signup.html', {"error_message" : error_msg2})
        
        # password should match
        if pass1 != pass2:
            error_msg3 = "passwords do not match!"
            messages.error(request, error_msg3 )
            return render(request, 'signup.html', {"error_message" : error_msg3})
        

        # Check if the username and email are unique
        if User.objects.filter(username=username).exists():
            error_msg4 = "username is already taken. Please choose a different one."
            messages.error(request, error_msg4 )
            return render(request,'signup.html', {"error_message" : error_msg4})

        if User.objects.filter(email=email).exists():
            error_msg5 = "Email is already associated with an account."
            messages.error(request,error_msg5 )
            return render(request, 'signup.html', {"error_message" : error_msg5})


        # Create the user.
        myuser = User.objects.create_user(username, email, pass1)
        myuser.save()
        success_msg = "Your NyaySarathi account created Successfully!"
        messages.success(request, success_msg )
        return render(request, 'vidura.html', {"error_message" : success_msg})


    # else:
    #     return HttpResponse('404 - Not found')


    return render(request, 'signup.html')


def logoutUser(request):
    auth.logout(request)
    return redirect("home")

    
# view for handling errors

def error_handler(request):
    return HttpResponse('404 Page')

def custom_404_page(request, exception):
    return render(request, "404.html", status=404)

