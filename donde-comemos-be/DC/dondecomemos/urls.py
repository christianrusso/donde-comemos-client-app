"""dondecomemos URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet
from restaurants.views import *
from superadmin.views import *
from privacy.views import * 

router = DefaultRouter()
router.register(r'restaurants', RestaurantViewSet, basename='restaurants')
router.register(r'fcm', FCMDeviceAuthorizedViewSet, basename='fcm')
router.register(r'users', UserViewSet, basename='users')
router.register(r'orders', OrderViewSet, basename='orders')
router.register(r'locations', LocationViewSet, basename='locations')
router.register(r'product-categories', ProductCategoryViewSet, basename='product-categories')
router.register(r'menus/(?P<restaurant>.+)', MenuViewSet, basename='menus')
router.register(r'services/(?P<restaurant>.+)', ServiceViewSet, basename='services')
router.register(r'brand_pictures/(?P<restaurant>.+)', RestaurantBrandPictureViewSet, basename='brand_pictures')
router.register(r'tags-macro/(?P<restaurant>.+)', TagMacroViewSet, basename='tags-macro')
# router.register(r'tags-micro/(?P<restaurant>.+)', TagMicroViewSet, basename='tags-micro')
router.register(r'payment-methods/(?P<restaurant>.+)', PaymentMethodViewSet, basename='payment-methods')
router.register(r'hours/(?P<restaurant>.+)', HoursViewSet, basename='hours')
router.register(r'favorite-restaurants', FavoriteRestaurantViewSet, basename='favorite-restaurants')
router.register(r'reservations', ReservationViewSet, basename='reservations')
router.register(r'qualifications', QualificationViewSet, basename='qualificationOrder')
router.register(r'score-category-item', ScoreCategoryItemViewSet, basename='score-ategory')
router.register(r'reservation-motive', ReservationMotiveViewSet, basename='score-ategory')
router.register(r'recover-password', RecoverPasswordViewSet, basename='recover-password')
router.register(r'payments', PaymentViewSet, basename='payments')

###     DEPRECADO, REMOVER EN LA PROXIMA VERSION    ###
router.register(r'products/(?P<restaurant>.+)', ProductViewSetDEPRECATED, basename='products')


urlpatterns = [
    path('api/login/', views.obtain_auth_token),
    path('api/', include(router.urls)),
    path('privacy/', PrivacyPolicyView.as_view(), name='privacy'),
    path('', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
