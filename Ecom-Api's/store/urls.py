from django.urls import path
from . import views

urlpatterns = [
    path('product', views.ProductCreateAndList.as_view()),
    path('product/<int:pk>', views.ProductRetrieve.as_view()),

]
