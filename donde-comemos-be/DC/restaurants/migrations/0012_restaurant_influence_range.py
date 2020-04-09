# Generated by Django 2.2.2 on 2019-06-24 17:42

import basic_app.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0011_auto_20190621_1545'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='influence_range',
            field=basic_app.fields.BasicCharField('Zona de influencia', choices=[('Alberti', (('Alberti', 'Alberti'), ('Coronel Seguí', 'Coronel Seguí'), ('Mechita', 'Mechita'), ('Pla', 'Pla'), ('Villa Grisolía', 'Villa Grisolía'), ('Villa María', 'Villa María'), ('Villa Ortiz', 'Villa Ortiz'))), ('Almirante Brown', (('Almirante Brown', 'Almirante Brown'),)), ('Avellaneda', (('Avellaneda', 'Avellaneda'),))], default=None),
            preserve_default=False,
        ),
    ]
