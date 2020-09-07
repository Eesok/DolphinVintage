from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('items/', views.ItemList.as_view(), name='item_list'),
    path('items/<int:pk>', views.ItemDetail.as_view(), name='item_detail'),
    path('details/', views.DetailList.as_view(), name='detail_list'),
    path('details/<int:pk>', views.DetailDetail.as_view(), name='detail_detail'),
    path('categories/', views.CategoryList.as_view(), name='category_list'),
    path('categories/<int:pk>', views.CategoryDetail.as_view(),
         name='category_detail'),
]
