from django.db import models

class Task(models.Model):
    TASK_STATUS = (
        ('PENDING', 'Pending'),
        ('RUNNING', 'Running'),
        ('PAUSED', 'Paused'),
        ('COMPLETED', 'Completed'),
    )
    
    title = models.TextField()
    status = models.CharField(max_length=10, choices=TASK_STATUS, default='PENDING')
    pomodoro_duration = models.IntegerField(default=25)  # in minutes
    break_duration = models.IntegerField(default=5)  # in minutes
    pomodoros_completed = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.status})"

    
    title = models.TextField()
    status = models.CharField(max_length=10, choices=TASK_STATUS, default='PENDING')
    pomodoro_duration = models.IntegerField(default=25)  # in minutes
    break_duration = models.IntegerField(default=5)  # in minutes
    pomodoros_completed = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} ({self.status})"