from django.contrib.admin import ModelAdmin, register, TabularInline, site
from guardian.admin import GuardedModelAdmin
from guardian.shortcuts import get_objects_for_user
from rest_framework.authtoken.models import Token
from fcm_django.models import FCMDevice
from .models import *

class AbstractGuardedAdmin(GuardedModelAdmin, ModelAdmin):
    class Media:
        css = {
            'all': ('admin/css/admin-panel-custom-style.css',)
        }
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.create_user = request.user

        obj.update_user = request.user
        super().save_model(request, obj, form, change)

    def save_formset(self, request, form, formset, change):
        instances = formset.save(commit=False)
        for obj in formset.deleted_objects:
            obj.delete()

        for instance in instances:
            if instance in formset.new_objects:
                instance.create_user = request.user
            instance.update_user = request.user
            instance.save()

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(**self.filter_objects_by_permissions(request))

    def get_restaurants(self, request):
        return get_objects_for_user(request.user, 'restaurants.add_restaurant')

class AbstractInline(TabularInline):
    extra = 1

class CollapsedInline:
    classes = ('collapse', )

class RestaurantHighLevelTagAdmin(CollapsedInline, AbstractInline):
    model = RestaurantHighLevelTag
    fields = ('tag', )

class RestaurantServiceAdmin(CollapsedInline, AbstractInline):
    model = RestaurantService
    fields = ('service', )

# class RestaurantLowLevelTagAdmin(CollapsedInline, AbstractInline):
#     model = RestaurantLowLevelTag
#     fields = ('tag', )

class RestaurantAttentionScheduleAdmin(CollapsedInline, AbstractInline):
    model = RestaurantAttentionSchedule
    fields = ('day', 'opening_hour', 'closing_hour',)

class RestaurantWorkableHolidayAdmin(CollapsedInline, AbstractInline):
    model = RestaurantWorkableHoliday
    fields = ('holiday',)

class RestaurantBrandPictureAdmin(CollapsedInline, AbstractInline):
    model = RestaurantBrandPicture
    fields = ('brand_picture',)


class ProductCategoryAdditionalAdmin(CollapsedInline, AbstractInline):
    model = ProductCategoryAdditional
    fields = ('name', 'price', )

class RestaurantPaymentMethodAdmin(CollapsedInline, AbstractInline):
    model = RestaurantPaymentMethod
    fields = ('payment_method',)

class RestaurantDependant:
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        form.base_fields['restaurant'].queryset = self.get_restaurants(request)

        return form

@register(ProductCategory)
class ProductCategoryAdmin(RestaurantDependant, AbstractGuardedAdmin):
    icon_name = 'clear_all'
    fields = ('name', 'sort_nbr', 'restaurant')
    list_display = ('name', 'sort_nbr', )
    list_editable = ('sort_nbr', )
    inlines = [ProductCategoryAdditionalAdmin, ]

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}


@register(ProductSubcategory)
class ProductSubcategoryAdmin(AbstractGuardedAdmin):
    fields = ('name', 'category', )
    icon_name = 'clear_all'

    def filter_objects_by_permissions(self, request):
        return {'category__restaurant__in':self.get_restaurants(request)}

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        form.base_fields['category'].queryset = ProductCategory.objects.filter(restaurant__in=self.get_restaurants(request))

        return form

@register(Restaurant)
class RestaurantAdmin(AbstractGuardedAdmin):
    inlines = [
        RestaurantBrandPictureAdmin, 
        RestaurantAttentionScheduleAdmin, 
        RestaurantWorkableHolidayAdmin, 
        RestaurantPaymentMethodAdmin,
        RestaurantServiceAdmin, 
        RestaurantHighLevelTagAdmin, 
        # RestaurantLowLevelTagAdmin,
    ]
    icon_name = 'store'

    def get_fieldsets(self, request, obj=None, **kwargs):
        #['name', 'description', 'is_premium', 'address', 'profile_picture', 'delivery', 'self_service', [ ], 'influence_range']
        
        self.fieldsets = (
            (None, {
                'fields': ['name','description','address','public_key','access_token','profile_picture', 'influence_range','renewal_time']
            }),
            ('Reservas', {
                'classes': ('collapse',),
                'fields': ('reservations', 'max_diners',)
            }),
            ('Entregas', {
                'classes': ('collapse',),
                'fields':  ['self_service', 'delivery', 'average_time'],
            }),
        )

        if obj and obj.is_premium:
            self.fieldsets[2][1]['fields'].insert(0, 'accept_orders')
        return self.fieldsets


    def filter_objects_by_permissions(self, request):
        return {'id__in':self.get_restaurants(request)}
    
@register(Product)
class ProductAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('name', 'description', 'price', 'sort_nbr', 'restaurant', 'category', 'subcategory', )
    list_display = ('name', 'description', 'price', 'sort_nbr', 'category', 'subcategory', )
    list_editable = ('price', 'sort_nbr')
    icon_name = 'local_pizza'
    list_per_page = 5

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        form.base_fields['category'].queryset = ProductCategory.objects.filter(restaurant__in=self.get_restaurants(request))
        form.base_fields['subcategory'].queryset = ProductSubcategory.objects.filter(category__restaurant__in=self.get_restaurants(request))

        return form

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('category', 'subcategory')

class MenuDayAdmin(AbstractInline):
    model = MenuDay
    fields = ('fixed_day', )

