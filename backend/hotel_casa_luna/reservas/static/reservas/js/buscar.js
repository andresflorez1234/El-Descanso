let contadorIDHabitaciones = 2;

function crearOpcionesEdad(seleccionada) {
    let opciones = '';
    for (let i = 0; i <= 17; i++) {
        const seleccion = i === seleccionada ? 'selected' : '';
        opciones += `<option value="${i}" ${seleccion}>${i} ${i === 1 ? 'año' : 'años'}</option>`;
    }
    return opciones;
}

function agregarHabitacion() {
    const contenedor = document.getElementById('habitaciones');
    const numeroVisible = contenedor.children.length + 1;
    const idHabitacion = `habitacion-${contadorIDHabitaciones}`;

    const div = document.createElement('div');
    div.className = 'row mb-2 align-items-center room-row';
    div.id = idHabitacion;
    div.innerHTML = `
            <div class="col-md-2 fw-semibold">Habitación ${numeroVisible}</div>
            <div class="col-md-4 d-flex align-items-center gap-2">
                Adultos
                <div class="counter-box">
                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(this, -1)">−</button>
                    <span>1</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(this, 1)">+</button>
                </div>
                </div>
            <div class="col-md-4 d-flex align-items-center gap-2">
                Niños
                <div class="counter-box">
                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(this, -1, true)">−</button>
                    <span>0</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(this, 1, true)">+</button>
                    <div class="w-100 mt-2" id="edades-${idHabitacion}" style="display: none;">
                        <small class="text-muted">Edades de los niños</small>
                        <div class="d-flex flex-wrap gap-2 mt-1"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-2 text-end">
                <a href="#" class="text-danger" onclick="eliminarHabitacion(event, '${idHabitacion}')">Eliminar</a>
            </div>`;
    contenedor.appendChild(div);
    actualizarSelectsEdades(idHabitacion, 0);
    contadorIDHabitaciones++;
}

function cambiarCantidad(boton, cambio, esNino = false) {
    const span = boton.parentElement.querySelector('span');
    let valor = parseInt(span.textContent);
    valor += cambio;

    // Límite mínimo
    if (valor < 0) {
        valor = 0;
    }

    // Límite máximo para adultos y niños
    const MAX_PERSONAS = 4; // Define tu límite máximo aquí

    if (valor > MAX_PERSONAS) {
        valor = MAX_PERSONAS;
    }

    span.textContent = valor;

    if (esNino) {
        const divPadre = boton.closest('.row');
        actualizarSelectsEdades(divPadre.id, valor);
    }
}

function actualizarSelectsEdades(idHabitacion, cantidad) {
    const seccionEdades = document.querySelector(`#edades-${idHabitacion}`);
    const contenedor = seccionEdades.querySelector('.d-flex');

    const selectsAnteriores = contenedor.querySelectorAll('select');
    const valoresAnteriores = Array.from(selectsAnteriores).map(sel => parseInt(sel.value));

    contenedor.innerHTML = '';

    if (cantidad === 0) {
        seccionEdades.style.display = 'none';
    } else {
        seccionEdades.style.display = 'block';
        for (let i = 0; i < cantidad; i++) {
            const edadSeleccionada = valoresAnteriores[i] !== undefined ? valoresAnteriores[i] : 0;
            const select = document.createElement('select');
            select.className = 'form-select form-select-sm';
            select.style.width = 'auto';
            select.innerHTML = crearOpcionesEdad(edadSeleccionada);
            contenedor.appendChild(select);
        }
    }
}

function eliminarHabitacion(event, id) {
    event.preventDefault();

    const div = document.getElementById(id);
    if (div) div.remove();

    const habitaciones = document.querySelectorAll('#habitaciones > .room-row');
    habitaciones.forEach((hab, index) => {
        const titulo = hab.querySelector('.fw-semibold');
        if (titulo) titulo.textContent = `Habitación ${index + 1}`;
    });
}

window.onload = function () {
    actualizarSelectsEdades('habitacion-1', 0);
};