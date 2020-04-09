from django.db import migrations
from django.contrib.auth.admin import User

def forwards_func(apps, schema_editor):
    superuser = User()
    superuser.is_active = True
    superuser.is_superuser = True
    superuser.is_staff = True
    superuser.username = 'admin'
    superuser.set_password('admin')
    superuser.save()

def reverse_func(apps, schema_editor):
    db_alias = schema_editor.connection.alias
    User.objects.using(db_alias).filter(username='admin').delete()

class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0026_restaurantpaymentmethod'),
    ]

    operations = [
    	migrations.RunPython(forwards_func, reverse_func)
    ]