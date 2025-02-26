from django.shortcuts import render

from .models import Task
from .serializers import TaskSerializer

class TaskListCreeateView(generics.ListCreateAPIView): 
  queryset = Task.objects.all()
  serializer_class = TaskSerializer

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer
