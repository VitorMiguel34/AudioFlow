from django.shortcuts import render
from rest_framework import viewsets
from .models import Song, Artist
from .serializers import SongSerializer, ArtistSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
