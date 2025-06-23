from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('habitaciones/', views.habitaciones, name='habitaciones'),
    path('servicios/', views.servicios, name='servicios'),
    path('galeria/', views.galeria, name='galeria'),
    path('buscar/', views.buscar, name='buscar'),
    path('seleccionar_habitacion/', views.seleccionar_habi, name='seleccionar_habi'),
    path('formulario/', views.formulario, name='formulario')
]

