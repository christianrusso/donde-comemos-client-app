from datetime import timedelta

from django.db.models import Avg

from basic_app.views import *
from .models import *
from .serializers import *
from rest_framework import viewsets, permissions
from django.contrib.auth import get_user_model
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from restaurants.model_helpers import Notifications
from django.core.mail import send_mail
from rest_framework.authtoken.models import Token


class RestaurantViewSet(AbstractViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    @action(methods=['post'], detail=True, permission_classes=[permissions.IsAuthenticated])
    def is_available(self, request, pk=None):
        self.serializer_class = IsAvailableSerializer
        restaurant = get_object_or_404(Restaurant, pk=pk)
        available = restaurant.is_available(request.data['date'], request.data['hour']) and restaurant.has_room(
            request.data['diners'], request.data['hour'], request.data['date']) and restaurant.available_date(
            request.data['date'], request.data['hour'])

        return Response({'is_available': available})

    @action(detail=True, permission_classes=[permissions.AllowAny])
    def qualification_by_category(self, request, pk=None):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        # .annotate(average=Avg('orderqualification__score'))

        orders_scores = ScoreCategory.objects.filter(qualification__restaurant=restaurant)

        return Response(
            ScoreCategoryQualificationSerializer(orders_scores.annotate(average=Avg('qualification__score')),
                                                 many=True).data)


class PaymentViewSet(AbstractViewSet):
    serializer_class = PaymentSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            data = serializer.data
            client = get_object_or_404(User, username=data['client'])
            restaurant = get_object_or_404(Restaurant, pk=data['restaurant'])

            import requests
            import json
            payload = {
              "mpData": {
                "token": data['token'],
                "payer": {
                  "email": client.username
                },
                "transaction_amount": data['amount'],
                "description": data['description'],
                "installments": 1,
                "payment_method_id": data['payment_method']
              },
              "save": False,
              "data": {
                "restaurantId": restaurant.id,
                "total": data['amount'],
                "access_token": restaurant.access_token
              }
            }

            try:
                url = 'https://testing.gaiacoop.tech/gapi/public/index.php'
                response = requests.post(url, data=json.dumps(payload))
                response.raise_for_status()
                return Response({'status': 'ok', 'data': response.json()})
            except Exception as e:
                return Response("Hubo un error en GAPI", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        else:
            return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductCategoryViewSet(AbstractViewSet):
    serializer_class = ProductCategorySerializer

    def get_queryset(self):
        restaurant = self.request.query_params.get('restaurant', None)

        return ProductCategory.objects.filter(restaurant=restaurant)


class MenuViewSet(AbstractViewSet):
    serializer_class = MenuSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        date = self.request.query_params.get('date')
        if date is not None:
            date = timezone.datetime.strptime(date, '%Y-%m-%d')
            return Menu.objects.filter((Q(menudate__fixed_date=date) | Q(menuday__fixed_day=date.weekday())), restaurant=restaurant)

        return Menu.objects.filter(restaurant=restaurant)


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = (permissions.AllowAny,)

        return super().get_permissions()

    @action(detail=False, permission_classes=[permissions.IsAuthenticated, ])
    def get_from_token(self, request):
        serializer = self.get_serializer(request.user, many=False)
        return Response(serializer.data)


    @action(methods=['put'], detail=True, permission_classes=[permissions.IsAuthenticated])
    def change(self, request, pk=None):
        usr = get_object_or_404(User, pk=pk)
        usr.first_name = request.data['first_name']
        usr.last_name = request.data['last_name']
        usr.save()

        data = self.serializer_class(usr).data

        return Response(data)


class OrderViewSet(AbstractViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def by_user(self, request):  # El objeto request tiene un atributo usuario basado en el token
        data = OrderSerializer(Order.objects.filter(client=request.user), many=True).data  
        return Response(data)

    @action(methods=['put'], detail=True, permission_classes=[permissions.IsAuthenticated])
    def cancel(self, request, pk=None):
        order = get_object_or_404(Order, pk=pk)
        if order.client == request.user:
            order.cancel(request.user)
            data = self.serializer_class(order).data
            return Response(data)
        else:
            return Response('El usuario no coincide con el cliente', status=status.HTTP_401_UNAUTHORIZED)
        

class LocationViewSet(AbstractViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()


class ServiceViewSet(AbstractViewSet):
    serializer_class = ServiceSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return Service.objects.filter(restaurantservice__restaurant=restaurant)


class RestaurantBrandPictureViewSet(AbstractViewSet):
    serializer_class = RestaurantBrandPictureSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return RestaurantBrandPicture.objects.filter(restaurant=restaurant)


class TagMacroViewSet(AbstractViewSet):
    serializer_class = TagMacroSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return HighLevelTag.objects.filter(restauranthighleveltag__restaurant=restaurant)


# class TagMicroViewSet(AbstractViewSet):
#     serializer_class = TagMicroSerializer

#     def get_queryset(self):
#         restaurant = self.kwargs['restaurant']
#         return LowLevelTag.objects.filter(restaurantlowleveltag__restaurant=restaurant)


class PaymentMethodViewSet(AbstractViewSet):
    serializer_class = PaymentMethodSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return PaymentMethod.objects.filter(restaurantpaymentmethod__restaurant=restaurant)


class HoursViewSet(AbstractViewSet):
    serializer_class = HoursSerializer

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return RestaurantAttentionSchedule.objects.filter(restaurant=restaurant)


class FavoriteRestaurantViewSet(AbstractViewSet):
    serializer_class = FavoriteRestaurantSerializer

    # queryset = FavoriteRestaurant.objects.all()

    def get_queryset(self):
        queryset = FavoriteRestaurant.objects.all()
        client = self.request.query_params.get('client', None)

        if client is not None:
            queryset = queryset.filter(client=client)

        restaurant = self.request.query_params.get('restaurant', None)

        if restaurant is not None:
            queryset = queryset.filter(restaurant=restaurant)

        return queryset

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def by_user(self, request):
        data = FavoriteRestaurantSerializer(FavoriteRestaurant.objects.filter(client=request.user), many=True).data
        return Response(data)

    def create(self, request, **kwargs):
        user = request.data['client']

        if user == request.user.id:
            return super().create(request, **kwargs)

        else:
            return Response('El usuario no coincide con el token', status=status.HTTP_401_UNAUTHORIZED)


class ReservationViewSet(AbstractViewSet):
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, permission_classes=[permissions.IsAuthenticated])
    def by_user(self, request):
        data = self.serializer_class(Reservation.objects.filter(client=request.user),
                                     many=True).data  # many=true porque devuelve una lista de reservas
        return Response(data)

    @action(methods=['put'], detail=True, permission_classes=[permissions.IsAuthenticated])
    def cancel(self, request, pk=None):
        reservation = get_object_or_404(Reservation, pk=pk)
        if reservation.client == request.user:
            reservation.cancel(request.user)
            data = self.serializer_class(reservation).data
            return Response(data)
        else:
            return Response('El usuario no coincide con el cliente', status=status.HTTP_401_UNAUTHORIZED)

    def is_available(self, request, pk=None):
        reservation = get_object_or_404(Reservation, pk=pk)
        Reservation.objects.filter(restaurant=restaurant, related_id=self.id)

        return Response(data)


class CreateManyMixin:
    def get_serializer(self, *args, **kwargs):
        """ if an array is passed, set serializer to many """
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class QualificationViewSet(CreateManyMixin, AbstractViewSet):
    serializer_class = QualificationSerializer
    queryset = Qualification.objects.all()


class RecoverPasswordViewSet(AbstractViewSet):
    serializer_class = RecoverPasswordSerializer
    permission_classes = [permissions.AllowAny]

    @action(methods=['post'], detail=False)
    def mail(self, request):
        import random

        number = random.randrange(10000, 99999)
        usr = get_object_or_404(User, email=request.data['email'])

        UserRecoveryCode.objects.filter(client=usr).delete()

        user_code = UserRecoveryCode(client=usr, code=number, create_user_id=usr.id, update_user_id=usr.id)
        user_code.save()

        send_mail(
            'Recupera tu contraseña',
            'Código de verificación {number}'.format(number=number),
            'admin@dondecomemos.com.ar',
            [usr.email],
            fail_silently=False,
        )

        return Response({'sent': True})

    @action(methods=['post'], detail=False)
    def checkCode(self, request):
        user_recovery_code = get_object_or_404(UserRecoveryCode, client__email=request.data['email'],
                                               code=request.data['code'])

        if user_recovery_code.create_dttm < (timezone.now() - timedelta(minutes=15)):
            return Response({'error': 'code expired'}, status=status.HTTP_403_FORBIDDEN)

        return Response({'token': Token.objects.get_or_create(user=user_recovery_code.client)[0].key},status=200)

    @action(methods=['post'], detail=False, permission_classes=[permissions.IsAuthenticated])
    def set_password(self, request):
        usr = get_object_or_404(User, email=request.data['email'])
        if usr != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        usr.set_password(request.data['new_password'])
        usr.save()

        return Response(status=200)

    @action(methods=['post'], detail=False, permission_classes=[permissions.IsAuthenticated])
    def change_password(self, request):
        usr = request.user

        if not usr.check_password(request.data['old_password']):
            return Response({ "errorCode": "INCORRECT_OLD_PASSWORD" }, status=status.HTTP_403_FORBIDDEN)
                
        usr.set_password(request.data['new_password'])    
        usr.save()

        return Response(status=200)


###     DEPRECADO, REMOVER EN LA PROXIMA VERSION    ###
class ProductViewSetDEPRECATED(AbstractViewSet):
    serializer_class = ProductSerializerDEPRECATED

    def get_queryset(self):
        restaurant = self.kwargs['restaurant']
        return Product.objects.filter(restaurant=restaurant)
