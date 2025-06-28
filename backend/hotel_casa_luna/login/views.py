from django.shortcuts import render

# Create your views here.
def home_principal(request):
    return render(request, 'login/home_principal.html')

def inicio(request):
    return render(render, 'login/inicio.html')

def registro(request):
    return render(render,'login/registro.html')

def validar(request):
    return render(render, 'login/validar.html')

def restaurar(request):
    return render(render, 'login/restaurar.html')
