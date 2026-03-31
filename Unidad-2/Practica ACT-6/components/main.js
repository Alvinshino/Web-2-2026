const app = document.getElementById('app');

function init() {
    const title = document.createElement('h1');
    title.innerText = "⚡ Registro de la Orden del Fénix";
    app.appendChild(title);

    const formContainer = document.createElement('div');
    formContainer.id = "formulario-magico";

    // Crear campos dinámicamente
    const campos = [
        { label: "Nombre del Mago:", id: "inp-nombre", type: "text" },
        { label: "Curso (Año):", id: "inp-curso", type: "number" },
        { label: "Edad:", id: "inp-edad", type: "number" }
    ];

    campos.forEach(c => {
        const group = document.createElement('div');
        group.className = "input-group";
        group.appendChild(Components.createLabel(c.label));
        const input = document.createElement('input');
        input.type = c.type;
        input.id = c.id;
        group.appendChild(input);
        formContainer.appendChild(group);
    });

    // Ciudad y Hermanos (Componentes especiales)
    const extraGroup = document.createElement('div');
    extraGroup.className = "input-group";
    extraGroup.appendChild(Components.createLabel("Ciudad de Nacimiento:"));
    extraGroup.appendChild(Components.createCityInput());
    extraGroup.appendChild(document.createElement('br'));
    extraGroup.appendChild(Components.createLabel("Cantidad de Hermanos:"));
    extraGroup.appendChild(Components.createSiblingsInput());
    formContainer.appendChild(extraGroup);

    // Botón Enviar
    const btnAdd = document.createElement('button');
    btnAdd.innerText = "✨ ¡Inscribirse! ✨";
    btnAdd.onclick = guardarMago;
    formContainer.appendChild(btnAdd);

    app.appendChild(formContainer);

    // Contenedor de resultados
    const lista = document.createElement('div');
    lista.id = "lista-estudiantes";
    const sub = document.createElement('h2');
    sub.innerText = "Estudiantes en el Gran Comedor";
    lista.appendChild(sub);
    app.appendChild(lista);
}

function guardarMago() {
    const datos = {
        nombre: document.getElementById('inp-nombre').value,
        curso: document.getElementById('inp-curso').value,
        edad: document.getElementById('inp-edad').value,
        ciudad: document.getElementById('inp-ciudad').value,
        hermanos: document.getElementById('inp-hermanos').value
    };

    renderMago(datos);
}

function renderMago(mago) {
    const lista = document.getElementById('lista-estudiantes');
    const card = document.createElement('div');
    card.className = "mago-card";
    
    // Función interna para actualizar el texto
    const updateCard = () => {
        card.innerHTML = `
            <strong>Nombre:</strong> ${mago.nombre} <br>
            <strong>Curso:</strong> ${mago.curso}º | <strong>Edad:</strong> ${mago.edad} <br>
            <strong>Ciudad:</strong> ${mago.ciudad} | <strong>Hermanos:</strong> ${mago.hermanos}
        `;
        
        // Botón Editar
        const btnEdit = document.createElement('button');
        btnEdit.innerText = "🪄 Encantamiento de Edición";
        btnEdit.onclick = () => {
            const nuevoNombre = prompt("Nuevo nombre (El Sombrero Seleccionador decide):", mago.nombre);
            if(nuevoNombre) {
                mago.nombre = nuevoNombre;
                updateCard();
            }
        };

        // Botón Eliminar
        const btnDel = document.createElement('button');
        btnDel.className = "btn-delete";
        btnDel.innerText = "❌ Avada Kedavra (Eliminar)";
        btnDel.onclick = () => card.remove();

        card.appendChild(btnEdit);
        card.appendChild(btnDel);
    };

    updateCard();
    lista.appendChild(card);
}

init();