from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length = 200)
    image = models.ImageField(upload_to="artists/", null=True, blank=True)

class Song(models.Model):
    name = models.CharField(max_length = 200)
    duration_time = models.DurationField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    image = models.ImageField(upload_to="covers/", null=True, blank=True)
    audio = models.FileField(upload_to="songs/")

    def __str__(self):
        return self.name