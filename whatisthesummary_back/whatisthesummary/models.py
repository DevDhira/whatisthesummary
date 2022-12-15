from django.db import models

# Create your models here.
class myDbModel(models.Model):
    db = models.CharField(max_length=200)