from tastypie.resources import ModelResource, ALL_WITH_RELATIONS
from tastypie import fields
from api.models import Skill, Note
from tastypie.authorization import Authorization

class SkillResource(ModelResource):
    class Meta:
        queryset = Skill.objects.all()
        resource_name = 'skill'
        authorization = Authorization()


class NoteResource(ModelResource):
    skill = fields.ForeignKey(SkillResource, 'skill')
    class Meta:
        queryset = Note.objects.all()
        resource_name = 'note'
        authorization = Authorization()
        fields = ['title', 'body']
        filtering = {
            'skill': ALL_WITH_RELATIONS
        }