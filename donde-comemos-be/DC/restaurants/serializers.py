from rest_framework import serializers
from basic_app.serializers import *
from .models import *
from superadmin.models import *


class OpenHoursSerializer(AbstractSerializer):
    class Meta:
        model = RestaurantAttentionSchedule
        fields = ('opening_hour', 'closing_hour',)


class RestaurantPromotionSerializer(AbstractSerializer):
    class Meta:
        model = RestaurantPromotion
        fields = ('promotion',)


class RestaurantSerializer(AbstractSerializer):
    is_available_now = serializers.BooleanField(read_only=True)
    hours = OpenHoursSerializer(many=True, read_only=True, source='hours_today')
    promotions = RestaurantPromotionSerializer(many=False, read_only=True, source='promotions_today')

    class Meta:
        model = Restaurant
        fields = (
            'id',
            'name',
            'description',
            'address',
            'is_premium',
            'accept_orders',
            'profile_picture',
            'delivery',
            'self_service',
            'in_place',
            'reservations',
            'max_diners',
            'influence_range',
            'is_available_now',
            'hours',
            'average_time',
            'public_key',
            'max_discount_today',
            'promotions',
        )


class ProductCategoryAdditionalSerializer(AbstractSerializer):
    class Meta:
        model = ProductCategoryAdditional
        fields = ('id', 'name', 'real_price', 'discount_price',) 


class ProductSerializer(AbstractSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'restaurant',
            'description',
            'real_price',
            'discount_price',
            'sort_nbr',
        )


class ProductCategorySerializer(AbstractSerializer):
    additionals = ProductCategoryAdditionalSerializer(many=True, read_only=True, source='productcategoryadditional_set')
    products = ProductSerializer(many=True, read_only=True, source='product_set')
    class Meta:
        model = ProductCategory
        fields = ('id', 'name', 'additionals', 'products')


class ProductSerializerSmall(AbstractSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'real_price',
            'discount_price',
        )


class RestaurantSerializerSmall(AbstractSerializer):
    class Meta:
        model = Restaurant
        fields = (
            'id',
            'name',
            'description'
        )


class MenuCategorySerializer(AbstractSerializer):
    class Meta:
        model = MenuCategory
        fields = ('id', 'name',)

class SubMenuSerializer(AbstractSerializer):

    class Meta:
        model = SubMenu
        fields = ('id', 'name', 'value')

class MenuSerializer(AbstractSerializer):
    category = MenuCategorySerializer(many=False, read_only=False)
    sub_menus = SubMenuSerializer(many=True, read_only=True, source='submenu_set')

    class Meta:
        model = Menu
        fields = (
            'id',
            'name',
            'restaurant',
            'description',
            'category',
            'real_price',
            'discount_price',
            'sub_menus'
        )


class MenuSerializerSmall(AbstractSerializer):
    class Meta:
        model = Menu
        fields = (
            'id',
            'name',
            'description',
            'real_price',
            'discount_price',
        )


class LocationSerializer(AbstractSerializer):
    class Meta:
        model = Location
        fields = (
            'id',
            'name',
        )

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        usr = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )

        return usr

    def update(self, instance, validated_data):

        instance.username = validated_data['username']
        instance.email = validated_data['email']
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']

        instance.save()

        return instance


class OrderProductSerializer(AbstractSerializer):
    product = ProductSerializerSmall(many=False, read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='product',
                                                    queryset=Product.objects.all())

    additional = ProductCategoryAdditionalSerializer(many=False, read_only=True)
    additional_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='additional',
                                                    queryset=ProductCategoryAdditional.objects.all(), allow_null=True)

    class Meta:
        model = OrderProduct
        fields = ('id', 'product', 'amount', 'product_id', 'additional', 'additional_id')


class OrderMenuSerializer(AbstractSerializer):
    menu = MenuSerializerSmall(many=False, read_only=True)
    menu_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='menu',
                                                 queryset=Menu.objects.all())

    class Meta:
        model = OrderMenu
        fields = ('id', 'menu', 'amount', 'menu_id',)


class OrderSerializer(AbstractSerializer):
    products = OrderProductSerializer(many=True, read_only=False, source='orderproduct_set')
    menus = OrderMenuSerializer(many=True, read_only=False, source='ordermenu_set')
    restaurant = RestaurantSerializerSmall(many=False, read_only=True)
    restaurant_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='restaurant',
                                                       queryset=Restaurant.objects.all())
    real_price = serializers.DecimalField(read_only=True, max_digits=10, decimal_places=2)
    discount_price = serializers.DecimalField(read_only=True, max_digits=10, decimal_places=2)


    class Meta:
        model = Order
        fields = ('id','restaurant', 'restaurant_id', 'order_hour', 'client', 'address', 'phone_nbr', 'expected_payment', 'comments', 'real_price', 'discount_price', 'order_type', 'create_dttm', 'products', 'menus', 'delivered', 'qualified', 'estimated_time', 'mp_id', 'accepted', 'cancelled')


    def create(self, validated_data):
        prods_data = validated_data.pop('orderproduct_set')
        menus_data = validated_data.pop('ordermenu_set')
        user = self.context['request'].user
        validated_data['create_user'] = user
        validated_data['update_user'] = user
        order = Order.objects.create(**validated_data)

        self._create_many(prods_data, user, OrderProduct, order)
        self._create_many(menus_data, user, OrderMenu, order)

        order._price = order.discount_price
        order.save()
        
        return order

    def _create_many(self, dataset, user, klass, order):
        items = []
        for data in dataset:
            data['create_user'] = user
            data['update_user'] = user
            items.append(klass(order=order, **data))
        klass.objects.bulk_create(items)


