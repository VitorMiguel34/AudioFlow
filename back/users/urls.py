from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import register_view, login_view

urlpatterns = [
    path('register/', register_view),
    path('login/', login_view)
]