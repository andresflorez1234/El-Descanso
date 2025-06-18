// /js/validarYGenerarComprobante.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.main-center');
    const btnConfirmar = document.getElementById('btnConfirmarReserva');

    if (btnConfirmar && form) {
        btnConfirmar.addEventListener('click', function (event) {
            event.preventDefault();

            let allFieldsValid = true;

            // Validar campos requeridos manualmente
            const campos = [
                "nombre", "apellidos", "cedula", "email", "direccion",
                "telefono", "ciudad", "pais"
            ];

            campos.forEach(id => {
                const input = document.getElementById(id);
                if (input.value.trim() === '') {
                    allFieldsValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            // Validar aceptación de condiciones
            const condicionesCheckbox = document.getElementById('condiciones');
            if (!condicionesCheckbox.checked) {
                allFieldsValid = false;
                condicionesCheckbox.classList.add('is-invalid');
            } else {
                condicionesCheckbox.classList.remove('is-invalid');
            }

            // Si no es válido, detener
            if (!allFieldsValid) {
                alert('Por favor, completa todos los campos obligatorios y acepta las condiciones.');
                return;
            }

            // Si es válido, generar el comprobante
            const nombre = document.getElementById("nombre").value.trim();
            const apellidos = document.getElementById("apellidos").value.trim();
            const cedula = document.getElementById("cedula").value.trim();
            const email = document.getElementById("email").value.trim();
            const direccion = document.getElementById("direccion").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const ciudad = document.getElementById("ciudad").value.trim();
            const pais = document.getElementById("pais").value.trim();
            const peticion = document.getElementById("peticion-area").value.trim();

            // Insertar valores en el comprobante
            document.getElementById("comp-nombre").innerText = nombre;
            document.getElementById("comp-apellidos").innerText = apellidos;
            document.getElementById("comp-cedula").innerText = cedula;
            document.getElementById("comp-email").innerText = email;
            document.getElementById("comp-direccion").innerText = direccion;
            document.getElementById("comp-telefono").innerText = telefono;
            document.getElementById("comp-ciudad").innerText = ciudad;
            document.getElementById("comp-pais").innerText = pais;
            document.getElementById("comp-peticion").innerText = peticion;

            // Fecha actual
            const hoy = new Date();
            const fecha = hoy.toLocaleDateString('es-CO', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.getElementById("comp-fecha").innerText = fecha;

            // Habitación y precio desde localStorage
            const habitacion = localStorage.getItem("tipoHabitacion") || "No seleccionada";
            const precio = localStorage.getItem("precioHabitacion") || "0";
            document.getElementById("comp-habitacion").innerText = habitacion;
            document.getElementById("comp-total").innerText = `COP ${precio}`;
            alert("¡Tu reserva ha sido completada con éxito! A continuación verás tu comprobante.");


            // Mostrar el comprobante
            document.getElementById("comprobanteReserva").style.display = "block";
            document.getElementById("comprobanteReserva").scrollIntoView({ behavior: "smooth" });
        });

        // Al cargar la página, actualizar el resumen de la reserva
        const tipo = localStorage.getItem("tipoHabitacion") || "Habitación no seleccionada";
        const precio = localStorage.getItem("precioHabitacion") || "0";
        document.getElementById("resumen-detalle").innerText = `1 ${tipo.toLowerCase()}, 2 adultos`;
        document.getElementById("resumen-precio").innerText = `COP ${precio}`;
    }
});
