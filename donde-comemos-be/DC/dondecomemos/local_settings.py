DB = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dondecomemos',#os.path.join(BASE_DIR, 'db.mysql'),
        'USER': 'guido',
        'PASSWORD': 'quilmes',
        'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
        'PORT': '3306'
    }
}

DEBUG_VALUE = True