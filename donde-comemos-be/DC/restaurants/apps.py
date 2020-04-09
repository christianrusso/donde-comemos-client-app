from django.apps import AppConfig


class RestaurantsConfig(AppConfig):
	name = 'restaurants'
	verbose_name = 'Gestión del Restaurant'
	icon_name = 'restaurant'

	#def ready(self):
		#from .signals import save_product
