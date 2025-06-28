// Obtener referencias a los elementos del DOM del componente integrado (NUEVA ESTRUCTURA)
const guestDropdownBtn = document.getElementById('guestDropdownBtn'); // Botón principal para abrir/cerrar el desplegable
const dropdownContent = document.getElementById('dropdownContent'); // Contenedor del contenido desplegable
const guestSummary = document.getElementById('guestSummary'); // Texto que resume la selección actual
const roomsInput = document.getElementById('rooms'); // Campo de número de habitaciones
const adultsInput = document.getElementById('adults'); // Campo de número de adultos
const childrenInput = document.getElementById('childrenInput'); // Campo de número de niños (ID actualizado)
const childAgesContainer = document.getElementById('childAgesContainer'); // Contenedor para los inputs de edades de los niños
const useCombinationBtn = document.getElementById('useCombinationBtn'); // Botón "Usa esta combinación"

// Almacenar las edades de los niños para persistencia
let childAges = []; // Arreglo para guardar las edades de los niños

// Función para alternar la visibilidad del desplegable
function toggleDropdown() {
    dropdownContent.classList.toggle('show'); // Agrega o quita la clase 'show' al contenedor desplegable
}

// Listener de eventos para el botón principal del desplegable
guestDropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Evitar que el clic se propague al documento y cierre el dropdown
    toggleDropdown(); // Llamar a la función para abrir/cerrar el menú desplegable
});

// Listener de eventos para el botón "USA ESTA COMBINACIÓN"
useCombinationBtn.addEventListener('click', function () {
    toggleDropdown(); // Cerrar el desplegable
    updateGuestSummary(); // Actualizar el resumen de huéspedes
});

// Función para actualizar el texto del resumen en el botón principal
function updateGuestSummary() {
    const rooms = parseInt(roomsInput.value); // Convertir el valor de habitaciones a número
    const adults = parseInt(adultsInput.value); // Convertir el valor de adultos a número
    const children = parseInt(childrenInput.value); // Convertir el valor de niños a número

    // Generar texto usando template literals
    let summaryHtml = `${rooms} habitación${rooms > 1 ? 'es' : ''} para ${adults} adulto${adults > 1 ? 's' : ''}`;
    if (children > 0) {
        summaryHtml += ` y ${children} niño${children > 1 ? 's' : ''}`; // Agregar niños si hay
    }
    guestSummary.innerHTML = summaryHtml; // Establecer el resumen generado en el DOM
}

