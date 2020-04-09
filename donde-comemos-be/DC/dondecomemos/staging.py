from django.utils.safestring import mark_safe
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from .settings import INSTALLED_APPS

SECRET_KEY = os.environ['SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1', 'staging.dondecomemos.com.ar']

ADMINS = [('GAIA', os.environ['EMAIL_HOST_USER'])]
SERVER_EMAIL = 'fault@dondecomemos.com.ar'

INSTALLED_APPS = INSTALLED_APPS + ['storages']

FCM_DJANGO_SETTINGS = {
    "FCM_SERVER_KEY": os.environ['FCM_SERVER_KEY']
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'dondecomemos.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dondecomemos.wsgi.application'

if 'RDS_HOSTNAME' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.environ['RDS_DB_NAME'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOSTNAME'],
            'PORT': os.environ['RDS_PORT'],
        }
    }


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

MEDIA_ROOT = 'uploads'
MEDIA_URL = '/uploads/'

AWS_S3_SIGNATURE_VERSION = 's3v4'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = "/static/"
  
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = os.environ['AWS_STORAGE_BUCKET_NAME']

AWS_S3_CUSTOM_DOMAIN = '{0}.s3.amazonaws.com'.format(AWS_STORAGE_BUCKET_NAME)

AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}

STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATIC_URL = "https://{0}/".format(AWS_S3_CUSTOM_DOMAIN)


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'es-ar'

TIME_ZONE = 'America/Argentina/Cordoba'

USE_I18N = True

USE_L10N = True

USE_TZ = True


AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend', # this is default
    'guardian.backends.ObjectPermissionBackend',
)

MATERIAL_ADMIN_SITE = {
    'HEADER':   mark_safe('<img height="35" style="margin-left: -30px;" width="40" src="{STATIC_URL}admin/img/icon.png"> donde comemos | Panel de Administración'.format(STATIC_URL=STATIC_URL)),
    'TITLE':  "donde comemos",
    'FAVICON':  "admin/img/icon.png",
    'MAIN_BG_COLOR':  "#333333",
    # 'MAIN_HOVER_COLOR':  "#fd9500",
    'MAIN_HOVER_COLOR':  "#ff7800",
    'PROFILE_PICTURE':  "admin/img/icon.png",
    'PROFILE_BG':  "admin/img/bg.png",
    'LOGIN_LOGO':  "admin/img/icon.png",
    'LOGOUT_BG':  "admin/img/bg.png",
    'SHOW_THEMES': False,
    'TRAY_REVERSE': True,
    'APP_ICONS': {
        'auth': 'group',
        'sites': 'web'
    },
    'MODEL_ICONS': {
        'user': 'person',
        'group': 'people',
        'site': 'web',
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    )
}

CORS_ORIGIN_ALLOW_ALL = True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ['EMAIL_HOST']
EMAIL_PORT = os.environ['EMAIL_PORT']
EMAIL_HOST_USER = os.environ['EMAIL_HOST_USER']
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']
EMAIL_USE_TLS = True

#SECURE_SSL_REDIRECT = True
#SESSION_COOKIE_SECURE = True
#CSRF_COOKIE_SECURE = True
#SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')