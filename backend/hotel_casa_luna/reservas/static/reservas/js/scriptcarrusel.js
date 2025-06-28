document.addEventListener('DOMContentLoaded', function() {
    // Lógica del carrusel de fondo
    const images = document.querySelectorAll('.imagen-carrusel');
    let currentImageIndex = 0;

    function showNextImage() {
        if (images.length === 0) return; // Asegúrate de que haya imágenes

        // Oculta la imagen actual (si hay alguna visible)
        if (images[currentImageIndex]) {
            images[currentImageIndex].classList.remove('visible');
        }

        // Avanza al siguiente índice
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Muestra la siguiente imagen
        if (images[currentImageIndex]) {
            images[currentImageIndex].classList.add('visible');
        }
    }

    // Mostrar la primera imagen al cargar
    if (images.length > 0) {
        images[0].classList.add('visible');
    }

    // Cambiar imagen cada 5 segundos
    setInterval(showNextImage, 5000); // 5000 milisegundos = 5 segundos
});