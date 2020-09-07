from rest_framework import generics
from .serializers import ItemSerializer, CategorySerializer, DetailSerializer
from .models import Item, Category, Detail


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DetailList(generics.ListCreateAPIView):
    queryset = Detail.objects.all()
    serializer_class = DetailSerializer


class DetailDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Detail.objects.all()
    serializer_class = DetailSerializer
