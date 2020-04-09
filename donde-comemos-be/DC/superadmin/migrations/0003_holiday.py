# Generated by Django 2.2.2 on 2019-06-26 14:30

import basic_app.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('superadmin', '0002_service'),
    ]

    operations = [
        migrations.CreateModel(
            name='Holiday',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_dttm', models.DateTimeField(auto_now_add=True)),
                ('update_dttm', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')),
                ('name', basic_app.fields.BasicCharField('Nombre')),
                ('holiday_date', models.DateField(verbose_name='Fecha')),
                ('create_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='holiday_create_user', to=settings.AUTH_USER_MODEL, verbose_name='creador')),
                ('update_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='holiday_update_user', to=settings.AUTH_USER_MODEL, verbose_name='Actualizado por')),
            ],
            options={
                'verbose_name': 'feriado',
                'verbose_name_plural': 'feriados',
            },
        ),
    ]
