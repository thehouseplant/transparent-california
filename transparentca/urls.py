from django.contrib import admin
from django.urls import include, path
from .api import api

urlpatterns = [
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
