# Generated by Django 2.2.2 on 2019-12-09 15:01

import basic_app.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0057_auto_20191209_1051'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cancelled',
            field=basic_app.fields.BasicBooleanField('Cancelado'),
        ),
    ]
