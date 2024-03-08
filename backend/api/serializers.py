
from rest_framework import serializers
from .models import Api

class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Api
        fields = ('id','placename','city','imageurl')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)