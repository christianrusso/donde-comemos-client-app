from datetime import datetime, timedelta
from django.test import RequestFactory, TestCase
from rest_framework.test import APIRequestFactory, force_authenticate
from rest_framework import status
from django.contrib.admin.sites import AdminSite
from guardian import shortcuts
from superadmin.models import *
from .tests import *
from .admin import *
from .models import *
from .views import *
from .serializers import UserSerializer
from .model_helpers import WeekDay
from datetime import datetime
from rest_framework.authtoken.models import Token


class AbstractGuardedAdminTest(TestCase):
    def test_all_subclasses_implement_method(self):
        for klass in AbstractGuardedAdmin.__subclasses__():
            self.assertTrue(hasattr(klass, 'filter_objects_by_permissions'))

class ApplicationTest(TestCase):
    def set_user_attributes(self, obj, user):
        usr = user or self.usr
        obj.create_user_id = usr.id
        obj.update_user_id = usr.id
        obj.create_dttm = usr.date_joined

    def save(self, obj, user):
        self.set_user_attributes(obj, user)
        obj.save()
        return obj

    def setUp(self):
        self.usr = self.create_user(super_user=True, staff=True)

    def create_user(self, super_user=False, staff=False, username='test', password='testpwd', **kwargs):
        usr = User.objects.create_user(username=username, password=password, **kwargs)
        usr.is_superuser = super_user
        usr.is_staff = staff
        usr.save()
        return usr

    def create_restaurant(self, user=None, **kwargs):
        if not("delivery" in kwargs or "self_service" in kwargs):
            kwargs["delivery"] = True
        rest = Restaurant(**kwargs)
        self.save(rest, user)
        return rest

    def create_service(self, user=None, **kwargs):
        service = Service(**kwargs)
        self.save(service, user)
        return service

    def create_tag_high(self, user=None, **kwargs):
        tagHigh = HighLevelTag(**kwargs)
        self.save(tagHigh, user)
        return tagHigh

    # def create_tag_low(self, user=None, **kwargs):
    #     tagLow = LowLevelTag(**kwargs)
    #     self.save(tagLow, user)
    #     return tagLow

    def create_payment_method(self, user=None, **kwargs):
        payment_method = PaymentMethod(**kwargs)
        self.save(payment_method, user)
        return payment_method

    def create_restaurant_payment_method(self, user=None, **kwargs):
        restaurant_payment_method = RestaurantPaymentMethod(**kwargs)
        self.save(restaurant_payment_method, user)
        return restaurant_payment_method

    def create_product(self, user=None, **kwargs):
        prod = Product(**kwargs)
        self.save(prod, user)
        return prod

    def create_product_category(self, user=None, sort_nbr=0, **kwargs):
        cat = ProductCategory(**kwargs, sort_nbr=sort_nbr)
        self.save(cat, user)
        return cat

    def create_product_subcategory(self, user=None, **kwargs):
        scat = ProductSubcategory(**kwargs)
        self.save(scat, user)
        return scat

    def create_menu(self, user=None, **kwargs):
        if not 'category' in kwargs:
            kwargs['category'] = self.create_menu_category(name='test', price=250.3, restaurant=kwargs['restaurant'])
        menu = Menu(**kwargs)
        self.save(menu, user)
        return menu

    def create_menu_day(self, user=None, **kwargs):
        menu_day = MenuDay(**kwargs)
        self.save(menu_day, user)
        return menu_day

    def create_holiday(self, user=None, **kwargs):
        holiday = Holiday(**kwargs)
        self.save(holiday, user)
        return holiday

    def create_restaurant_schedule(self, user=None, **kwargs):
        r_sch = RestaurantAttentionSchedule(**kwargs)
        self.save(r_sch, user)
        return r_sch

    def create_restaurant_workable_holiday(self, user=None, **kwargs):
        rest_holiday = RestaurantWorkableHoliday(**kwargs)
        self.save(rest_holiday, user)
        return rest_holiday

    def create_menu_category(self, user=None, **kwargs):
        menu_category = MenuCategory(**kwargs)
        self.save(menu_category, user)
        return menu_category

    def create_menu_date(self, user=None, **kwargs):
        menu_date = MenuDate(**kwargs)
        self.save(menu_date, user)
        return menu_date

    def create_order(self, user=None, **kwargs):
        order = Order(**kwargs)
        self.save(order, user)
        return order

    def create_order_product(self, user=None, **kwargs):
        order_product = OrderProduct(**kwargs)
        self.save(order_product, user)
        return order_product

    def create_reservation_product(self, user=None, **kwargs):
        order_product = ReservationProduct(**kwargs)
        self.save(order_product, user)
        return order_product

    def create_order_menu(self, user=None, **kwargs):
        order_menu = OrderMenu(**kwargs)
        self.save(order_menu, user)
        return order_menu

    def create_reservation_menu(self, user=None, **kwargs):
        order_menu = ReservationMenu(**kwargs)
        self.save(order_menu, user)
        return order_menu


    def create_restaurant_brand_picture(self, user=None, **kwargs):
        restaurant_brand_picture = RestaurantBrandPicture(**kwargs)
        self.save(restaurant_brand_picture, user)
        return restaurant_brand_picture

    def create_restaurant_service(self, user=None, **kwargs):
        restService = RestaurantService(**kwargs)
        self.save(restService, user)
        return restService

    def create_restaurant_tag_high(self, user=None, **kwargs):
        restTagHigh = RestaurantHighLevelTag(**kwargs)
        self.save(restTagHigh, user)
        return restTagHigh

    # def create_restaurant_tag_low(self, user=None, **kwargs):
    #     restTagLow = RestaurantLowLevelTag(**kwargs)
    #     self.save(restTagLow, user)
    #     return restTagLow

    def create_favorite_restaurant(self, user=None, **kwargs):
        restFav = FavoriteRestaurant(**kwargs)
        self.save(restFav, user)
        return restFav

    def create_hours(self, user=None, **kwargs):
        hour = RestaurantAttentionSchedule(**kwargs)
        self.save(hour, user)
        return hour

    def create_discount(self, user=None, **kwargs):
        discount = RestaurantDiscount(**kwargs)
        self.save(discount, user)
        return discount

    def create_promotion(self, user=None, **kwargs):
        promotion = RestaurantPromotion(**kwargs)
        self.save(promotion, user)
        return promotion

    def create_reservation(self, user=None, **kwargs):
        reservationRestaurant = Reservation(**kwargs)
        self.save(reservationRestaurant, user)
        return reservationRestaurant

    def create_qualification(self, user=None, **kwargs):
        qualificationRestaurant = Qualification(**kwargs)
        self.save(qualificationRestaurant, user)
        return qualificationRestaurant

    def create_score_category(self, user=None, **kwargs):
        score_category_restaurant = ScoreCategory(**kwargs)
        self.save(score_category_restaurant, user)
        return score_category_restaurant

    def create_user_recovery_code(self, user=None, **kwargs):
        user_RC = UserRecoveryCode(**kwargs)
        self.save(user_RC, user)
        return user_RC

    def create_location(self, user=None, **kwargs):
        location = Location(**kwargs)
        self.save(location, user)
        return location

    def create_product_category_additional(self, user=None, **kwargs):
        pa = ProductCategoryAdditional(**kwargs)
        self.save(pa, user)
        return pa

    def create_restaurant_administrator(self, user=None, **kwargs):
        ra = RestaurantAdministrator(**kwargs)
        self.save(ra, user)
        return ra

class AdminTest(ApplicationTest):
    def setUp(self):
        super().setUp()

        self.site = AdminSite()
        self.request = RequestFactory().get('/')
        self.request.user = self.usr


class RestaurantAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(Restaurant, RestaurantAdmin)
        self.restaurantAdminInstance = RestaurantAdmin(model=Restaurant, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.restaurantAdminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), rest)

    def test_a_superadmin_can_see_all_restaurants(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.restaurantAdminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)

    def test_a_superuser_can_see_premium_field(self):
        rest = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        request = RequestFactory().get('/')
        request.user = owner

        self.assertFalse('is_premium' in self.restaurantAdminInstance.get_fieldsets(request)[0][1]['fields'])

    def test_a_normaluser_cant_see_premium_field(self):
        rest = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        request = RequestFactory().get('/')
        request.user = owner

        self.assertFalse('is_premium' in self.restaurantAdminInstance.get_fieldsets(request)[0][1]['fields'])

    def test_a_premium_restaurant_can_see_accept_orders_field(self):
        rest = self.create_restaurant(name='Restaurant test', is_premium=True)
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        request = RequestFactory().get('/')
        request.user = owner

        self.assertTrue('accept_orders' in self.restaurantAdminInstance.get_fieldsets(request, obj=rest)[2][1]['fields'])

    def test_a_non_premium_restaurant_cant_see_accept_orders_field(self):
        rest = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        request = RequestFactory().get('/')
        request.user = owner

        self.assertFalse('accept_orders' in self.restaurantAdminInstance.get_fieldsets(request, obj=rest)[2][1]['fields'])


class RestaurantDiscountAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(RestaurantDiscount, RestaurantDiscountAdmin)
        self.adminInstance = RestaurantDiscountAdmin(model=RestaurantDiscount, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_discounts(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        discount = self.create_discount(restaurant=rest, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        other_discount = self.create_discount(restaurant=other_rest, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), discount)

    def test_a_superadmin_can_see_all_discounts(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')

        discount = self.create_discount(restaurant=rest, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        other_discount = self.create_discount(restaurant=other_rest, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)


class RestaurantPromotionAdminTest(AdminTest):

    def setUp(self):
        super().setUp()
        self.site.register(RestaurantPromotion, RestaurantPromotionAdmin)
        self.adminInstance = RestaurantPromotionAdmin(model=RestaurantPromotion, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_promotions(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        promotion = self.create_promotion(restaurant=rest, promotion_date=datetime.now().date(), promotion="promociob1")
        other_promotion = self.create_promotion(restaurant=other_rest, promotion_date=datetime.now().date(), promotion="promotion2")

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), promotion)

class RestaurantAdministratorAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(RestaurantAdministrator, RestaurantAdministratorAdmin)
        self.adminInstance = RestaurantAdministratorAdmin(model=RestaurantAdministrator, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_administrators(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        other_owner = self.create_user(username='owner2', password='ownerpwd', staff=True)

        administrator = self.create_restaurant_administrator(restaurant=rest, admin=owner)
        other_administrator = self.create_restaurant_administrator(restaurant=other_rest, admin=other_owner)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), administrator)

    def test_a_superadmin_can_see_all_administrators(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        other_owner = self.create_user(username='owner2', password='ownerpwd', staff=True)

        administrator = self.create_restaurant_administrator(restaurant=rest, admin=owner)
        other_administrator = self.create_restaurant_administrator(restaurant=other_rest, admin=other_owner)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)

class ReservationAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(Reservation, ReservationAdmin)
        self.adminInstance = ReservationAdmin(model=Reservation, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_reservations(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        reservation = self.create_reservation(restaurant=rest, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)
        other_reservation = self.create_reservation(restaurant=other_rest, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), reservation)

    def test_a_superadmin_can_see_all_reservations(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        
        reservation = self.create_reservation(restaurant=rest, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)
        other_reservation = self.create_reservation(restaurant=other_rest, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)


class ProductAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(Product, ProductAdmin)
        self.productAdminInstance = ProductAdmin(model=Product, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_products(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        prd1 = self.create_product(user=owner, name='test product', restaurant=rest, description='test desc',
                                   price=24.4, sort_nbr=1, category=cat, subcategory=scat)
        other_prod = self.create_product(user=owner, name='other test product', restaurant=other_rest,
                                         description='test desc', price=24.4, sort_nbr=1, category=other_cat,
                                         subcategory=other_scat)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.productAdminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), prd1)

    def test_a_superadmin_can_see_all_products(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        prd1 = self.create_product(user=owner, name='test product', restaurant=rest, description='test desc',
                                   price=24.4, sort_nbr=1, category=cat, subcategory=scat)
        other_prod = self.create_product(user=owner, name='other test product', restaurant=other_rest,
                                         description='test desc', price=24.4, sort_nbr=1, category=other_cat,
                                         subcategory=other_scat)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.productAdminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)

    def test_a_normal_user_can_only_assign_restaurants_he_owns(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 1)

    def test_a_superuser_user_can_assign_to_all_restaurants(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 2)

    def test_a_normal_user_can_only_assign_categories_of_restaurants_he_owns(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        request = RequestFactory().get('/')
        request.user = owner
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['category'].queryset.count(), 1)
        self.assertEquals(form.base_fields['category'].queryset.first(), cat)

    def test_a_superadmin_can_assign_to_all_categories(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        request = RequestFactory().get('/')
        request.user = owner
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['category'].queryset.count(), 2)

    def test_a_normal_user_can_only_assign_subcategories_of_restaurants_he_owns(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        request = RequestFactory().get('/')
        request.user = owner
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['subcategory'].queryset.count(), 1)
        self.assertEquals(form.base_fields['subcategory'].queryset.first(), scat)

    def test_a_superadmin_can_assign_to_all_subcategories(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        request = RequestFactory().get('/')
        request.user = owner
        prd1 = Product(name='test product', restaurant=rest, description='test desc', price=24.4, sort_nbr=1)

        form = self.productAdminInstance.get_form(request, prd1)
        self.assertEquals(form.base_fields['subcategory'].queryset.count(), 2)


class ProductCategoryAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(ProductCategory, ProductCategoryAdmin)
        self.adminInstance = ProductCategoryAdmin(model=ProductCategory, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_categories(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)

        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), cat)

    def test_a_superadmin_can_see_all_categories(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)

        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)

    def test_a_normal_user_can_only_assign_restaurants_he_owns_to_a_category(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        cat = ProductCategory(name='test product', restaurant=rest)

        form = self.adminInstance.get_form(request, cat)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 1)

    def test_a_superuser_user_can_assign_to_all_restaurants_to_a_category(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        cat = ProductCategory(name='test product', restaurant=rest)

        form = self.adminInstance.get_form(request, cat)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 2)


class ProductSubcategoryAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(ProductSubcategory, ProductSubcategoryAdmin)
        self.adminInstance = ProductSubcategoryAdmin(model=ProductSubcategory, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_subcategories(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), scat)

    def test_a_superadmin_can_see_all_subcategories(self):
        rest = self.create_restaurant(name='Restaurant test')

        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        scat = self.create_product_subcategory(user=owner, name='test subcategory', category=cat)
        other_scat = self.create_product_subcategory(user=owner, name='other test subcategory', category=other_cat)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner

        qs = self.adminInstance.get_queryset(request)
        self.assertEquals(qs.count(), 2)

    def test_a_normal_user_can_only_assign_categories_of_restaurants_he_owns_to_a_subcategory(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        scat = ProductSubcategory(name='test product', category=cat)

        form = self.adminInstance.get_form(request, scat)
        self.assertEquals(form.base_fields['category'].queryset.count(), 1)
        self.assertEquals(form.base_fields['category'].queryset.first(), cat)

    def test_a_superuser_user_can_assign_to_all_categories_to_a_subcategory(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        cat = self.create_product_category(user=owner, name='test category', restaurant=rest)
        other_cat = self.create_product_category(user=owner, name='other test category', restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        scat = ProductSubcategory(name='test product', category=cat)

        form = self.adminInstance.get_form(request, scat)
        self.assertEquals(form.base_fields['category'].queryset.count(), 2)


class MenuAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(Menu, MenuAdmin)
        self.adminInstance = MenuAdmin(model=Menu, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_menus(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        menu = self.create_menu(user=owner, name='test category', description='fake desc', restaurant=rest)
        other_menu = self.create_menu(user=owner, name='other test category', description='fake desc',
                                      restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), menu)

    def test_a_superadmin_can_see_all_menus(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        menu = self.create_menu(user=owner, name='test category', description='fake desc', restaurant=rest)
        other_menu = self.create_menu(user=owner, name='other test category', description='fake desc',
                                      restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 2)

    def test_a_normal_user_can_only_assign_restaurants_he_owns_to_a_menu(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        menu = Menu(name='test product', description='fake desc', restaurant=rest)

        form = self.adminInstance.get_form(request, menu)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 1)
        self.assertEquals(form.base_fields['restaurant'].queryset.first(), rest)

    def test_a_superuser_user_can_assign_all_restaurants_to_a_menu(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        menu = Menu(name='test product', description='fake desc', restaurant=rest)

        form = self.adminInstance.get_form(request, menu)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 2)

    def test_a_normal_user_can_only_assign_categories_of_restaurants_he_owns_to_a_menu(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=rest)
        other_menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        menu = Menu(name='test product', description='fake desc', restaurant=rest)

        form = self.adminInstance.get_form(request, menu)
        self.assertEquals(form.base_fields['category'].queryset.count(), 1)
        self.assertEquals(form.base_fields['category'].queryset.first(), menu_category)

    def test_a_superuser_user_can_assign_all_categories_to_a_menu(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=rest)
        other_menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        menu = Menu(name='test product', description='fake desc', restaurant=rest)

        form = self.adminInstance.get_form(request, menu)
        self.assertEquals(form.base_fields['category'].queryset.count(), 2)


class MenuCategoryAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(MenuCategory, MenuCategoryAdmin)
        self.adminInstance = MenuCategoryAdmin(model=MenuCategory, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_menu_categories(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=rest)
        other_menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), menu_category)

    def test_a_superadmin_can_see_all_menu_categories(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=rest)
        other_menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=other_rest)

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 2)


class MenuTest(ApplicationTest):

    def test_not_fixed_menu_is_available_when_date_matches_menu_date(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        md = self.create_menu_date(menu=menu, fixed_date='2019-06-14')
        menu.menudate_set.add(md)

        self.assertTrue(menu.is_available('2019-06-14'))

    def test_not_fixed_menu_is_not_available_when_date_doesnt_match_menu_date(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        md = self.create_menu_date(menu=menu, fixed_date='2019-06-14')
        menu.menudate_set.add(md)

        self.assertFalse(menu.is_available('2019-06-15'))

    def test_fixed_menu_is_available_when_date_is_same_weekday_as_one_of_menu_weekdays(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        menu_day1 = self.create_menu_day(menu=menu, fixed_day=WeekDay.MONDAY)
        menu_day2 = self.create_menu_day(menu=menu, fixed_day=WeekDay.FRIDAY)

        menu.menuday_set.add(menu_day1)
        menu.menuday_set.add(menu_day2)
        self.assertTrue(menu.is_available('2019-06-14'))

    def test_fixed_menu_is_not_available_when_date_is_not_same_weekday_as_one_of_menu_weekdays(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        menu_day = self.create_menu_day(menu=menu, fixed_day=WeekDay.FRIDAY)

        menu.menuday_set.add(menu_day)
        self.assertFalse(menu.is_available('2019-06-15'))

    def test_fixed_menu_with_date_is_available_when_date_matches_menu_date(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        menu_day = self.create_menu_day(menu=menu, fixed_day=WeekDay.THURSDAY)
        md = self.create_menu_date(menu=menu, fixed_date='2019-06-14')
        menu.menudate_set.add(md)

        menu.menuday_set.add(menu_day)
        self.assertTrue(menu.is_available('2019-06-14'))

    def test_fixed_menu_with_date_is_not_available_when_date_doesnt_match_menu_date(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest)
        menu_day = self.create_menu_day(menu=menu, fixed_day=WeekDay.FRIDAY)
        md = self.create_menu_date(menu=menu, fixed_date='2019-06-14')

        menu.menuday_set.add(menu_day)
        menu.menudate_set.add(md)
        self.assertFalse(menu.is_available('2019-06-15'))

    def test_menu_price_is_category_price(self):
        rest = self.create_restaurant(name='Restaurant test')
        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250.3, restaurant=rest)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest, category=menu_category)

        self.assertEquals(menu_category.price, menu.discount_price)


class RestaurantTest(ApplicationTest):

    def test_restaurant_is_available_when_date_is_same_weekday_as_one_of_schedule_and_hour_is_between_open_range(self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertTrue(rest.is_available('2019-06-19', '09:00:10'))

    def test_restaurant_is_not_available_when_date_is_same_weekday_as_one_of_schedule_and_hour_is_lower_than_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertFalse(rest.is_available('2019-06-19', '07:00:10'))

    def test_restaurant_is_not_available_when_date_is_same_weekday_as_one_of_schedule_and_hour_is_greater_than_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertFalse(rest.is_available('2019-06-19', '18:00:10'))

    def test_restaurant_is_not_available_when_date_is_not_same_weekday_as_one_of_schedule_and_hour_is_between_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertFalse(rest.is_available('2019-06-20', '15:00:10'))

    def test_restaurant_is_not_available_when_date_is_not_same_weekday_as_one_of_schedule_and_hour_is_not_between_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertFalse(rest.is_available('2019-06-20', '18:00:10'))

    def test_restaurant_is_available_when_date_is_same_weekday_as_one_of_schedules_and_hour_is_between_open_range(self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.WEDNESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.THURSDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.assertTrue(rest.is_available('2019-06-20', '09:00:10'))

    def test_restaurant_is_not_available_when_date_is_holiday_and_its_not_marked_as_workable(self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.TUESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        self.create_holiday(name='Día de la independencia', holiday_date='2019-07-09')

        self.assertFalse(rest.is_available('2019-07-09', '09:00:10'))

    def test_restaurant_is_available_when_date_is_holiday_and_its_marked_as_workable_and_restaurant_works_on_holidays(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.THURSDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.HOLIDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        holiday = self.create_holiday(name='Día de la independencia', holiday_date='2019-07-09')
        restaurant_holiday = self.create_restaurant_workable_holiday(restaurant=rest, holiday=holiday)
        rest.restaurantworkableholiday_set.add(restaurant_holiday)

        self.assertTrue(rest.is_available('2019-07-09', '09:00:10'))

    def test_restaurant_is_not_available_when_date_is_holiday_and_its_marked_as_workable_and_restaurant_doesnt_work_this_holiday(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.THURSDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        holiday = self.create_holiday(name='Día de la independencia', holiday_date='2019-06-20')
        restaurant_holiday = self.create_restaurant_workable_holiday(restaurant=rest, holiday=holiday)
        rest.restaurantworkableholiday_set.add(restaurant_holiday)

        self.assertFalse(rest.is_available('2019-07-09', '09:00:10'))

    def test_restaurant_is_not_available_when_date_is_holiday_and_its_marked_as_workable_and_hour_is_lower_than_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.THURSDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        holiday = self.create_holiday(name='Día de la independencia', holiday_date='2019-07-09')
        restaurant_holiday = self.create_restaurant_workable_holiday(restaurant=rest, holiday=holiday)
        rest.restaurantworkableholiday_set.add(restaurant_holiday)

        self.assertFalse(rest.is_available('2019-07-09', '07:00:10'))

    def test_restaurant_is_not_available_when_date_is_holiday_and_its_marked_as_workable_and_hour_is_greater_than_open_range(
            self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.TUESDAY)
        rest.restaurantattentionschedule_set.add(schedule)

        holiday = self.create_holiday(name='Día de la independencia', holiday_date='2019-07-09')
        restaurant_holiday = self.create_restaurant_workable_holiday(restaurant=rest, holiday=holiday)
        rest.restaurantworkableholiday_set.add(restaurant_holiday)

        self.assertFalse(rest.is_available('2019-07-09', '16:00:10'))

    def test_restaurant_can_receive_orders_through_mobile_app_if_its_premium_and_accept_orders(self):
        rest = self.create_restaurant(name='Restaurant test')

        rest.is_premium = True
        rest.accept_orders = True
        rest.save()

        self.assertTrue(rest.can_receive_orders())

    def test_restaurant_cant_receive_orders_through_mobile_app_if_its_premium_and_dont_accept_orders(self):
        rest = self.create_restaurant(name='Restaurant test')

        rest.is_premium = True
        rest.accept_orders = False
        rest.save()

        self.assertFalse(rest.can_receive_orders())

    def test_restaurant_cant_receive_orders_through_mobile_app_if_its_not_premium(self):
        rest = self.create_restaurant(name='Restaurant test')

        rest.is_premium = False

        rest.accept_orders = False
        rest.save()
        self.assertFalse(rest.can_receive_orders())

        rest.accept_orders = True
        rest.save()
        self.assertFalse(rest.can_receive_orders())

    def test_restaurant_hours_shows_opening_and_closing_hours_when_is_not_holiday(self):
        rest = self.create_restaurant(name='Restaurant test')

        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.TUESDAY)

        self.assertEquals('08:00:00', rest.hours('2019-07-09').first().opening_hour.strftime('%H:%M:%S'))
        self.assertEquals('16:00:00', rest.hours('2019-07-09').first().closing_hour.strftime('%H:%M:%S'))

    def test_restaurant_hours_shows_opening_and_closing_hours_when_is_holiday(self):
        rest = self.create_restaurant(name='Restaurant test')

        holiday = self.create_holiday(name='Día de la independencia', holiday_date='2019-07-09')
        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='08:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.TUESDAY)
        schedule = self.create_restaurant_schedule(restaurant=rest, opening_hour='09:00:00', closing_hour='16:00:00',
                                                   day=WeekDay.HOLIDAY)

        restaurant_holiday = self.create_restaurant_workable_holiday(restaurant=rest, holiday=holiday)
        rest.restaurantworkableholiday_set.add(restaurant_holiday)

        self.assertEquals('09:00:00', rest.hours('2019-07-09').first().opening_hour.strftime('%H:%M:%S'))
        self.assertEquals('16:00:00', rest.hours('2019-07-09').first().closing_hour.strftime('%H:%M:%S'))

    def test_restaurant_cant_be_saved_without_delivery_and_self_service(self):

        with self.assertRaises(ValidationError) as error:
            rest = Restaurant(name='Restaurant test', delivery=False, self_service=False)
            rest.clean()

        self.assertEqual(error.exception.messages[0], 'No se puede guardar un restaurante que no acepte reservas')

class ProductTest(ApplicationTest):
    def test_product_order(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        rest1 = self.create_restaurant(name='Restaurant test')
        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(user=owner, name='SAAA', category=cat1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=24.4, sort_nbr=3, category=cat1, subcategory=subcat1)

        rest2 = self.create_restaurant(name='Restaurant test')
        cat2 = self.create_product_category(user=owner, name='CAAA', restaurant=rest2)
        subcat2 = self.create_product_subcategory(user=owner, name='SAAA', category=cat2)
        prd2 = self.create_product(user=owner, name='test product', restaurant=rest2, description='test desc',
                                   price=24.4, sort_nbr=2, category=cat2, subcategory=subcat2)

        rest3 = self.create_restaurant(name='Restaurant test')
        cat3 = self.create_product_category(user=owner, name='AAAA', restaurant=rest3)
        subcat3 = self.create_product_subcategory(user=owner, name='AAAA', category=cat3)
        prd3 = self.create_product(user=owner, name='test product', restaurant=rest3, description='test desc',
                                   price=24.4, sort_nbr=1, category=cat3, subcategory=subcat3)

        prods = Product.objects.all()

        self.assertEquals(prd3, prods.first())
        self.assertEquals(prd1, prods.last())


class ProductCategoryTest(ApplicationTest):
    def test_product_order(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        rest1 = self.create_restaurant(name='Restaurant test')
        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1, sort_nbr=3)

        rest2 = self.create_restaurant(name='Restaurant test')
        cat2 = self.create_product_category(user=owner, name='CAAA', restaurant=rest2, sort_nbr=4)

        rest3 = self.create_restaurant(name='Restaurant test')
        cat3 = self.create_product_category(user=owner, name='AAAA', restaurant=rest3, sort_nbr=1)

        prods = ProductCategory.objects.all()

        self.assertEquals(cat3, prods.first())
        self.assertEquals(cat2, prods.last())


class UserViewsetTest(ApplicationTest):
    def setUp(self):
        self.factory = APIRequestFactory()

    def payload(self, email = None, code = 0):
        return {
            "email": email,
            'code': code,
        }

    def test_annonymoususer_can_register_user(self):

        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')

        user_count = User.objects.count()

        quilmes = self.create_location(name='Quilmes', user=user)

        view = UserViewSet.as_view({'post': 'create'})

        request = self.factory.post('users/', {'username': 'test', 'password': 'test', 'email': 'test@test.com',
                                               'first_name': 'testing', 'last_name': 'register'}, format='json')
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), user_count + 1)
        user = User.objects.get(username='test@test.com')
        self.assertTrue(user.check_password('test'))
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_get_from_token(self):
        user_count = User.objects.count()
        view = UserViewSet.as_view({'get': 'get_from_token'})
        request = self.factory.get('users/get_from_token', format='json')
        request.user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, UserSerializer(request.user, many=False).data)

    def test_create_code_and_mail_invalid(self):
        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')

        view = RecoverPasswordViewSet.as_view({'post': 'mail'})
        request = self.factory.post('recover-password/mail/', self.payload('mailincorrecto@gmail.com'), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_code_and_mail_valid(self):
        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')

        view = RecoverPasswordViewSet.as_view({'post': 'mail'})
        request = self.factory.post('recover-password/mail/', self.payload('userowner@gmail.com'), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(UserRecoveryCode.objects.filter(client=user).exists())

    def test_checkcode_invalid_code(self):

        view = RecoverPasswordViewSet.as_view({'post': 'checkCode'})
        request = self.factory.post('recover-password/checkCode/', self.payload(code=12333), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_checkcode_invalid_mail_and_valid_code(self):

        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')
        user_RC = self.create_user_recovery_code(client=user, code=12345, user=user)

        view = RecoverPasswordViewSet.as_view({'post': 'checkCode'})
        request = self.factory.post('recover-password/checkCode/', self.payload(code=12345, email='distintomail@gmail.com'), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_checkcode_valid_mail_and_valid_code_but_expired_code(self):

        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')

        user_RC = self.create_user_recovery_code(client=user, code=12345, user=user)
        user_RC.create_dttm = timezone.now() - timedelta(minutes=16)
        user_RC.save()

        view = RecoverPasswordViewSet.as_view({'post': 'checkCode'})
        request = self.factory.post('recover-password/checkCode/', self.payload(code=user_RC.code, email=user.email), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_checkcode_valid_mail_and_valid_code(self):

        user = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True, email='userowner@gmail.com')

        user_RC = self.create_user_recovery_code(client=user, code=12345, user=user)
        user_RC.create_dttm = timezone.now() - timedelta(minutes=14)
        user_RC.save()

        token = Token.objects.get_or_create(user=user)

        view = RecoverPasswordViewSet.as_view({'post': 'checkCode'})
        request = self.factory.post('recover-password/checkCode/', self.payload(code=user_RC.code, email=user.email), format='json')

        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['token'], token[0].key)

class ProductCategoryViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        rest1 = self.create_restaurant(name='test')
        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(user=owner, name='SAAA', category=cat1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=24.4, sort_nbr=1, category=cat1, subcategory=subcat1)

        rest2 = self.create_restaurant(name='test')
        cat2 = self.create_product_category(user=owner, name='CAAA', restaurant=rest2)
        subcat2 = self.create_product_subcategory(user=owner, name='SAAA', category=cat2)
        prd2 = self.create_product(user=owner, name='test product', restaurant=rest2, description='test desc',
                                   price=24.4, sort_nbr=1, category=cat2, subcategory=subcat2)

        view = ProductCategoryViewSet.as_view({'get': 'list'})
        request = self.factory.get('product-categories/?restaurant={0}'.format(rest1.id))
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], cat1.id)


class ProductSerializerTest(ApplicationTest):

    def test_serialization_includes_price_with_discount_and_real_price(self):
        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)
        rest1 = self.create_restaurant(name='test')
        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(user=owner, name='SAAA', category=cat1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        data = ProductSerializer(prd1, many=False).data

        self.assertEqual(data['real_price'], 100)
        self.assertEqual(data['discount_price'], 75)

        data = ProductSerializerSmall(prd1, many=False).data

        self.assertEqual(data['real_price'], 100)
        self.assertEqual(data['discount_price'], 75)

        
class MenuViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        menu1 = self.create_menu(name='test category', description='fake desc', restaurant=rest1)

        rest2 = self.create_restaurant(name='Restaurant test')
        menu2 = self.create_menu(name='test category', description='fake desc', restaurant=rest2)

        view = MenuViewSet.as_view({'get': 'list'})
        request = self.factory.get('menus/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], menu1.id)


    def test_serialization_includes_price_with_discount_and_real_price(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        menu_category = self.create_menu_category(name='Menu ejecutivo', price=100, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='MN')

        data = MenuSerializer(menu, many=False).data

        self.assertEqual(data['real_price'], 100)
        self.assertEqual(data['discount_price'], 75)

        data = MenuSerializerSmall(menu, many=False).data

        self.assertEqual(data['real_price'], 100)
        self.assertEqual(data['discount_price'], 75)

class OrderTest(ApplicationTest):
    def setUp(self):
        super().setUp()

    def test_order_price_is_the_sum_of_its_products_prices(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=20, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=2)
        order.orderproduct_set.add(orderproduct)

        self.assertEqual(140, order.discount_price)

    def test_order_price_is_the_sum_of_its_menus_prices(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=1)
        order.ordermenu_set.add(ordermenu)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)

        self.assertEqual(850, order.discount_price)

    def test_order_price_is_the_sum_of_its_menus_and_its_products_prices(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)

        self.assertEqual(700, order.discount_price)

    def test_order_without_products_and_without_menus_has_price_zero(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        self.assertEqual(0, order.discount_price)

    def test_when_order_is_saved_with_delivered_the_delivered_date_is_set(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        self.assertTrue(order.delivered_date is None)

        order.delivered = True
        order.save()

        self.assertTrue(order.delivered_date is not None)

    def test_order_price_is_the_sum_of_its_products_prices_with_discounts(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=20, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=2)
        order.orderproduct_set.add(orderproduct)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        self.assertEqual(105, order.discount_price)

    def test_order_price_is_the_sum_of_its_menus_prices_with_discounts(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=250, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=1)
        order.ordermenu_set.add(ordermenu)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)
        
        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='MN')

        self.assertEqual(637.5, order.discount_price)

    def test_order_price_is_the_sum_of_its_menus_and_its_products_prices_with_discounts(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='MN')

        self.assertEqual(525, order.discount_price)

    def test_order_price_is_not_changed_after_delivered(self):
        rest1 = self.create_restaurant(name='Restaurant test')

        discount1 = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        discount2 = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='MN')
        
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)

        order.delivered = True
        order.save()

        discount1.amount = 20
        discount1.save()
        discount2.amount = 20
        discount2.save()

        self.assertEqual(525, order.discount_price)

    def test_order_price_is_the_sum_of_its_menus_and_its_products_prices_with_discounts_other_day(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        orderproduct = self.create_order_product(order=order, product=product, amount=1)
        order.orderproduct_set.add(orderproduct)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=300, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        ordermenu = self.create_order_menu(order=order, menu=menu, amount=2)
        order.ordermenu_set.add(ordermenu)

        discount1 = self.create_discount(restaurant=rest1, discount_date=datetime.now().date() + timedelta(days=1), amount=25, applicable_to='PR')
        discount2 = self.create_discount(restaurant=rest1, discount_date=datetime.now().date() + timedelta(days=1), amount=25, applicable_to='MN')
        
        self.assertEqual(700, order.discount_price)

    def test_an_order_is_not_valid_if_it_has_type_delivery_and_address_null(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        with self.assertRaises(ValidationError) as error:
            order = self.create_order(restaurant=rest1, client=self.usr, phone_nbr='15444444444', order_type='DEL')

        self.assertEqual(error.exception.messages[0], 'No se puede crear un pedido sin dirección')

    def test_an_order_is_valid_if_it_has_type_local_order_and_address_null(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        order = self.create_order(restaurant=rest1, client=self.usr, phone_nbr='15444444444', order_type='LOC')

    def test_an_order_is_not_valid_if_it_has_type_null(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        with self.assertRaises(ValidationError) as error:
            order = self.create_order(restaurant=rest1, client=self.usr, phone_nbr='15444444444')
        self.assertEqual(error.exception.messages[0], 'No se puede crear un pedido sin tipo')


class OrderAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(Order, OrderAdmin)
        self.adminInstance = OrderAdmin(model=Order, admin_site=self.site)

    def test_the_owner_of_a_restaurant_can_only_see_his_restaurant_orders(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        order = self.create_order(restaurant=rest, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')
        other_order = self.create_order(restaurant=other_rest, client=self.usr, address='calle falsa 123',
                                        phone_nbr='15444444444', order_type='DEL')

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 1)
        self.assertEquals(qs.first(), order)

    def test_a_superadmin_can_see_all_orders(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True, super_user=True)

        order = self.create_order(restaurant=rest, client=self.usr, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')
        other_order = self.create_order(restaurant=other_rest, client=self.usr, address='calle falsa 123',
                                        phone_nbr='15444444444', order_type='DEL')

        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        qs = self.adminInstance.get_queryset(request)

        self.assertEquals(qs.count(), 2)


class OrderViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def payload(self, restaurant, product1, product2, menu1, menu2):
        return {
            "restaurant_id": restaurant.id,
            "client": self.usr.id,
            "address": "Bolivar 5340",
            "phone_nbr": "42244424",
            "expected_payment": "200.0000",
            "comments": None,
            "order_type": "DEL",
            "products": [
                {
                    "product_id": product1.id,
                    "amount": 1,
                    "additional_id": None
                },
                {
                    "product_id": product2.id,
                    "amount": 2,
                    "additional_id": None
                }
            ],
            "menus": [
                {
                    "menu_id": menu1.id,
                    "amount": 1
                },
                {
                    "menu_id": menu2.id,
                    "amount": 2
                },
            ]
        }

    def test_create_order_registered_user(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product1 = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100,
                                       sort_nbr=1, category=cat1, subcategory=subcat1)
        product2 = self.create_product(name='test product', restaurant=rest1, description='test desc', price=20,
                                       sort_nbr=1, category=cat1, subcategory=subcat1)
        menu1 = self.create_menu(name='test category', description='fake desc', restaurant=rest1)
        menu2 = self.create_menu(name='test category', description='fake desc', restaurant=rest1)

        order_count = Order.objects.count()
        view = OrderViewSet.as_view({'post': 'create'})
        request = self.factory.post('orders/', self.payload(rest1, product1, product2, menu1, menu2), format='json')

        request.user = self.usr
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Order.objects.count(), order_count + 1)
        self.assertEqual(Order.objects.first().orderproduct_set.count(), 2)
        self.assertEqual(Order.objects.first().ordermenu_set.count(), 2)

    def test_annonymoususer_cant_create_order(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product1 = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100,
                                       sort_nbr=1, category=cat1, subcategory=subcat1)
        product2 = self.create_product(name='test product', restaurant=rest1, description='test desc', price=20,
                                       sort_nbr=1, category=cat1, subcategory=subcat1)
        menu1 = self.create_menu(name='test category', description='fake desc', restaurant=rest1)
        menu2 = self.create_menu(name='test category', description='fake desc', restaurant=rest1)

        order_count = Order.objects.count()
        view = OrderViewSet.as_view({'post': 'create'})
        request = self.factory.post('orders/', self.payload(rest1, product1, product2, menu1, menu2), format='json')

        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_by_user_view(self):
        rest1 = self.create_restaurant(name='Restaurant test')

        owner2 = self.create_user(username='owner2', password='ownerpwd', staff=True)
        order1 = self.create_order(restaurant=rest1, client=owner2, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        order2 = self.create_order(restaurant=rest1, client=owner, address='mitre 111', phone_nbr='11111111', order_type='DEL')

        view = OrderViewSet.as_view({'get': 'by_user'})
        request = self.factory.get('orders/by_user')
        force_authenticate(request, owner2)
        request.user = owner2
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEquals(len(response.data), 1)
        self.assertEquals(response.data[0]["id"], order1.id)


    def test_serialization_includes_price_with_discount_and_real_price(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        owner2 = self.create_user(username='owner2', password='ownerpwd', staff=True)
        order1 = self.create_order(restaurant=rest1, client=owner2, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        product1 = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)

        self.create_order_product(order=order1, product=product1, amount=1)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        data = OrderSerializer(order1, many=False).data

        self.assertEqual(data['real_price'], "100.00")
        self.assertEqual(data['discount_price'], "75.00")

class RestaurantBrandPictureViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        brand1 = self.create_restaurant_brand_picture(restaurant=rest1)

        rest2 = self.create_restaurant(name='Restaurant test')
        brand2 = self.create_restaurant_brand_picture(restaurant=rest2)

        view = RestaurantBrandPictureViewSet.as_view({'get': 'list'})
        request = self.factory.get('brand_pictures/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['brand_picture'], brand1.brand_picture)


class RestaurantBrandPictureViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        brand1 = self.create_restaurant_brand_picture(restaurant=rest1)

        rest2 = self.create_restaurant(name='Restaurant test')
        brand2 = self.create_restaurant_brand_picture(restaurant=rest2)

        view = RestaurantBrandPictureViewSet.as_view({'get': 'list'})
        request = self.factory.get('brand_pictures/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['brand_picture'], brand1.brand_picture)


class ServiceViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        service1 = self.create_service(name="service1 test")
        serviceRest = self.create_restaurant_service(restaurant=rest1, service=service1)

        rest2 = self.create_restaurant(name='Restaurant2 test')
        service2 = self.create_service(name="service2 test")
        serviceRest2 = self.create_restaurant_service(restaurant=rest2, service=service2)

        view = ServiceViewSet.as_view({'get': 'list'})
        request = self.factory.get('service/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], service1.name)
        self.assertEqual(len(response.data), 1)


class TagMacroViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        tagHigh1 = self.create_tag_high(name="tagHigh1 test")

        tagRest = self.create_restaurant_tag_high(restaurant=rest1, tag=tagHigh1)

        rest2 = self.create_restaurant(name='Restaurant2 test')
        tagHigh2 = self.create_tag_high(name="tagHigh2 test")
        tagRest2 = self.create_restaurant_tag_high(restaurant=rest2, tag=tagHigh2)

        view = TagMacroViewSet.as_view({'get': 'list'})
        request = self.factory.get('tags-macro/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], tagHigh1.name)
        self.assertEqual(len(response.data), 1)


# class TagMicroViewSetTest(ApplicationTest):
#     def setUp(self):
#         super().setUp()
#         self.factory = APIRequestFactory()

    # def test_queryset_is_based_on_restaurant(self):
    #     rest1 = self.create_restaurant(name='Restaurant1 test')
    #     tagLow1 = self.create_tag_low(name="tagLow1 test")

    #     tagRest = self.create_restaurant_tag_low(restaurant=rest1, tag=tagLow1)

    #     rest2 = self.create_restaurant(name='Restaurant2 test')
    #     tagLow2 = self.create_tag_low(name="tagLow2 test")
    #     tagRest2 = self.create_restaurant_tag_low(restaurant=rest2, tag=tagLow2)

    #     view = TagMicroViewSet.as_view({'get': 'list'})
    #     request = self.factory.get('tags-micro/')
    #     response = view(request, restaurant=rest1.id)

    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(response.data[0]['name'], tagLow1.name)
    #     self.assertEqual(len(response.data), 1)


class PaymentMethodViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_queryset_is_based_on_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        payment_method1 = self.create_payment_method(name="payment_method1 test")
        restaurant_payment_method = self.create_restaurant_payment_method(restaurant=rest1,
                                                                          payment_method=payment_method1)

        rest2 = self.create_restaurant(name='Restaurant2 test')
        payment_method2 = self.create_payment_method(name="payment_method2 test")
        restaurant_payment_method2 = self.create_restaurant_payment_method(restaurant=rest2,
                                                                           payment_method=payment_method2)

        view = PaymentMethodViewSet.as_view({'get': 'list'})
        request = self.factory.get('payment-methods/')
        response = view(request, restaurant=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], payment_method1.name)
        self.assertEqual(len(response.data), 1)


class FavoriteRestaurantViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def payload(self, restaurant, user):
        return {
            "client": user.id,
            "restaurant_id": restaurant.id,
        }

    def test_by_user(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)
        restFav = self.create_favorite_restaurant(restaurant=rest1, client=user)

        rest2 = self.create_restaurant(name='Restaurant2 test')
        user2 = self.create_user(username='user2', password='us2', staff=True)
        restFav = self.create_favorite_restaurant(restaurant=rest2, client=user2)

        view = FavoriteRestaurantViewSet.as_view({'get': 'by_user'})
        request = self.factory.get('favorite-restaurants/by_user')

        force_authenticate(request, user)

        request.user = user
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['client'], user.id)
        self.assertEqual(len(response.data), 1)

    def test_create_same_user(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)

        view = FavoriteRestaurantViewSet.as_view({'post': 'create'})
        request = self.factory.post('favorite-restaurants/', self.payload(rest1, user), format='json')

        favoritesRestaurants = FavoriteRestaurant.objects.count()

        force_authenticate(request, user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(FavoriteRestaurant.objects.count(), favoritesRestaurants + 1)

    def test_create_different_user(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)
        user2 = self.create_user(username='user2', password='us1', staff=True)

        view = FavoriteRestaurantViewSet.as_view({'post': 'create'})
        request = self.factory.post('favorite-restaurants/', self.payload(rest1, user), format='json')

        favoritesRestaurants = FavoriteRestaurant.objects.count()

        force_authenticate(request, user2)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(FavoriteRestaurant.objects.count(), favoritesRestaurants)

    def test_querySet_user_and_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)
        favorite1 = self.create_favorite_restaurant(client=user, restaurant=rest1)

        rest2 = self.create_restaurant(name='Restaurant2 test')
        user2 = self.create_user(username='user2', password='us1', staff=True)
        favorite2 = self.create_favorite_restaurant(client=user2, restaurant=rest2)


        view = FavoriteRestaurantViewSet.as_view({'get': 'list'})
        request = self.factory.get('favorite-restaurants/?client={client}&restaurant={0}'.format(rest1.id, client=user.id))

        force_authenticate(request, user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], favorite1.id)

    def test_querySet_user(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)
        favorite1 = self.create_favorite_restaurant(client=user, restaurant=rest1)

        user2 = self.create_user(username='user2', password='us1', staff=True)
        rest2 = self.create_restaurant(name='Restaurant2 test')
        favorite2 = self.create_favorite_restaurant(client=user, restaurant=rest2)
        favorite3 = self.create_favorite_restaurant(client=user2, restaurant=rest2)

        view = FavoriteRestaurantViewSet.as_view({'get': 'list'})
        request = self.factory.get('favorite-restaurants/?client={client}'.format(client=user.id))

        force_authenticate(request, user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertTrue(response.data[0]['id'] != favorite3.id and response.data[1]['id'] != favorite3.id)

    def test_querySet_restaurant(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)

        user2 = self.create_user(username='user2', password='us1', staff=True)
        rest2 = self.create_restaurant(name='Restaurant2 test')

        favorite1 = self.create_favorite_restaurant(client=user, restaurant=rest2)
        favorite2 = self.create_favorite_restaurant(client=user2, restaurant=rest2)
        favorite3 = self.create_favorite_restaurant(client=user2, restaurant=rest1)

        view = FavoriteRestaurantViewSet.as_view({'get': 'list'})
        request = self.factory.get('favorite-restaurants/?restaurant={restaurant}'.format(restaurant=rest2.id))

        force_authenticate(request, user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertTrue(response.data[0]['id'] != favorite3.id and response.data[1]['id'] != favorite3.id)

    def test_querySet(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)

        user2 = self.create_user(username='user2', password='us1', staff=True)
        rest2 = self.create_restaurant(name='Restaurant2 test')

        favorite1 = self.create_favorite_restaurant(client=user, restaurant=rest2)
        favorite2 = self.create_favorite_restaurant(client=user2, restaurant=rest2)
        favorite3 = self.create_favorite_restaurant(client=user2, restaurant=rest1)

        view = FavoriteRestaurantViewSet.as_view({'get': 'list'})
        request = self.factory.get('favorite-restaurants/')

        force_authenticate(request, user)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)


class HoursViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def test_get_queryset(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',day=WeekDay.MONDAY)
        rest2 = self.create_restaurant(name='Restaurant1 test')
        hour2 = self.create_hours(restaurant=rest2, opening_hour='08:00:00', closing_hour='18:00:00',day=WeekDay.FRIDAY)

        view = HoursViewSet.as_view({'get': 'list'})
        request = self.factory.get('hours')

        response = view(request, restaurant=rest1.id)

        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['opening_hour'], '09:00:00')
        self.assertEqual(response.data[0]['day'], hour1.get_day_display())


class RestaurantDiscountTest(ApplicationTest):

    def test_discount_with_type_product_does_not_apply_to_menus(self):
        rest1 = self.create_restaurant(name='Restaurant test')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=100, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        self.assertEqual(menu.discount_price, 100)

    def test_discount_with_type_menu_does_not_apply_to_products(self):
        rest1 = self.create_restaurant(name='Restaurant test')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=100, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='MN')

        self.assertEqual(product.discount_price, 100)

    def test_discount_cant_be_created_without_date(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        discount = RestaurantDiscount(restaurant=rest1, amount=25, applicable_to='MN')

        with self.assertRaises(ValidationError) as error:
            discount.clean()    

        self.assertEquals(str(error.exception.messages[0]), 'No se puede crear un descuento sin fecha o día fijo.')

    def test_discount_is_only_applied_to_the_restaurant_which_is_applied(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        rest2 = self.create_restaurant(name='Otro')

        cat1 = self.create_product_category(name='CAAA', restaurant=rest1)
        subcat1 = self.create_product_subcategory(name='SAAA', category=cat1)

        product = self.create_product(name='test product', restaurant=rest1, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)
        other_product = self.create_product(name='test product', restaurant=rest2, description='test desc', price=100, sort_nbr=1, category=cat1, subcategory=subcat1)

        menu_category = self.create_menu_category(name='Menu ejecutivo', price=100, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)

        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')

        self.assertEqual(product.discount_price, 75)
        self.assertEqual(other_product.discount_price, 100)


class FavoriteRestaurantTest(ApplicationTest):

    def test_unique_together(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        user = self.create_user(username='user1', password='us1', staff=True)
        favorite1 = self.create_favorite_restaurant(client=user, restaurant=rest1)

        favorite3 = FavoriteRestaurant(client=user, restaurant=rest1)
        with self.assertRaises(ValidationError) as error:
            favorite3.validate_unique()

        self.assertEquals(str(error.exception.messages[0]), 'Ya existe un/a Restaurante favorito con este/a Cliente y Restaurant.')


class RestaurantViewSetTest(ApplicationTest):
    def setUp(self):
        super().setUp()
        self.factory = APIRequestFactory()

    def payload(self, date, hour, diners=0):
        return {
            "date": date,
            "hour": hour,
            "diners": diners
        }

    def test_restaurant_is_available(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        today_day = datetime.now()

        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=1)).time().strftime('%H:%M'),day=today_day.weekday())

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id), self.payload(today_day.date().strftime('%Y-%m-%d'), today_day.time().strftime('%H:%M')), format='json')

        force_authenticate(request, user=self.usr)
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_restaurant_is_not_available_hour(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',
                                  day=WeekDay.FRIDAY)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload('2019-08-23', '08:00'), format='json')

        force_authenticate(request, user=self.usr)
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_restaurant_is_not_available_day(self):
        rest1 = self.create_restaurant(name='Restaurant1 test')
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',
                                  day=WeekDay.FRIDAY)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload('2019-08-24', '10:00'), format='json')

        force_authenticate(request, user=self.usr)
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_reservation_person_wants_to_book_max_diners(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=1)).time().strftime('%H:%M'),day=today_day.weekday())

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), today_day.time().strftime('%H:%M'), 10), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_reservation_person_wants_to_book_and_there_is_room(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=1)).time().strftime('%H:%M'),day=today_day.weekday())

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), today_day.time().strftime('%H:%M'), 5), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_reservation_person_wants_to_book_and_there_is_no_place(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners="10")
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',
                                  day=WeekDay.FRIDAY)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload('2019-08-23', '10:00', 11), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_reservation_person_wants_to_book_and_there_are_more_reservations_but_there_is_room(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners="10")
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=1)).time().strftime('%H:%M'),day=today_day.weekday())


        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), today_day.time().strftime('%H:%M'), 4), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_reservation_person_wants_to_book_and_there_are_more_reservations_but_there_is_no_room(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners="10")
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',
                                  day=WeekDay.FRIDAY)

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload('2019-08-23', '10:00', 10), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_reservation_person_wants_to_book_and_there_are_canceled_reservation(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners="10")
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=1)).time().strftime('%H:%M'),day=today_day.weekday())

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)
        reservation.cancelled = True
        reservation.save()

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), today_day.time().strftime('%H:%M'), 10), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_make_reservation_when_another_reservation_is_finished(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=2)).time().strftime('%H:%M'),day=today_day.weekday())

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date=today_day.date().strftime('%Y-%m-%d'), reservation_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), diners=9)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), (today_day + timedelta(hours=2)).time().strftime('%H:%M'), 9), format='json')

        force_authenticate(request, user1)
        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_make_reservation_when_another_reservation_is_not_finished(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=2)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=2)).time().strftime('%H:%M'),day=today_day.weekday())

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date=today_day.date().strftime('%Y-%m-%d'), reservation_hour=(today_day - timedelta(minutes=30)).time().strftime('%H:%M'), diners=9)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), (today_day + timedelta(minutes=10)).time().strftime('%H:%M'), 3), format='json')

        reservation = Reservation.objects.get(pk= reservation.pk)

        force_authenticate(request, user1)
        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_upon_exceeding_the_renewal_time_the_reservation_ends(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=2)).time().strftime('%H:%M'),day=today_day.weekday())

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date=today_day.date().strftime('%Y-%m-%d'), reservation_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), diners=9)
        reservation = Reservation.objects.get(pk= reservation.pk)

        self.assertTrue(reservation.finished)

    def test_by_not_exceeding_the_renewal_time_the_reservation_does_not_ends(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)
        today_day = datetime.now()
        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=2)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=2)).time().strftime('%H:%M'),day=today_day.weekday())

        reservation = self.create_reservation(restaurant=rest1, client=user1, reservation_date=today_day.date().strftime('%Y-%m-%d'), reservation_hour=(today_day - timedelta(minutes=30)).time().strftime('%H:%M'), diners=9)
        reservation = Reservation.objects.get(pk= reservation.pk)

        self.assertFalse(reservation.finished)

    def test_current_date_is_grater_than_reservation_date(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        hour1 = self.create_hours(restaurant=rest1, opening_hour='09:00:00', closing_hour='16:00:00',
                                  day=WeekDay.FRIDAY)

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload('2019-08-06', '10:00', 10), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['is_available'])

    def test_reservation_date_is_correct(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        today_day = datetime.now()

        hour1 = self.create_hours(restaurant=rest1, opening_hour=(today_day - timedelta(hours=1)).time().strftime('%H:%M'), closing_hour=(today_day + timedelta(hours=2)).time().strftime('%H:%M'),day=today_day.weekday())

        view = RestaurantViewSet.as_view({'post': 'is_available'})
        request = self.factory.post('restaurants/{restaurantId}/is_available/'.format(restaurantId=rest1.id),
                                    self.payload(today_day.date().strftime('%Y-%m-%d'), (today_day + timedelta(hours=1)).time().strftime('%H:%M'), 10), format='json')

        force_authenticate(request, user1)

        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['is_available'])

    def test_calification(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        score_category1 = self.create_score_category(name = 'Comida')

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)

        qualification1 = self.create_qualification(restaurant=rest1, related_id= 5, related_type="order", score_category= score_category1, score= 5)
        qualification2 = self.create_qualification(restaurant=rest1, related_id= 5, related_type="order", score_category= score_category1, score= 3)

        view = RestaurantViewSet.as_view({'get': 'qualification_by_category'})
        request = self.factory.get('restaurants/{restaurantId}/qualification_by_category/'.format(restaurantId=rest1.id))

        force_authenticate(request, user1)
        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(score_category1.id, response.data[0]['id'])
        self.assertEqual('4.00', response.data[0]['average'])
        self.assertEqual(1, len(response.data))

    def test_qualification_by_restaurant(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        rest2 = self.create_restaurant(name='Restaurant2 test', max_diners=10)

        score_category1 = self.create_score_category(name = 'Comida')
        qualification1 = self.create_qualification(restaurant=rest1, related_id= 5, related_type="order", score_category= score_category1, score= 5)
        qualification2 = self.create_qualification(restaurant=rest1, related_id= 5, related_type="order", score_category= score_category1, score= 3)

        view = RestaurantViewSet.as_view({'get': 'qualification_by_category'})
        request = self.factory.get('restaurants/{restaurantId}/qualification_by_category/'.format(restaurantId=rest1.id))

        force_authenticate(request, user1)
        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(score_category1.id, response.data[0]['id'])
        self.assertEqual('4.00', response.data[0]['average'])
        self.assertEqual(1, len(response.data))


    def test_qualification_by_restaurant_takes_orders_and_reservations_qualifications(self):
        user1 = self.create_user(username='user1', password='us1', staff=True)

        rest1 = self.create_restaurant(name='Restaurant1 test', max_diners=10)
        rest2 = self.create_restaurant(name='Restaurant2 test', max_diners=10)

        score_category1 = self.create_score_category(name = 'Comida')
        qualification1 = self.create_qualification(restaurant=rest1, related_id= 5, related_type="order", score_category= score_category1, score=5)
        qualification2 = self.create_qualification(restaurant=rest1, related_id=19, related_type="reservation", score_category= score_category1, score=3)

        view = RestaurantViewSet.as_view({'get': 'qualification_by_category'})
        request = self.factory.get('restaurants/{restaurantId}/qualification_by_category/'.format(restaurantId=rest1.id))

        force_authenticate(request, user1)
        request.user = user1
        response = view(request, pk=rest1.id)

        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(score_category1.id, response.data[0]['id'])
        self.assertEqual('4.00', response.data[0]['average'])
        self.assertEqual(1, len(response.data))

    def test_restaurant_with_multiple_schedules_hours_shows_an_hours_list(self):
        rest1 = self.create_restaurant(name='Restaurant 1')
        
        now = datetime.now()

        hour1 = self.create_hours(restaurant=rest1, opening_hour="08:00:00", closing_hour="13:00:00", day=now.weekday())
        hour2 = self.create_hours(restaurant=rest1, opening_hour="18:00:00", closing_hour="22:00:00", day=now.weekday())

        view = RestaurantViewSet.as_view({'get': 'list'})
        request = self.factory.get('restaurants/', format='json')

        force_authenticate(request, user=self.usr)
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(2, len(response.data[0]['hours']))

class ProductCategoryAdditionalTest(ApplicationTest):

    def test_product_category_additional_price_takes_product_discounts(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        discount = self.create_discount(restaurant=rest1, discount_date=datetime.now().date(), amount=25, applicable_to='PR')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)

        prod_additional = self.create_product_category_additional(name='SALSA RE PIOLA', category=cat1, price=100)

        self.assertEqual(75, prod_additional.discount_price)
        self.assertEqual(100, prod_additional.real_price)

class OrderProductTest(ApplicationTest):
    def test_order_product_price_is_sum_of_product_with_its_additionals(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=200, sort_nbr=1, category=cat1)
        prod_additional = self.create_product_category_additional(name='SALSA RE PIOLA', category=cat1, price=100)
        order = self.create_order(restaurant=rest1, client=owner, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        order_product = self.create_order_product(order=order, product=prd1, additional=prod_additional, amount=2)

        self.assertEqual(600, order_product.real_price)
        self.assertEqual(600, order_product.discount_price)

    def test_order_product_price_is_sum_of_product_with_no_additionals(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=200, sort_nbr=1, category=cat1)
        order = self.create_order(restaurant=rest1, client=owner, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        order_product = self.create_order_product(order=order, product=prd1, amount=2)

        self.assertEqual(400, order_product.real_price)
        self.assertEqual(400, order_product.discount_price)

class OrderMenuTest(ApplicationTest):
    def test_order_menu_price_is_sum_of_menus(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        menu_category = self.create_menu_category(name='Menu ejecutivo', price=200, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        order = self.create_order(restaurant=rest1, client=owner, address='calle falsa 123', phone_nbr='15444444444', order_type='DEL')

        order_menu = self.create_order_menu(order=order, menu=menu, amount=2)

        self.assertEqual(400, order_menu.real_price)
        self.assertEqual(400, order_menu.discount_price)

class ReservationProductTest(ApplicationTest):
    def test_reservation_product_price_is_sum_of_product_with_its_additionals(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=200, sort_nbr=1, category=cat1)
        prod_additional = self.create_product_category_additional(name='SALSA RE PIOLA', category=cat1, price=100)
        reservation = self.create_reservation(restaurant=rest1, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        reservation_product = self.create_reservation_product(reservation=reservation, product=prd1, additional=prod_additional, amount=2)

        self.assertEqual(600, reservation_product.real_price)
        self.assertEqual(600, reservation_product.discount_price)

    def test_reservation_product_price_is_sum_of_product_with_no_additionals(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        prd1 = self.create_product(user=owner, name='test product', restaurant=rest1, description='test desc',
                                   price=200, sort_nbr=1, category=cat1)
        reservation = self.create_reservation(restaurant=rest1, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        reservation_product = self.create_reservation_product(reservation=reservation, product=prd1, amount=2)

        self.assertEqual(400, reservation_product.real_price)
        self.assertEqual(400, reservation_product.discount_price)

class ReservationMenuTest(ApplicationTest):
    def test_order_menu_price_is_sum_of_menus(self):
        rest1 = self.create_restaurant(name='Restaurant test')
        owner = self.create_user(username='owner', password='ownerpwd', staff=True)

        cat1 = self.create_product_category(user=owner, name='CAAA', restaurant=rest1)
        menu_category = self.create_menu_category(name='Menu ejecutivo', price=200, restaurant=rest1)
        menu = self.create_menu(name='test category', description='fake desc', restaurant=rest1, category=menu_category)
        reservation = self.create_reservation(restaurant=rest1, client=owner, reservation_date="2019-08-23", reservation_hour="10:00:00", diners=4)

        order_menu = self.create_reservation_menu(reservation=reservation, menu=menu, amount=2)

        self.assertEqual(400, order_menu.real_price)
        self.assertEqual(400, order_menu.discount_price)

class RestaurantPromotionAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(RestaurantPromotion, RestaurantPromotionAdmin)
        self.promotionAdminInstance = RestaurantPromotionAdmin(model=RestaurantPromotion, admin_site=self.site)

    def test_a_normal_user_can_only_assign_restaurants_he_owns(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        promotion = RestaurantPromotion(promotion='promotion1', promotion_date=datetime.now(), restaurant=rest)

        form = self.promotionAdminInstance.get_form(request, promotion)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 1)


class RestaurantDiscountAdminTest(AdminTest):
    def setUp(self):
        super().setUp()
        self.site.register(RestaurantDiscount, RestaurantDiscountAdmin)
        self.discountAdminInstance = RestaurantDiscountAdmin(model=RestaurantDiscount, admin_site=self.site)

    def test_a_normal_user_can_only_assign_restaurants_he_owns(self):
        rest = self.create_restaurant(name='Restaurant test')
        other_rest = self.create_restaurant(name='Other restaurant test')

        owner = self.create_user(username='owner', password='ownerpwd', staff=True)
        shortcuts.assign_perm('restaurants.add_restaurant', owner, rest)

        request = RequestFactory().get('/')
        request.user = owner
        discount = RestaurantDiscount(amount=25, discount_date=datetime.now(), applicable_to="PR", restaurant=rest)

        form = self.discountAdminInstance.get_form(request, discount)
        self.assertEquals(form.base_fields['restaurant'].queryset.count(), 1)