from basic_app.serializers import AbstractSerializer
from superadmin.models import ScoreCategoryItem, ScoreCategory, ReservationMotive


class ScoreCategorySerializer(AbstractSerializer):

    class Meta:
        model = ScoreCategory
        fields = ('id', 'name')

class ScoreCategoryItemSerializer(AbstractSerializer):
    category = ScoreCategorySerializer(many=False)

    class Meta:
        model = ScoreCategoryItem
        fields = ('id', 'category', 'item')

class ReservationMotiveSerializer(AbstractSerializer):

    class Meta:
        model = ReservationMotive
        fields = ('id', 'name')
