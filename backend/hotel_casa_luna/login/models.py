from django.db import models

# Create your models here.
#tabla de roles
class Roles(models.Model):
    id_roles = models.IntegerField(primary_key=True)
    rol = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'roles'  

#tabla de usuario
class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=100)
    correo = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=50)
    telefono = models.IntegerField(blank=True, null=True)
    cedula = models.IntegerField(blank=True, null=True)
    pais = models.CharField(max_length=50)
    cuidad = models.CharField(max_length=50)
    id_roles = models.ForeignKey(Roles, models.DO_NOTHING, db_column='id_roles')

    class Meta:
        managed = False
        db_table = 'usuario'

#tabla de habitaciones
class Habitaciones(models.Model):
    id_habitaciones = models.IntegerField(primary_key=True)
    tipo_habitaciones = models.CharField(max_length=50)
    precios = models.IntegerField()
    estado_habitacion = models.CharField(max_length=50, blank=True, null=True)
    num_e_habitaciones = models.IntegerField(blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'habitaciones'

#tabla de reservas
class Reservas(models.Model):
    id_reserva = models.AutoField(primary_key=True)
    fecha_entrada = models.DateField()
    fecha_salida = models.DateField()
    id_habitaciones = models.ForeignKey(Habitaciones, models.DO_NOTHING, db_column='id_habitaciones', blank=True, null=True)
    id_usuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='id_usuario')

    class Meta:
        managed = False
        db_table = 'reservas'

#tabla de factura
class Factura(models.Model):
    id_factura = models.IntegerField(primary_key=True)
    nombre_hospedaje = models.CharField(max_length=100, blank=True, null=True)
    id_reserva = models.ForeignKey('Reservas', models.DO_NOTHING, db_column='id_reserva', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'factura'



