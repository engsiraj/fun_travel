from django.urls import path
from .views import ApiView,LoginView


urlpatterns = [
   path('api/', ApiView.as_view()),
   path('api/<int:pk>/', ApiView.as_view()),
   path('api/login/', LoginView.as_view(), name='login'),
]
