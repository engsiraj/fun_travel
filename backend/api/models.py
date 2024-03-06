from django.db import models

# Create your models here.
class Api(models.Model):
    id = models.AutoField(primary_key=True)
    placename = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    imageurl = models.CharField(max_length=1048)
