# Generated by Django 2.2.2 on 2019-12-18 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0064_auto_20191217_1036'),
    ]

    operations = [
        migrations.DeleteModel(
            name='RestaurantLowLevelTag',
        ),
    ]
