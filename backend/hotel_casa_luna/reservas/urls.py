from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home_'),
    path('habitaciones/', views.habitaciones, name='habitaciones_'),
    path('servicios/', views.servicios, name='servicios_'),
    path('galeria/', views.galeria, name='galeria_'),
    path('buscar/', views.buscar, name='buscar_'),
    path('seleccionar_habitacion/', views.seleccionar_habi, name='seleccionar_habi_'),
    path('formulario/', views.formulario, name='formulario_'),
    path("soporte/", views.soporte, name="soporte_"),
    path("terminos/", views.terminos, name="terminos_"),
]

