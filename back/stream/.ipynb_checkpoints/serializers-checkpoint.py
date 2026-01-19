from rest_framework import serializers
from .models import Song,Artist

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ["id","name","duration_time","artist","image","audio"]


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ["id","name","image"]