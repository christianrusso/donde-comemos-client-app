# Generated by Django 2.2.2 on 2019-10-08 18:44

import basic_app.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('superadmin', '0008_auto_20190916_1054'),
        ('restaurants', '0046_reservationqualification'),
    ]

    operations = [
        migrations.CreateModel(
            name='Qualification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_dttm', models.DateTimeField(auto_now_add=True)),
                ('update_dttm', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')),
                ('related_id', models.IntegerField(verbose_name='id tipo')),
                ('related_type', basic_app.fields.BasicCharField('tipo')),
                ('score', models.PositiveSmallIntegerField(verbose_name='puntaje')),
                ('create_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='qualification_create_user', to=settings.AUTH_USER_MODEL, verbose_name='creador')),
                ('score_category', basic_app.fields.BasicForeignKey('superadmin.ScoreCategory', 'Categoria', to='superadmin.ScoreCategory')),
                ('update_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='qualification_update_user', to=settings.AUTH_USER_MODEL, verbose_name='Actualizado por')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RemoveField(
            model_name='reservationqualification',
            name='create_user',
        ),
        migrations.RemoveField(
            model_name='reservationqualification',
            name='reservation',
        ),
        migrations.RemoveField(
            model_name='reservationqualification',
            name='score_category',
        ),
        migrations.RemoveField(
            model_name='reservationqualification',
            name='update_user',
        ),
        migrations.DeleteModel(
            name='OrderQualification',
        ),
        migrations.DeleteModel(
            name='ReservationQualification',
        ),
    ]
