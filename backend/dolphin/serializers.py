from rest_framework import serializers
from .models import Item, Detail, Category


class CategorySerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )

    class Meta:
        model = Category
        fields = ('title', 'items',)


class ItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        read_only=True
    )

    class Meta:
        model = Item
        fields = ('name', 'price', 'description', 'category',)


class DetailSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
        read_only=True
    )

    class Meta:
        model = Detail
        fields = ('measurements', 'item', 'materials', 'styles', 'brand',)
