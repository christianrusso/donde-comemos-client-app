# Generated by Django 2.2.2 on 2019-12-15 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0060_auto_20191213_1414'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Descripción'),
        ),
        migrations.AlterField(
            model_name='menucategory',
            name='price',
            field=models.IntegerField(verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='order',
            name='_price',
            field=models.IntegerField(verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='order',
            name='comments',
            field=models.TextField(blank=True, null=True, verbose_name='Comentarios'),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_hour',
            field=models.TimeField(null=True, verbose_name='Horario'),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='Descripción'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='productcategoryadditional',
            name='price',
            field=models.IntegerField(verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='reservation',
            name='comments',
            field=models.TextField(blank=True, null=True, verbose_name='Comentarios'),
        ),
        migrations.AlterField(
            model_name='reservation',
            name='motive',
            field=models.TextField(blank=True, null=True, verbose_name='Motivo de reserva'),
        ),
        migrations.AlterField(
            model_name='restaurantdiscount',
            name='amount',
            field=models.IntegerField(default=0, verbose_name='% de descuento'),
        ),
    ]
