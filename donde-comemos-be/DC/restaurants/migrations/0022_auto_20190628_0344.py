# Generated by Django 2.2.2 on 2019-06-28 03:44

import basic_app.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('restaurants', '0021_auto_20190628_0323'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='menu',
            name='price',
        ),
        migrations.CreateModel(
            name='MenuCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_dttm', models.DateTimeField(auto_now_add=True)),
                ('update_dttm', models.DateTimeField(auto_now=True, verbose_name='Fecha de actualización')),
                ('name', basic_app.fields.BasicCharField('Nombre')),
                ('price', basic_app.fields.BasicDecimalField()),
                ('create_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menucategory_create_user', to=settings.AUTH_USER_MODEL, verbose_name='creador')),
                ('restaurant', basic_app.fields.BasicForeignKey('Restaurant', 'Restaurant', to='restaurants.Restaurant')),
                ('update_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menucategory_update_user', to=settings.AUTH_USER_MODEL, verbose_name='Actualizado por')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='menu',
            name='category',
            field=basic_app.fields.BasicForeignKey('MenuCategory', 'Categoria', default=1, to='MenuCategory'),
            preserve_default=False,
        ),
    ]
