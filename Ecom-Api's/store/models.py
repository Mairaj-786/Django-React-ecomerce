from django.db import models

# Create your models here.


CATEGORIES_CHOICES = (
    ("Men", "Men"),
    ("Woman", "Woman"),
    ("Sport", "Sport"),
)


class Product(models.Model):
    title = models.CharField(max_length=30, null=True, blank=True)
    price = models.FloatField()
    image = models.ImageField(upload_to="media")
    category = models.CharField(
        choices=CATEGORIES_CHOICES, max_length=5, default="Woman")

    def __str__(self):
        return self.title
