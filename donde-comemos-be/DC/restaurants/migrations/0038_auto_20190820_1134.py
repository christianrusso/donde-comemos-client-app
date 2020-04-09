# Generated by Django 2.2.2 on 2019-08-20 14:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurants', '0037_restaurantdiscount_applicable_to'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='average_time',
            field=models.IntegerField(blank=True, default=0, verbose_name='Tiempo de espera(mins)'),
        ),
        migrations.AlterUniqueTogether(
            name='favoriterestaurant',
            unique_together={('client', 'restaurant')},
        ),
    ]
