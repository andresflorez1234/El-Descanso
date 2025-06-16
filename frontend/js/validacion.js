// /js/validarFormulario.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.main-center'); // Selecciona tu formulario
    const btnConfirmar = document.getElementById('btnConfirmarReserva'); // Selecciona tu botón

    if (btnConfirmar && form) {
        btnConfirmar.addEventListener('click', function(event) {
            // Prevenir el envío por defecto para manejar la validación manualmente
            event.preventDefault();

            let allFieldsValid = true;

            // 1. Validar campos requeridos de los datos del huésped
            const guestInputs = form.querySelectorAll('#datos-huesped-heading ~ div.row.g-2 input[required]');
            guestInputs.forEach(input => {
                if (input.value.trim() === '') {
                    allFieldsValid = false;
                    input.classList.add('is-invalid'); // Añade clase de Bootstrap para indicar error
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            // 2. Validar el checkbox de condiciones
            const condicionesCheckbox = document.getElementById('condiciones');
            if (condicionesCheckbox && !condicionesCheckbox.checked) {
                allFieldsValid = false;
                condicionesCheckbox.classList.add('is-invalid'); // Podrías necesitar CSS extra para esto
            } else if (condicionesCheckbox) {
                condicionesCheckbox.classList.remove('is-invalid');
            }

            // 3. Validar campos requeridos de transferencia bancaria del cliente
            const bankTransferInputs = form.querySelectorAll('#datos-transferencia-cliente-heading ~ input[required]');
            bankTransferInputs.forEach(input => {
                if (input.value.trim() === '') {
                    allFieldsValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            // Si todos los campos son válidos, puedes proceder
            if (allFieldsValid) {
                alert('Formulario enviado con éxito!'); // O envía el formulario: form.submit();
                // Si quieres enviar el formulario real al servidor, descomenta la siguiente línea
                // form.submit();
            } else {
                alert('Por favor, rellena todos los campos obligatorios y acepta las condiciones.');
            }
        });
    }
});