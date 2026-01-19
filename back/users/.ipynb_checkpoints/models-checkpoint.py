from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    plan = models.CharField(max_length = 200)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    
