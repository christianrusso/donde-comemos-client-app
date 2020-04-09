import requests
from datetime import datetime, timedelta

from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models import Sum, Q, Max
from django.db.models.functions import Coalesce
from django.core.exceptions import ValidationError
from basic_app.models import *
from basic_app.fields import BasicCharField, BasicForeignKey, BasicDecimalField, BasicBooleanField
from superadmin.models import Holiday
from .model_helpers import MenuAvailability, WeekDay, OrderType, Notifications
from datetime import datetime


ALL_DISCOUNT_CATEGORIES = "ALL"


class Restaurant(AbstractNamedModel):
    address = BasicCharField('Dirección', blank=True, null=True)
    description = models.TextField('Descripcion', blank=True, null=True)
    is_premium = BasicBooleanField('Premium')
    accept_orders = BasicBooleanField('Ordenes por la App', default=True)
    profile_picture = models.ImageField(verbose_name='Foto principal', upload_to='profile_pictures', blank=True, null=True)
    delivery = BasicBooleanField('Delivery')
    self_service = BasicBooleanField('Retiro por el local')
    in_place = BasicBooleanField('Comer en el local')
    reservations = BasicBooleanField('Acepta reservas')
    max_diners = models.PositiveSmallIntegerField(verbose_name='Máximo de comensales', null=True, blank=True)
    influence_range = BasicForeignKey('superadmin.Location', 'Zona de influencia', blank=True, null=True)
    average_time = models.IntegerField(verbose_name='Tiempo de espera(mins)', default=0, blank=True)
    renewal_time = models.TimeField(verbose_name="Tiempo de renovacion de mesas", default='01:00', blank=False)
    public_key = BasicCharField('public key', blank=True, null=True)
    access_token = models.CharField('access token', blank=True, null=True, max_length=1024)

    class Meta:
        verbose_name = 'restaurante'
        verbose_name_plural = 'restaurantes'

    def clean(self, *args, **kwargs):
        super().clean(*args, **kwargs)

        if not self.reservations:
            raise ValidationError(_("No se puede guardar un restaurante que no acepte reservas"))

    @property
    def is_available_now(self):
        return self.is_available(datetime.now().strftime('%Y-%m-%d'), datetime.now().strftime('%H:%M'))

    @property
    def hours_today(self):
        return self.hours(datetime.now().strftime('%Y-%m-%d'))

    def hours(self, date):
        if self._is_workable(date):
            weekday = WeekDay.HOLIDAY
        else:
            weekday = datetime.strptime(date, '%Y-%m-%d').weekday()

        return self.restaurantattentionschedule_set.filter(day=weekday)

    @property
    def max_discount_today(self):
        return RestaurantDiscount.get_discounts(datetime.now(),ALL_DISCOUNT_CATEGORIES, self).aggregate(Max('amount'))['amount__max'] or 0

    @property
    def promotions_today(self):
        return RestaurantPromotion.get_promotions(datetime.now(), self).first()

    def is_available(self, day, hour):
        weekday = datetime.strptime(day, '%Y-%m-%d').weekday()

        return self._is_workable_holiday(day, hour) or (
                not self._is_holiday(day) and self._is_available_at_day(weekday, hour))

    def can_receive_orders(self):
        return self.is_premium and self.accept_orders

    def _is_workable_holiday(self, day, hour):
        return self._is_workable(day) and self._is_available_holiday(hour)

    def _is_holiday(self, day):
        return Holiday.objects.filter(holiday_date=day).exists()

    def _is_workable(self, day):
        return self.restaurantworkableholiday_set.filter(holiday__holiday_date=day).exists()

    def _is_available_holiday(self, hour):
        return self._is_available_at_day(WeekDay.HOLIDAY, hour)

    def _is_available_at_day(self, day, hour):
        return self.restaurantattentionschedule_set.filter(day=day, opening_hour__lte=hour,
                                                           closing_hour__gte=hour).exists()

    def has_room(self, diners, hours, date):

        current_time = datetime.strptime(hours, '%H:%M')  # hora en que quiero reservar

        time_renewal_hour = int(
            self.renewal_time.strftime('%H'))  # tiempo de renovacion del restaurante en este caso 1 hora
        time_renewal_min = int(
            self.renewal_time.strftime('%M'))  # tiempo de renovacion del restaurante en este caso 1 hora

        hour_before = current_time + timezone.timedelta(hours=-time_renewal_hour, minutes=-time_renewal_min)
        hour_later = current_time + timezone.timedelta(hours=+time_renewal_hour, minutes=+time_renewal_min)
        current_diners = \
        self.reservation_set.filter(reservation_hour__range=(hour_before, hour_later), reservation_date=date).aggregate(
            current_diners=Coalesce(Sum('diners'), 0))['current_diners']

        return self.max_diners is None or (self.max_diners - current_diners) >= diners

    def available_date(self, date, hour):
        now = datetime.now()
        nowDate = now.date()
        nowTime = datetime.strptime(now.time().strftime('%H:%M'), '%H:%M').time()
        dateParsed = datetime.strptime(date, '%Y-%m-%d').date()
        hourParsed = datetime.strptime(hour, '%H:%M').time()

        return (nowDate < dateParsed) or ((nowDate == dateParsed) and (nowTime <= hourParsed))


