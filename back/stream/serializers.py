from rest_framework import serializers
from .models import Artist,Playlist,Song

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ["id","name","image"]


class SongSerializer(serializers.ModelSerializer):

    artsist = ArtistSerializer(read_only=True)

    artist_id = serializers.PrimaryKeyRelatedField(
        queryset=Artist.objects.all(), source='artist', write_only=True
    )

    class Meta:
        model = Song
        fields = ["id","name","duration_time","artist","image","audio","artist_ud"]
        

class PlaylistSerializer(serializers.ModelSerializer):

    songs = SongSerializer(many=True, read_only=True)

    class Meta:
        model = Playlist
        fields = ["name,user"]

