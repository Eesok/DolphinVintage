from django.db import models

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=100)
    category_image = models.TextField()

    def __str__(self):
        return self.title


class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    item_image = models.TextField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.name


class Detail(models.Model):
    measurements = models.CharField(max_length=100)
    materials = models.CharField(max_length=100)
    styles = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, related_name='details')

    def __str__(self):
        return str(self.item)
