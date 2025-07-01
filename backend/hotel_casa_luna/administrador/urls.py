from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("actualizar/", views.actualizar_datos, name="actualizar_datos"),
    path("galeria/", views.galeria, name="galeria"),
    path("habitaciones/", views.habitaciones, name="habitaciones"),
    path("modificar/", views.modificar, name="modificar"),
    path("perfil/", views.perfil, name="perfil"),
    path("ver_habitacion/", views.ver_habitacion, name="ver_habitacion"),
    path("confirmacion/", views.confirmacion, name="confirmacion"),
    path("historial/", views.historial, name="historial"),
    path("soporte/", views.soporte, name="soporte"),
    path("terminos/", views.terminos, name="terminos"),
]