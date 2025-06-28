from django.urls import path
from . import views

urlpatterns = [
    path("", views.home_principal, name="home_principal"),
    path("inicio/", views.inicio, name="inicio" ),
    path("registro/", views.registro, name="registro"),
    path("validar/", views.validar, name="validar"),
    path("restaurar/", views.restaurar, name="restaurar"),
]

