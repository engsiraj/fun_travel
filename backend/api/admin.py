from django.contrib import admin
from .models import Api

models_list = [Api]
admin.site.register(models_list)
# Register your models here.
