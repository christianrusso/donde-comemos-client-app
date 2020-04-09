from basic_app.admin import *
from restaurants.admin import AbstractInline
from .models import *
from django.contrib.admin import ModelAdmin, register, TabularInline, site


class MaterialAbstractAdmin(AbstractAdmin, ModelAdmin):
    pass

@register(HighLevelTag)
class HighLevelTagAdmin(MaterialAbstractAdmin):
    fields = ('name', )
    icon_name = 'label_important'

# @register(LowLevelTag)
# class LowLevelTagAdmin(MaterialAbstractAdmin):
#     fields = ('name', )
#     icon_name = 'label'
    
@register(Service)
class ServiceAdmin(MaterialAbstractAdmin):
    fields = ('name', )
    icon_name = 'room_service'

@register(Holiday)
class HolidayAdmin(MaterialAbstractAdmin):
    fields = ('name', 'holiday_date')
    list_display = ('id', 'name', 'holiday_date', )
    list_editable = ('name', 'holiday_date', )
    icon_name = 'flag'

@register(PaymentMethod)
class PaymentMethodAdmin(MaterialAbstractAdmin):
    fields = ('name', )
    icon_name = 'payment'

@register(Location)
class LocationAdmin(MaterialAbstractAdmin):
    fields = ('name',) 
    icon_name = 'location_city'

@register(ReservationMotive)
class ReservationMotiveAdmin(MaterialAbstractAdmin):
    fields = ('name',) 
    icon_name = 'library_books'

class ScoreCategoryItemAdmin(AbstractInline):
    model = ScoreCategoryItem
    fields = ('item',)

@register(ScoreCategory)
class ScoreCategoryAdmin(MaterialAbstractAdmin):
    fields = ('name',)
    list_display = ('name',)
    #    list_display = ('id','name',)
    inlines = [ScoreCategoryItemAdmin,]
    icon_name = 'star_half'
    