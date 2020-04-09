# Generated by Django 2.2.2 on 2019-08-21 14:24

import basic_app.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurants', '0038_auto_20190820_1134'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_dttm', models.DateTimeField(auto_now_add=True)),
                ('update_dttm', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')),
                ('phone_nbr', basic_app.fields.BasicCharField('Teléfono')),
                ('reservation_date', models.DateField(verbose_name='Fecha')),
                ('reservation_hour', models.TimeField(verbose_name='Horario de reserva')),
                ('cancelled', basic_app.fields.BasicBooleanField('Reserva Cancelada')),
                ('diners', models.PositiveSmallIntegerField(verbose_name='Cantidad de comenzales')),
                ('comments', basic_app.fields.BasicCharField('Comentarios', blank=True, null=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='cliente')),
                ('create_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reservation_create_user', to=settings.AUTH_USER_MODEL, verbose_name='creador')),
                ('restaurant', basic_app.fields.BasicForeignKey('Restaurant', 'Restaurant', to='restaurants.Restaurant')),
                ('update_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reservation_update_user', to=settings.AUTH_USER_MODEL, verbose_name='Actualizado por')),
            ],
            options={
                'verbose_name': 'reserva',
                'verbose_name_plural': 'reservas',
            },
        ),
    ]