class RestaurantRelated(AbstractModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)

    class Meta:
        abstract = True

    def __str__(self):
        return ''


class RestaurantBrandPicture(RestaurantRelated):
    brand_picture = models.ImageField(verbose_name='Foto de portada', upload_to='brand_pictures', blank=True, null=True)

    class Meta:
        verbose_name = 'foto de portada'
        verbose_name_plural = 'fotos de portada'


class ProductCategory(AbstractNamedModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    sort_nbr = models.IntegerField(verbose_name='Orden')

    class Meta:
        verbose_name = 'categoría de producto'
        verbose_name_plural = 'categorías de productos'
        ordering = ['sort_nbr', ]


class ProductSubcategory(AbstractNamedModel):
    category = BasicForeignKey('ProductCategory', 'Categoría', cascade=True)

    class Meta:
        verbose_name = 'sub categoría de productos'
        verbose_name_plural = 'sub categorías de productos'


class Discountable:
    @property
    def discount_price(self):
        discounts = RestaurantDiscount.get_discounts(datetime.now(), self.discount_category, self.get_restaurant())

        if discounts.exists():
            return discounts.first().apply_to(self._get_price_amount())
        return self._get_price_amount()

    def get_restaurant(self):
        return self.restaurant

    @property
    def real_price(self):
        return self._get_price_amount()


class Product(Discountable, AbstractModel):
    name = models.TextField('Nombre', max_length=1024)
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    description = models.TextField('Descripción', blank=True, null=True, max_length=1024)
    price = models.IntegerField('Precio')
    sort_nbr = models.IntegerField(verbose_name='Orden')
    category = BasicForeignKey('ProductCategory', 'Categoría', cascade=True)
    subcategory = BasicForeignKey('ProductSubcategory', 'Subcategoría', null=True, blank=True, cascade=True)

    def __str__(self):
        return self.name

    def _get_price_amount(self):
        return self.price

    @property
    def discount_category(self):
        return 'PR'

    class Meta:
        verbose_name = 'producto'
        verbose_name_plural = 'productos'
        ordering = ['sort_nbr', ]


class RestaurantHighLevelTag(RestaurantRelated):
    tag = BasicForeignKey('superadmin.HighLevelTag', 'Tag Macro')

    class Meta:
        verbose_name = 'tag macro'
        verbose_name_plural = 'tags macro'


class RestaurantService(RestaurantRelated):
    service = BasicForeignKey('superadmin.Service', 'Servicio')

    class Meta:
        verbose_name = 'servicio'
        verbose_name_plural = 'servicios'


# class RestaurantLowLevelTag(RestaurantRelated):
#     tag = BasicForeignKey('superadmin.LowLevelTag', 'Tag Micro')

#     class Meta:
#         verbose_name = 'tag micro'
#         verbose_name_plural = 'tags micro'


class RestaurantAttentionSchedule(RestaurantRelated):
    opening_hour = models.TimeField(verbose_name='Horario de apertura')
    closing_hour = models.TimeField(verbose_name='Horario de cierre')
    day = BasicCharField('Día', choices=WeekDay.ALL_DAYS)

    class Meta:
        verbose_name = 'horario'
        verbose_name_plural = 'horarios'


class RestaurantWorkableHoliday(RestaurantRelated):
    holiday = BasicForeignKey('superadmin.Holiday', 'Feriado', cascade=True)

    class Meta:
        verbose_name = 'feriado laborable'
        verbose_name_plural = 'feriados laborables'


class RestaurantPaymentMethod(RestaurantRelated):
    payment_method = BasicForeignKey('superadmin.PaymentMethod', 'Método de pago', cascade=True)

    class Meta:
        verbose_name = 'método de pago'
        verbose_name_plural = 'métodos de pago'


class MenuCategory(AbstractNamedModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    price = models.IntegerField('Precio')

    class Meta:
        verbose_name = 'categoría de menú'
        verbose_name_plural = 'categorías de menús'


class SubMenu(AbstractNamedModel):
    value = BasicCharField('Descripcion', blank=False)
    menu = BasicForeignKey('Menu', 'Menú', cascade=True)

    class Meta:
        verbose_name = 'sub menú'
        verbose_name_plural = 'sub menús'

class ProductCategoryAdditional(Discountable, AbstractNamedModel):
    category = BasicForeignKey('ProductCategory', 'Categoría', cascade=True)
    price = models.IntegerField('Precio')

    def get_restaurant(self):
        return self.category.restaurant
        
    @property
    def discount_category(self):
        return 'PR'

    def _get_price_amount(self):
        return self.price   

    class Meta:
        verbose_name = 'adicional'
        verbose_name_plural = 'adicionales'

class Menu(Discountable, AbstractNamedModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    category = BasicForeignKey('MenuCategory', 'Categoría', cascade=True)
    description = models.TextField('Descripción', blank=True, null=True)

    class Meta:
        verbose_name = 'menú'
        verbose_name_plural = 'menús'

    def is_available(self, datestr):
        return MenuAvailability.is_available(self, datestr)

    @property
    def discount_category(self):
        return 'MN'

    def _get_price_amount(self):
        return self.category.price


class MenuDate(AbstractModel):
    menu = BasicForeignKey('Menu', 'Menú', cascade=True)
    fixed_date = models.DateField(verbose_name='Fecha', blank=True, null=True)

    class Meta:
        verbose_name = 'día fijo'
        verbose_name_plural = 'días fijos'

    def __str__(self):
        return ''


class MenuDay(AbstractModel):
    menu = BasicForeignKey('Menu', 'Menú', cascade=True)
    fixed_day = BasicCharField('Día', choices=WeekDay.DAYS)

    class Meta:
        verbose_name = 'día'
        verbose_name_plural = 'días'

    def __str__(self):
        return ''


class QualifiableModel:

    @property
    def qualified(self):
        return Qualification.objects.filter(related_type=self.related_type, related_id=self.id).exists()

    @property
    def related_type(self):
        return self.__class__.__name__.lower()


class Order(AbstractModel, QualifiableModel):

    ZERO_MINUTES = 0
    FIFTEEN_MINUTES = 15
    THIRTY_MINUTES = 30

    APLICATION_CHOICES = (
        (ZERO_MINUTES, _('0')),
        (FIFTEEN_MINUTES, _('15')),
        (THIRTY_MINUTES, _('30')),
    )

    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    client = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='cliente')
    address = BasicCharField('Dirección', blank=True, null=True)
    phone_nbr = BasicCharField('Teléfono')
    expected_payment = BasicDecimalField('Abona con', blank=True, null=True)
    comments = models.TextField('Comentarios', blank=True, null=True)
    _price = models.IntegerField('Precio')
    delivered = BasicBooleanField('Entregado', default=False)
    delivered_date = models.DateTimeField(verbose_name='Fecha de Entrega', blank=True, null=True)
    order_type = BasicCharField('Tipo', choices=OrderType.ALL)
    order_hour = models.TimeField(verbose_name='Horario de Pedido', null=True)
    accepted = BasicBooleanField('Aceptado', default=False)
    cancelled = BasicBooleanField('Cancelado', default=False)
    cancelled_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cancelled_user', verbose_name='Usuario cancelación', null=True)
    waiting_time = models.IntegerField(verbose_name='Tiempo de Espera (mins)', default= ZERO_MINUTES, choices=APLICATION_CHOICES ,blank=False)
    mp_id = models.BigIntegerField('ID MP', blank=True, null=True)

    class Meta:
        verbose_name = 'pedido'
        verbose_name_plural = 'pedidos'

    def cancel(self, user):
        self.cancelled = True
        self.cancelled_user = user
        self.save()

    def save(self, *args, **kwargs):
        if not self.address and self.order_type == OrderType.DELIVERY:
            raise ValidationError(_("No se puede crear un pedido sin dirección"), code='null_address')

        if not self.order_type:
            raise ValidationError(_("No se puede crear un pedido sin tipo"), code='null_type')

        if self.delivered:
            self.delivered_date = timezone.now()
        else:
            self.delivered_date = None
            self._price = self._get_items_discount_price()

        if not self.cancelled:
            self.cancelled_user = None

        refund_success = False
        if self.cancelled and self.mp_id:
            try:
                import json
                payload = json.dumps({
                    'mp_id': self.mp_id, 
                    'restaurantId': self.restaurant.id,
                    'access_token': self.restaurant.access_token
                    })
                url = "https://testing.gaiacoop.tech/gapi/public/index.php/refund"
                r = requests.post(url, data=payload)
                refund_success = r.status_code == 200
                r.raise_for_status()
            except Exception as e:
                pass
                #raise ValidationError(_("Ocurrió un problema al devolver el dinero"), code='gapi_refund_fail')
        super().save(*args, **kwargs)

          # Notifico al usuario
        if self.accepted:
            et = (timedelta(hours=self.order_hour.hour, minutes=self.order_hour.minute) + timedelta(minutes=self.restaurant.average_time + self.waiting_time))
            title = "donde comemos"
            text = "¡Tu pedido fue confirmado y estará listo a las " + str(et)[:5] + "!"
            Notifications.send_push(title, text, self.client.id)

        if self.cancelled and self.cancelled_user != self.client:
            title = "donde comemos"
            text = "Lo sentimos, el restaurante ha cancelado tu pedido"
            Notifications.send_push(title, text, self.client.id)

        if refund_success: 
            title = "donde comemos"
            text = "¡Tu pago ha sido devuelto exitosamente!"
            Notifications.send_push(title, text, self.client.id)

    @property
    def discount_price(self):
        return self._get_price(self._get_items_discount_price)

    @property
    def real_price(self):
        return self._get_price(self._get_items_real_price)

    def _get_price(self, price_func):
        if self.delivered:
            return self._price
        else:
            return price_func()

    def _get_items_discount_price(self):
        return self._get_items_price('discount_price')

    def _get_items_real_price(self):
        return self._get_items_price('real_price')

    def _get_items_price(self, price_getter):
        products_price = sum(map(lambda orderproduct: getattr(orderproduct, price_getter), self.orderproduct_set.all())) or 0
        menus_price = sum(map(lambda ordermenu: getattr(ordermenu, price_getter), self.ordermenu_set.all())) or 0

        return products_price + menus_price

    def __str__(self):
        return 'Pedido: {0}'.format(self.pk)

    @property
    def estimated_time(self):
        return self.restaurant.average_time + self.waiting_time


class Relation(AbstractModel):
    @property
    def real_price(self):
        return self.amount * (self.item.real_price + self.item_additional_real_price())

    @property
    def discount_price(self):
        return self.amount * (self.item.discount_price + self.item_additional_discount_price())

    @property
    def item(self):
        return self._get_item

    def item_additional_real_price(self):
        return 0

    def item_additional_discount_price(self):
        return 0

    class Meta:
        abstract = True


class OrderProduct(Relation):
    order = BasicForeignKey('Order', 'Pedido', cascade=True)
    product = BasicForeignKey('Product', 'Producto')
    amount = models.IntegerField(verbose_name='Cantidad')
    additional = BasicForeignKey('ProductCategoryAdditional', 'Adicional', cascade=True, null=True)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.order.save()

    def __str__(self):
        return ''

    @property
    def _get_item(self):
        return self.product

    def item_additional_real_price(self):
        return self.additional.real_price if self.additional else 0

    def item_additional_discount_price(self):
        return self.additional.discount_price if self.additional else 0

class FavoriteRestaurant(RestaurantRelated):
    client = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='cliente')

    class Meta:
        unique_together = ['client', 'restaurant']
        verbose_name = 'restaurante favorito'
        verbose_name_plural = 'restaurantes favoritos'


class OrderMenu(Relation):
    order = BasicForeignKey('Order', 'Pedido', cascade=True)
    menu = BasicForeignKey('Menu', 'Menú')
    amount = models.IntegerField(verbose_name='Cantidad')

    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menus'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.order.save()

    @property
    def _get_item(self):
        return self.menu

    def __str__(self):
        return ''


class RestaurantDiscount(RestaurantRelated):
    amount = models.IntegerField('% de descuento', default=0)
    discount_date = models.DateField(verbose_name='Fecha', blank=True, null=True)
    applicable_to = BasicCharField('Aplicable a', choices=(('MN', 'Menus'), ('PR', 'Productos')))
    day_fixed = BasicCharField('Día de descuento fijo', choices=WeekDay.DAYS, blank=True, null=True)

    def clean(self):
        super().clean()
        if (not self.day_fixed) & (not self.discount_date):
            raise ValidationError(_("No se puede crear un descuento sin fecha o día fijo."), code='null_date')

    def apply_to(self, price):
        return price - (price * self.amount / 100)

    class Meta:
        verbose_name = 'descuento'
        verbose_name_plural = 'descuentos'

    def __str__(self):
        return 'Descuento a {applicable} {date} - {amount}%'.format(date=self.discount_date,
                                                                    amount="%.0f" % self.amount,
                                                                    applicable=self.get_applicable_to_display())

    def format(self, obj, attr):
        return "$%.2f" % getattr(obj, attr)

    @classmethod
    def get_discounts(cls,date, discount_category, restaurant):
        result = cls.objects.filter(Q(discount_date=date) | Q(day_fixed=date.weekday())).filter(restaurant=restaurant)
        if discount_category != ALL_DISCOUNT_CATEGORIES:
            result = result.filter(applicable_to=discount_category)

        return result


class RestaurantPromotion(RestaurantRelated):
    promotion = models.TextField('Promocion de restaurante', blank=True, null=True, max_length=60)
    promotion_date = models.DateField(verbose_name='Fecha', blank=True, null=True)
    day_fixed = BasicCharField('Día de promocion fijo', choices=WeekDay.DAYS, blank=True, null=True)

    def clean(self):
        super().clean()
        if (not self.day_fixed) & (not self.promotion_date):
            raise ValidationError(_("No se puede crear una promoción sin fecha o día fijo."), code='null_date')

    @classmethod
    def get_promotions(cls,date,restaurant):
        result = cls.objects.filter(Q(promotion_date=date) | Q(day_fixed=date.weekday())).filter(restaurant=restaurant)
        return result

    class Meta:
        verbose_name = 'promocion'
        verbose_name_plural = 'promociones'


class Reservation(AbstractModel, QualifiableModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurante', cascade=True)
    client = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='cliente')
    phone_nbr = BasicCharField('Teléfono')
    reservation_date = models.DateField(verbose_name='Fecha')
    reservation_hour = models.TimeField(verbose_name='Horario de reserva')
    cancelled = BasicBooleanField("Cancelada", default=False)
    cancelled_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reservation_cancelled_user', verbose_name='Usuario cancelación', null=True)
    diners = models.PositiveSmallIntegerField(verbose_name='Cantidad de comensales')
    comments = models.TextField('Comentarios', blank=True, null=True)
    motive = models.TextField('Motivo de reserva', blank=True, null=True)
    mp_id = models.BigIntegerField('ID MP', blank=True, null=True)


    class Meta:
        verbose_name = 'reserva'
        verbose_name_plural = 'reservas'

    def __str__(self):
        return 'Reserva: {0}'.format(self.client.username)

    def cancel(self, user):
        self.cancelled = True
        self.cancelled_user = user
        self.save()

    def save(self, *args, **kwargs):
        if not self.cancelled:
            self.cancelled_user = None

        refund_success = False
        if self.cancelled and self.mp_id:
            try:
                import json
                payload = json.dumps({
                    'mp_id': self.mp_id, 
                    'restaurantId': self.restaurant.id,
                    'access_token': self.restaurant.access_token
                    })
                url = "https://testing.gaiacoop.tech/gapi/public/index.php/refund"
                r = requests.post(url, data=payload)
                refund_success = r.status_code == 200
                r.raise_for_status()
            except Exception as e:
                pass
                #raise ValidationError(_("Ocurrió un problema al devolver el dinero"), code='gapi_refund_fail')
        super().save(*args, **kwargs)

        # Notifico al usuario
        if self.cancelled and self.cancelled_user != self.client:
            title = "donde comemos"
            text = "Lo sentimos, el restaurante ha cancelado tu reserva"
            Notifications.send_push(title, text, self.client.id)

        if refund_success: 
            title = "donde comemos"
            text = "¡Tu pago ha sido devuelto exitosamente!"
            Notifications.send_push(title, text, self.client.id)

    @property
    def finished(self):
        time_renewal_hour = int(
            self.restaurant.renewal_time.strftime('%H'))
        time_renewal_min = int(
            self.restaurant.renewal_time.strftime('%M'))

        date_reservation =datetime.combine(self.reservation_date, self.reservation_hour)

        time_estimated = date_reservation + timezone.timedelta(hours=+time_renewal_hour, minutes=+time_renewal_min)

        return datetime.now() > time_estimated


class Qualification(AbstractModel):
    restaurant = BasicForeignKey('Restaurant', 'Restaurant', cascade=True)
    related_id = models.IntegerField(verbose_name='id tipo')
    related_type = BasicCharField('tipo')
    score_category = BasicForeignKey('superadmin.ScoreCategory', 'Categoría', cascade=True)
    score = models.FloatField(verbose_name='puntaje')


class ReservationProduct(Relation):
    reservation = BasicForeignKey('Reservation', 'Reserva', cascade=True)
    product = BasicForeignKey('Product', 'Producto')
    amount = models.IntegerField(verbose_name='Cantidad')
    additional = BasicForeignKey('ProductCategoryAdditional', 'Adicional', cascade=True, null=True)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.reservation.save()

    def __str__(self):
        return ''

    @property
    def _get_item(self):
        return self.product

    def item_additional_real_price(self):
        return self.additional.real_price if self.additional else 0

    def item_additional_discount_price(self):
        return self.additional.discount_price if self.additional else 0


class ReservationMenu(Relation):
    reservation = BasicForeignKey('Reservation', 'Reserva', cascade=True)
    menu = BasicForeignKey('Menu', 'Menú')
    amount = models.IntegerField(verbose_name='Cantidad')

    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menus'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.reservation.save()

    @property
    def _get_item(self):
        return self.menu

    def __str__(self):
        return ''


class UserRecoveryCode(AbstractModel):
    client = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='cliente')
    code = models.IntegerField(verbose_name='Codigo')
    

class RestaurantAdministrator(RestaurantRelated):
    admin = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='administrador', limit_choices_to={'is_staff': True})

    class Meta:
        verbose_name = 'Administrador de restaurant'
        verbose_name_plural = 'Administradores de restaurant'
        unique_together = ['admin', 'restaurant']

    def save(self):
        super().save()
        
        from guardian.shortcuts import assign_perm
        
        if not self.admin.has_perm('add_restaurant', self.restaurant):
            assign_perm('add_restaurant', self.admin, self.restaurant)
            assign_perm('change_restaurant', self.admin, self.restaurant)
            assign_perm('delete_restaurant', self.admin, self.restaurant)
            assign_perm('view_restaurant', self.admin, self.restaurant)

    def delete(self):
        from guardian.shortcuts import remove_perm

        remove_perm('add_restaurant', self.admin, self.restaurant)
        remove_perm('change_restaurant', self.admin, self.restaurant)
        remove_perm('delete_restaurant', self.admin, self.restaurant)
        remove_perm('view_restaurant', self.admin, self.restaurant)

        super().delete()
