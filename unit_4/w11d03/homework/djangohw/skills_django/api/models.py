from django.db import models
from django.utils.text import slugify


# Create your models here.

class Skill(models.Model):
    description = models.CharField(max_length=200)
    skill_level = models.IntegerField()

    def __str__(self):
        return '%s %s' % (self.description, self.skill_level)


class Note(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    skill_id = models.ForeignKey(Skill, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' % (self.title, self.body)