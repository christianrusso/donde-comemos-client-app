# Generated by Django 2.2.2 on 2019-12-19 14:30

import basic_app.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0067_auto_20191219_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, max_length=1024, null=True, verbose_name='Descripción'),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.TextField(max_length=1024, verbose_name='Nombre'),
        ),
        migrations.AlterField(
            model_name='reservation',
            name='restaurant',
            field=basic_app.fields.BasicForeignKey('Restaurant', 'Restaurante', to='restaurants.Restaurant'),
        ),
    ]
