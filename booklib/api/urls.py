from django.urls import path, include
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('books/', views.BookList.as_view()),
    path('books/<int:isbn>/', views.BookDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
