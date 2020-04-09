from datetime import datetime
from django.utils.translation import gettext_lazy as _
from fcm_django.models import FCMDevice

class WeekDay:
    HOLIDAY = '-1'
    MONDAY = '0'
    TUESDAY = '1'
    WEDNESDAY = '2'
    THURSDAY = '3'
    FRIDAY = '4'
    SATURDAY = '5'
    SUNDAY = '6'

    DAYS = (
        (MONDAY, _('Monday')),
        (TUESDAY, _('Tuesday')),
        (WEDNESDAY, _('Wednesday')),
        (THURSDAY, _('Thursday')),
        (FRIDAY, _('Friday')),
        (SATURDAY, _('Saturday')),
        (SUNDAY, _('Sunday')),
    )

    ALL_DAYS = list(DAYS)
    ALL_DAYS.append((HOLIDAY, _('Feriado')))
    ALL_DAYS = tuple(ALL_DAYS)

class OrderType:
    DELIVERY = 'DEL'
    LOCAL = 'LOC'
    ALL = ((DELIVERY, _('Delivery')), (LOCAL, _('Retiro por el local')))

class MenuAvailability:
    @classmethod
    def str_to_date(cls, datestr, format_str='%Y-%m-%d'):
        return datetime.strptime(datestr, format_str)

    @classmethod
    def is_available(cls, menu, datestr):
        date = cls.str_to_date(datestr)
        return FixedDay.is_available(menu, date) or OneDay.is_available(menu, date)


class FixedDay(MenuAvailability):
    @classmethod
    def is_available(cls, menu, date):
        return menu.menuday_set.filter(fixed_day=date.weekday()).exists()


class OneDay(MenuAvailability):
    @classmethod
    def is_available(cls, menu, date):
        return menu.menudate_set.filter(fixed_date=date).exists()

class Notifications:
    @classmethod
    def send_push(cls, title, text, user):
        device = FCMDevice.objects.filter(user_id=user)
        device.send_message(title=title, body=text, data={"test": "test"})
        pass