class ServiceSerializer(AbstractSerializer):
    class Meta:
        model = Service
        fields = (
            'id',
            'name',
        )


class RestaurantBrandPictureSerializer(AbstractSerializer):
    class Meta:
        model = RestaurantBrandPicture
        fields = ('brand_picture',)


class TagMacroSerializer(AbstractSerializer):
    class Meta:
        model = HighLevelTag
        fields = (
            'id',
            'name',
        )


# class TagMicroSerializer(AbstractSerializer):
#     class Meta:
#         model = LowLevelTag
#         fields = (
#             'id',
#             'name',
#         )


class PaymentMethodSerializer(AbstractSerializer):
    class Meta:
        model = PaymentMethod
        fields = (
            'id',
            'name',
        )


class HoursSerializer(AbstractSerializer):
    day = serializers.CharField(source='get_day_display')

    class Meta:
        model = RestaurantAttentionSchedule
        fields = (
            'day',
            'opening_hour',
            'closing_hour'
        )


class FavoriteRestaurantSerializer(AbstractSerializer):
    restaurant = RestaurantSerializerSmall(many=False, read_only=True)
    restaurant_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='restaurant',
                                                       queryset=Restaurant.objects.all())

    class Meta:
        model = FavoriteRestaurant
        fields = ('id', 'client', 'restaurant', 'restaurant_id')


class ReservationProductSerializer(AbstractSerializer):
    product = ProductSerializerSmall(many=False, read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='product',
                                                    queryset=Product.objects.all())

    additional = ProductCategoryAdditionalSerializer(many=False, read_only=True)
    additional_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='additional',
                                                    queryset=ProductCategoryAdditional.objects.all(), allow_null=True)

    class Meta:
        model = ReservationProduct
        fields = ('id', 'product', 'amount', 'product_id', 'additional', 'additional_id')


class ReservationMenuSerializer(AbstractSerializer):
    menu = MenuSerializerSmall(many=False, read_only=True)
    menu_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='menu',
                                                 queryset=Menu.objects.all())

    class Meta:
        model = ReservationMenu
        fields = ('id', 'menu', 'amount', 'menu_id',)


class ReservationSerializer(AbstractSerializer):
    products = ReservationProductSerializer(many=True, read_only=False, source='reservationproduct_set')
    menus = ReservationMenuSerializer(many=True, read_only=False, source='reservationmenu_set')
    restaurant = RestaurantSerializer(many=False, read_only=True)
    restaurant_id = serializers.PrimaryKeyRelatedField(many=False, write_only=True, source='restaurant',
                                                       queryset=Restaurant.objects.all())

    class Meta:
        model = Reservation
        fields = ('id', 'client', 'restaurant', 'restaurant_id', 'phone_nbr', 'comments', 'diners', 'cancelled', 'reservation_date', 'reservation_hour', 'qualified', 'motive','finished', 'products', 'menus', 'mp_id')

    def create(self, validated_data):
        prods_data = validated_data.pop('reservationproduct_set')
        menus_data = validated_data.pop('reservationmenu_set')
        user = self.context['request'].user
        validated_data['create_user'] = user
        validated_data['update_user'] = user
        reservation = Reservation.objects.create(**validated_data)

        self._create_many(prods_data, user, ReservationProduct, reservation)
        self._create_many(menus_data, user, ReservationMenu, reservation)

        #reservation._price = reservation.discount_price
        #reservation.save()

        return reservation

    def _create_many(self, dataset, user, klass, reservation):
        items = []
        for data in dataset:
            data['create_user'] = user
            data['update_user'] = user
            items.append(klass(reservation=reservation, **data))
        klass.objects.bulk_create(items)


class IsAvailableSerializer(serializers.Serializer):

    hour = serializers.TimeField()
    date = serializers.DateField()
    diners = serializers.IntegerField()

    class Meta:
        fields = ('hour', 'date', 'diners')


class QualificationSerializer(AbstractSerializer):

    class Meta:
        model = Qualification
        fields = ('restaurant','related_id', 'related_type', 'score_category', 'score')


class ScoreCategoryQualificationSerializer(AbstractSerializer):

    average = serializers.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        model = ScoreCategory
        fields = ('id', 'name', 'average')


class RecoverPasswordSerializer(serializers.Serializer):

    mail = serializers.CharField()
    code = serializers.IntegerField()
    password = serializers.CharField()

    class Meta:
        fields = ('mail', 'code', 'password')


class PaymentSerializer(serializers.Serializer):
    client = serializers.EmailField()
    restaurant = serializers.IntegerField()
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    description = serializers.CharField()
    payment_method = serializers.CharField()
    token = serializers.CharField()


###     DEPRECADO, REMOVER EN LA PROXIMA VERSION    ###
class ProductCategorySerializerDEPRECATED(AbstractSerializer):
    additionals = ProductCategoryAdditionalSerializer(many=True, read_only=True, source='productcategoryadditional_set')
    class Meta:
        model = ProductCategory
        fields = ('id', 'name', 'additionals', )


###     DEPRECADO, REMOVER EN LA PROXIMA VERSION    ###
class ProductSubcategorySerializerDEPRECATED(AbstractSerializer):
    class Meta:
        model = ProductSubcategory
        fields = ('id', 'name',)

###     DEPRECADO, REMOVER EN LA PROXIMA VERSION    ###
class ProductSerializerDEPRECATED(AbstractSerializer):
    category = ProductCategorySerializerDEPRECATED(many=False, read_only=False)
    subcategory = ProductSubcategorySerializerDEPRECATED(many=False, read_only=False)

    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'restaurant',
            'description',
            'real_price',
            'discount_price',
            'sort_nbr',
            'category',
            'subcategory',
        )