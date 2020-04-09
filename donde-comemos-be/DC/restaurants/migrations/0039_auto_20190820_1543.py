# Generated by Django 2.2.2 on 2019-08-20 18:43

import basic_app.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0038_auto_20190820_1134'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_type',
            field=basic_app.fields.BasicCharField('Tipo', choices=[('DEL', 'Delivery'), ('LOC', 'Local Retirement')], default='DEL'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='address',
            field=basic_app.fields.BasicCharField('Dirección', blank=True, null=True),
        ),
    ]
