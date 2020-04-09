# Generated by Django 2.2.2 on 2019-08-12 16:35

import basic_app.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0036_auto_20190809_1654'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurantdiscount',
            name='applicable_to',
            field=basic_app.fields.BasicCharField('Aplicable a', choices=[('MN', 'Menus'), ('PR', 'Producto')], default='PR'),
            preserve_default=False,
        ),
    ]
