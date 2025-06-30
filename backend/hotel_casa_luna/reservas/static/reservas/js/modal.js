document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones que abren modales
    var modalTriggers = document.querySelectorAll('.modal-trigger');

    // Obtener todos los botones de cerrar
    var closeButtons = document.querySelectorAll('.close-button');

    // Función para abrir un modal
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex'; // Usamos flex para centrar
            document.body.style.overflow = 'hidden'; // Evita el scroll en el cuerpo cuando el modal está abierto
        }
    }

    // Función para cerrar un modal
    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura el scroll del cuerpo
        }
    }

    // Asignar eventos a los botones que abren modales
    modalTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace (cambiar de página)
            var modalId = this.getAttribute('href').substring(1); // Obtiene el ID del modal desde el href
            openModal(modalId);
        });
    });

    // Asignar eventos a los botones de cerrar
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modal = this.closest('.modal'); // Encuentra el modal padre del botón
            closeModal(modal);
        });
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        modalTriggers.forEach(function(trigger) {
            var modalId = trigger.getAttribute('href').substring(1);
            var modal = document.getElementById(modalId);
            if (modal && event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Cerrar el modal al presionar la tecla 'Escape'
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(function(modal) {
                if (modal.style.display === 'flex') {
                    closeModal(modal);
                }
            });
        }
    });
});