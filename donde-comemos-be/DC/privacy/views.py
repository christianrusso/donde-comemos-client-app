from django.shortcuts import render
from django.views.generic.base import TemplateView


class PrivacyPolicyView(TemplateView):
    template_name = "privacy.html"