from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from account import views

urlpatterns = [
    # Your URLs...
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('api/register', views.UserCreateAndList.as_view()),
    path('api/user/<int:pk>/', views.UserUpdataDeleteRetrieveById.as_view()),

]
