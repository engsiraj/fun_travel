from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Api
from .serializers import ApiSerializer
from rest_framework import status
from .serializers import LoginSerializer
from django.contrib.auth import authenticate


# Create your views here.


class ApiView(APIView):
    def post(self,request):
        data = request.data
        serializer = ApiSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Place Added Successfully",safe=False)
        return JsonResponse("Failed to Add Place", safe=False)
    def get_place(self,pk):
        try:
            places = Api.objects.get(id=pk)
            return places
        except Api.DoesNotExist:
            raise Http404
    def get(self,request,pk=None):
        if pk:
            data = self.get_place(pk)
            serializer = ApiSerializer(data)
        else:
            data = Api.objects.all()
            serializer = ApiSerializer(data, many=True)
        return Response(serializer.data)
    def put(self, request, pk=None):
        place_to_update = Api.objects.get(id=pk)
        serializer = ApiSerializer(instance=place_to_update, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Place updated Successfully', safe=False)
        return JsonResponse('Failed to update student')
    def delete(self,request,pk):
        place_to_delete= Api.objects.get(id=pk)
        place_to_delete.delete()
        return JsonResponse('place deleted successfully', safe=False)
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            return Response({'message': 'Authentication successful'})
        else:
            return Response({'message': 'Authentication failed'}, status=status.HTTP_401_UNAUTHORIZED)