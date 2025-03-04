from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django is working! 🚀")

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/tasks/', include('tasks.urls')),
    path("", home),  
]

