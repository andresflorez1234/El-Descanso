# Create your views here.
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(render, 'administrador/home.html')

def galeria(request):
    return render(render, 'administrador/galeria.html')

def perfil(request):
    return render(render, 'administrador/perfil.html')

def ver_habitacion(request):
    return render(render, 'administrador/ver_habitacion.html')

def habitaciones(request):
    return render(render, 'administrador/habitaciones.html')

def modificar(request):
    return render(render, 'adminostrador/modificar.html')

def actualizar_datos(request):
    return render(render, 'administrador/actualizar_datos.html')

def confirmacion(request):
    return render(render, 'administrador/confirmacion.html')

def historial(request):
    return render(render, 'administrador/historial.html')

def soporte(request):
    return render(render, 'administrador/soporte.html')

def terminos(request):
    return  render(render, 'administrador/terminos.html')