// Función para añadir/eliminar dinámicamente campos de entrada de edad de niños
function updateChildAgeInputs() {
    const currentChildren = parseInt(childrenInput.value); // Número actual de niños

    // Guardar las edades actuales antes de limpiar el contenedor
    const existingChildInputs = childAgesContainer.querySelectorAll('input.child-age-input'); // Buscar inputs actuales
    const tempChildAges = Array.from(existingChildInputs).map(input => parseInt(input.value) || 0); // Guardar valores existentes

    childAgesContainer.innerHTML = ''; // Limpiar inputs existentes

    if (currentChildren > 0) { // Solo añadir encabezado si hay niños
        const headingRow = document.createElement('div');
        headingRow.classList.add('row', 'align-items-center', 'mb-2');
        headingRow.style.paddingTop = '10px';

        const heading = document.createElement('span');
        heading.classList.add('label', 'col-12', 'mb-2', 'fw-bold');
        heading.textContent = 'Edades de los Niños:';
        headingRow.appendChild(heading);
        childAgesContainer.appendChild(headingRow);
    }

    for (let i = 0; i < currentChildren; i++) {
        const childAgeRow = document.createElement('div');
        childAgeRow.classList.add('row', 'align-items-center', 'mb-2');
        childAgeRow.style.borderTop = '1px solid #eee';
        childAgeRow.style.paddingTop = '10px';

        const label = document.createElement('span');
        label.classList.add('label', 'col-5');
        label.textContent = `Edad del niño ${i + 1}`;
        childAgeRow.appendChild(label);

        const counterDiv = document.createElement('div');
        counterDiv.classList.add('counter', 'col-7', 'd-flex', 'align-items-center', 'justify-content-end');

        const decreaseBtn = document.createElement('button');
        decreaseBtn.type = 'button';
        decreaseBtn.classList.add('btn', 'btn-sm', 'rounded-pill', 'px-2');
        decreaseBtn.textContent = '-';
        decreaseBtn.style.backgroundColor = '#f0f0f0';
        decreaseBtn.style.color = '#555';
        decreaseBtn.dataset.index = i;
        decreaseBtn.dataset.action = 'decreaseChildAge'; // Acción personalizada
        counterDiv.appendChild(decreaseBtn);

        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('form-control', 'form-control-sm', 'child-age-input');
        input.value = tempChildAges.length > i ? tempChildAges[i] : 0;
        input.min = '0';
        input.max = '17';
        input.dataset.index = i;
        input.style.width = '40px';
        input.style.textAlign = 'center';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '3px';
        input.addEventListener('change', (e) => {
            childAges[i] = parseInt(e.target.value); // Actualizar array cuando se cambia manualmente
        });
        counterDiv.appendChild(input);

        const increaseBtn = document.createElement('button');
        increaseBtn.type = 'button';
        increaseBtn.classList.add('btn', 'btn-sm', 'rounded-pill', 'px-2');
        increaseBtn.textContent = '+';
        increaseBtn.style.backgroundColor = '#f0f0f0';
        increaseBtn.style.color = '#555';
        increaseBtn.dataset.index = i;
        increaseBtn.dataset.action = 'increaseChildAge'; // Acción personalizada
        counterDiv.appendChild(increaseBtn);

        childAgeRow.appendChild(counterDiv);
        childAgesContainer.appendChild(childAgeRow); // Agregar fila al contenedor
    }

    // Actualizar el array con los nuevos valores de edad
    childAges = Array.from(childAgesContainer.querySelectorAll('input.child-age-input')).map(input => parseInt(input.value) || 0);
}

// Event listeners para los botones de incremento y decremento
dropdownContent.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn') && e.target.dataset.action) {
        const action = e.target.dataset.action; // Acción a ejecutar
        const target = e.target.dataset.target; // A qué campo se refiere
        const index = e.target.dataset.index; // Índice para inputs de edad de niño
        let inputField;

        if (target === 'rooms') {
            inputField = roomsInput;
        } else if (target === 'adults') {
            inputField = adultsInput;
        } else if (target === 'children') {
            inputField = childrenInput;
        } else if (action === 'decreaseChildAge' || action === 'increaseChildAge') {
            const childAgeInput = childAgesContainer.querySelector(`input.child-age-input[data-index="${index}"]`);
            if (childAgeInput) {
                let currentValue = parseInt(childAgeInput.value);
                if (action === 'increaseChildAge' && currentValue < 17) {
                    childAgeInput.value = currentValue + 1;
                } else if (action === 'decreaseChildAge' && currentValue > 0) {
                    childAgeInput.value = currentValue - 1;
                }
                childAges[index] = parseInt(childAgeInput.value); // Guardar valor actualizado
            }
            return; // No continuar con updateGuestSummary para edades de niño
        }

        if (inputField) {
            let currentValue = parseInt(inputField.value);
            let maxLimit = 4;

            if (action === 'increase' && currentValue < maxLimit) {
                inputField.value = currentValue + 1;
            } else if (action === 'decrease' && currentValue > parseInt(inputField.min)) {
                inputField.value = currentValue - 1;
            }

            if (target === 'children') {
                updateChildAgeInputs(); // Si se modifica número de niños, actualizar inputs
            }
        }
    }
});

// Inicializar los campos de edad de los niños si hay algún niño al cargar la página
updateChildAgeInputs(); // Crear campos si es necesario
updateGuestSummary(); // Mostrar resumen al cargar

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function (e) {
    if (!dropdownContent.contains(e.target) && !guestDropdownBtn.contains(e.target)) {
        dropdownContent.classList.remove('show'); // Cerrar el desplegable
    }
});
