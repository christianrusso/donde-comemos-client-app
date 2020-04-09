from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from basic_app.models import *
from basic_app.fields import BasicCharField, BasicForeignKey, BasicDecimalField, BasicBooleanField


class HighLevelTag(AbstractNamedModel):
    class Meta:
        verbose_name = 'tag macro'
        verbose_name_plural = 'tags macro'


# class LowLevelTag(AbstractNamedModel):
#     class Meta:
#         verbose_name = 'tag micro'
#         verbose_name_plural = 'tags micro'


class Service(AbstractNamedModel):
    class Meta:
        verbose_name = 'servicio'
        verbose_name_plural = 'servicios'


class Holiday(AbstractNamedModel):
    holiday_date = models.DateField(verbose_name='Fecha')

    class Meta:
        verbose_name = 'feriado'
        verbose_name_plural = 'feriados'


class PaymentMethod(AbstractNamedModel):
    class Meta:
        verbose_name = 'método de pago'
        verbose_name_plural = 'métodos de pago'


class Location(AbstractNamedModel):
    class Meta:
        verbose_name = 'ciudad'
        verbose_name_plural = 'ciudades'

class ReservationMotive(AbstractNamedModel):
    class Meta:
        verbose_name = 'motivo de reserva'
        verbose_name_plural = 'motivos de reserva'

class ScoreCategory(AbstractNamedModel):
    class Meta:
        verbose_name = 'categoría de calificacion'
        verbose_name_plural = 'categorías de calificaciones'

class ScoreItem:
    DELIVERY = 'DEL'
    LOCAL = 'LOC'
    RESERVA = 'RES'
    ALL = ((DELIVERY, _('Delivery')), (LOCAL, _('Retiro por el local')), (RESERVA, _('Reserva')))

class ScoreCategoryItem(AbstractModel):
    category = BasicForeignKey("ScoreCategory", verbose_name="Categoria", cascade=True)
    item = BasicCharField("Item", choices=ScoreItem.ALL)