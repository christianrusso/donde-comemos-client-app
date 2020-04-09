from basic_app.views import AbstractViewSet
from superadmin.models import ScoreCategoryItem, ReservationMotive
from superadmin.serializers import ScoreCategoryItemSerializer, ReservationMotiveSerializer


class ScoreCategoryItemViewSet(AbstractViewSet):
    serializer_class = ScoreCategoryItemSerializer
    queryset = ScoreCategoryItem.objects.all()


class ReservationMotiveViewSet(AbstractViewSet):
    serializer_class = ReservationMotiveSerializer
    queryset = ReservationMotive.objects.all()
