from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length = 255)
    author = models.CharField(max_length = 100)
    isbn = models.CharField(max_length=13, primary_key=True ,unique=True)
    def __str__(self):
        return self.title
    