class MenuDateAdmin(AbstractInline):
    model = MenuDate
    fields = ('fixed_date', )

@register(MenuCategory)
class MenuCategoryAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('name', 'price', 'restaurant', )
    list_display = ('_', 'name', 'price', )
    list_editable = ('name', 'price',)
    icon_name = 'clear_all'

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}
    
    def _(self, obj):
        return "Modificar"

class SubMenuAdmin(AbstractInline):
    model = SubMenu
    fields = ('name', 'value')

@register(Menu)
class MenuAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('name', 'description', 'category','restaurant', )
    list_display = ('name', 'description', 'category')
    inlines = [SubMenuAdmin, MenuDateAdmin, MenuDayAdmin]
    icon_name = 'restaurant_menu'
    list_per_page = 5

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}
    
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        form.base_fields['category'].queryset = form.base_fields['category'].queryset.filter(restaurant__in=self.get_restaurants(request))

        return form


class OrderProductAdmin(AbstractInline):
    model = OrderProduct
    fields = ('product', 'additional', 'amount')


class OrderMenuAdmin(AbstractInline):
    model = OrderMenu
    fields = ('menu', 'amount')


class ReservationProductAdmin(AbstractInline):
    model = ReservationProduct
    fields = ('product', 'additional', 'amount')


class ReservationMenuAdmin(AbstractInline):
    model = ReservationMenu
    fields = ('menu', 'amount')


@register(Order)
class OrderAdmin(AbstractGuardedAdmin):
    fields =  ('client', 'phone_nbr', 'order_hour', 'precio', 'abona_con', 'comments', 'order_type', 'address', 'delivered', 'delivered_date', 'accepted', 'cancelled', 'waiting_time')
    list_display = ('cliente', 'phone_nbr', 'horario_de_pedido', 'precio', 'abona_con', 'comments', 'order_type', 'address', 'delivered', 'delivered_date', 'accepted', 'cancelled', 'waiting_time', 'pagado_por_mp')
    list_editable = ('delivered', 'accepted', 'cancelled', 'waiting_time')
    ordering = ('accepted','cancelled','delivered', )
    readonly_fields =  ('client', 'phone_nbr','order_hour', 'precio', 'abona_con', 'comments', 'order_type', 'address', 'delivered_date',)
    inlines = [OrderProductAdmin,OrderMenuAdmin]
    icon_name = 'shopping_cart'
    list_per_page = 5

    def cliente(self, obj):
        nombre = obj.client.first_name
        apellido = obj.client.last_name
        email = obj.client.username
        return '{0} {1}'.format(nombre, apellido) if nombre or apellido else email

    def abona_con(self, obj):
        return self.format(obj, 'expected_payment') if obj.expected_payment else '-'

    def precio(self, obj):
        return self.format(obj, 'discount_price')

    def format(self, obj, attr):
        return "$%.2f" % getattr(obj, attr)

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}

    def horario_de_pedido(self, obj):
        return 'Pedido en el momento' if obj.order_hour is None else obj.order_hour

    def pagado_por_mp(self, obj):
        return "SI" if obj.mp_id else "NO"

    def has_add_permission(self, request, obj=None):
        return False

    def save_model(self, request, order, form, change):
        if order.cancelled and order.cancelled_user is None:
            order.cancelled_user = request.user
        super().save_model(request, order, form, change)

@register(Reservation)
class ReservationAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('client', 'restaurant', 'phone_nbr','diners','motive','reservation_date','reservation_hour',)
    list_display = ('cliente', 'restaurant', 'phone_nbr','diners','motive','reservation_date','reservation_hour', 'cancelled', 'pagado_por_mp')
    list_editable = ('diners', 'cancelled', )
    readonly_fields = ('client','phone_nbr','reservation_date','reservation_hour')
    inlines = [ReservationProductAdmin, ReservationMenuAdmin]
    icon_name = 'book'
    list_per_page = 5

    def cliente(self, obj):
        nombre = obj.client.first_name
        apellido = obj.client.last_name
        email = obj.client.username
        return '{0} {1}'.format(nombre, apellido) if nombre or apellido else email

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}

    def has_add_permission(self, request, obj=None):
        return False

    def pagado_por_mp(self, obj):
        return "SI" if obj.mp_id else "NO"

@register(RestaurantDiscount)
class RestaurantDiscountAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('applicable_to', 'amount', 'discount_date', 'day_fixed','restaurant', )
    list_display = ('applicable_to', 'amount', 'discount_date', 'day_fixed', 'restaurant', )
    icon_name = 'card_giftcard'
    list_per_page = 5

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}


@register(RestaurantPromotion)
class RestaurantPromotionAdmin(RestaurantDependant, AbstractGuardedAdmin):
    fields = ('promotion','promotion_date', 'day_fixed','restaurant',)
    list_display = ('promotion','promotion_date', 'day_fixed','restaurant',)
    icon_name = 'card_giftcard'
    list_per_page = 5

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}


@register(RestaurantAdministrator)
class RestaurantAdministratorAdmin(AbstractGuardedAdmin):
    fields = ('admin', 'restaurant')
    list_display = fields
    icon_name = 'lock'

    def delete_queryset(self, request, queryset):
        for res_admin in queryset:
            res_admin.delete()

    def filter_objects_by_permissions(self, request):
        return {'restaurant__in':self.get_restaurants(request)}


site.unregister(Token)
site.unregister(FCMDevice)