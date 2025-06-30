// /js/header_user.js
document.addEventListener('DOMContentLoaded', function() {
    const userProfileTrigger = document.getElementById('userProfileTrigger');
    const userProfileModal = document.getElementById('userProfileModal');
    const logoutBtn = document.getElementById('logoutBtn');

    // Lógica para abrir el modal de perfil de usuario
    if (userProfileTrigger && userProfileModal) {
        userProfileTrigger.addEventListener('click', function() {
            userProfileModal.style.display = 'flex'; // Usamos flex para centrar
            document.body.style.overflow = 'hidden'; // Evita el scroll
        });

        // Lógica para cerrar el modal de perfil de usuario (si no la cubre modal.js)
        const closeButton = userProfileModal.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                userProfileModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        // Cerrar el modal al hacer clic fuera
        window.addEventListener('click', function(event) {
            if (event.target === userProfileModal) {
                userProfileModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Lógica para el botón de cerrar sesión
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Aquí iría la lógica para cerrar la sesión del usuario.
            // Esto generalmente implica:
            // 1. Enviar una petición a tu servidor para invalidar la sesión (si usas autenticación del lado del servidor).
            // 2. Eliminar tokens o datos de sesión del almacenamiento local (localStorage o sessionStorage).
            // 3. Redirigir al usuario a la página de inicio de sesión o a la página principal.

            // Ejemplo de redirección:
            // window.location.href = 'login.html'; // O la página de inicio de sesión
            // window.location.href = 'Home.html'; // O la página principal
        });
    }
});