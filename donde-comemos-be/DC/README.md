# Donde Comemos? [BE] (Django)
[![coverage report](https://gitlab.com/gaiacoop/donde-comemos-be/badges/master/coverage.svg)](https://gitlab.com/gaiacoop/donde-comemos-be/commits/master)
### Prerequisitos

```
sudo apt-get update
sudo apt-get install python3.7
apt-get install -y python3-pip
pip install -r requirements-dev.txt
``` 

**Nota**: puede que tengas instalado *pip3* en vez de *pip*
    
### Corriendo el proyecto

Para levantar nuestro backend necesitaremos crear una instancia de virtualenv, esto lo haremos de la siguiente forma:

```
cd Desktop
virtualenv --python=/usr/bin/python3.7 ve-donde-comemos-be
```

**Nota**: aqui usamos *python3.7* pero con cualquier otra versión 3.* deberia funcionar igual.

Una vez creado el virtualenv con la versión de python que estipulamos usar en dicho lugar deberemos clonar o copiar dentro nuestro proyecto. 

Entramos y activamos el ambiente:

```
cd ve-donde-comemos-be/
source bin/activate
```

Deberiamos ver algo como esto:

![](https://i.imgur.com/Y09mCIZ.png)

### Pasos finales 

Antes de poder correr nuestro proyecto debemos crear una database en MySQL llamada ***dondecomemos***.

Y configurar las configuraciones locales propias de tus credenciales personales de MySQL. Para esto tenemos que crear un archivo al que llamaremos ***local_settings.py*** que dentro tendra lo siguiente:

```
DB = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dondecomemos', #os.path.join(BASE_DIR, 'db.mysql'),
        'USER': 'MYSQL_USER',
        'PASSWORD': 'MYSQL_PASSWORD',
        'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
        'PORT': '3306'
    }
}

DEBUG_VALUE = True
```

**Nota:** Completar USER y PASSWORD con tus datos reales.

Una vez seteado esto debemos correr las migraciones correspondientes dentro de la carpeta del proyecto con el siguiente comando:

```
cd donde-comemos-be
python manage.py migrate
```

**Nota:** En caso de tirarnos algun error como este que le tiro a Guidito...

![](https://i.imgur.com/tM8Uvyl.png)

Basta con instalar la libreria **libmysqlclient-dev** o en su defecto **libmariadbclient-dev**.

Por último, si las migraciones se completaron satisfactoriamente podremos (ahora si!) levantar nuestro servidor con el comando:

```
python manage.py runserver
```