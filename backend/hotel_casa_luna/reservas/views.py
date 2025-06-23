from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'reservas/home.html')

def habitaciones(request):
    return render(request, 'reservas/habitaciones.html')

def servicios(request):
    return render(request, 'reservas/servicios.html')

def galeria(request):
    return render(request, 'reservas/galeria.html')

def buscar(request):
    return render(request, 'reservas/buscar.html')

def seleccionar_habi(request):
    return render(request, 'reservas/selecc_habi.html')

def formulario(request):
    return render(request, 'reservas/formulario.html')