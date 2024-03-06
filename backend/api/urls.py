from django.urls import path
from .views import ApiView

urlpatterns = [
   path('api/', ApiView.as_view()),
   path('api/<int:pk>/', ApiView.as_view()),
    ]
