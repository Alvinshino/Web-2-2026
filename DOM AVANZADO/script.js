(()=>{
    const Form = (() => {
        const form = document.querySelector('[data-form]');
        const inputTask = document.querySelector('[data-input-task]');
        const inputDescripcion = document.querySelector('[data-input-descripcion]');
        const inputFecha = document.querySelector('[data-input-fecha]');
        const inputPrioridad = document.querySelector('[data-input-prioridad]');

        const datosForms = () => {
            return {
                task: inputTask.value.trim(),
                description: inputDescripcion.value.trim(),
                date: inputFecha.value.trim(),
                priority: inputPrioridad.value.trim()
            };
        };

        const reset = () => {
            inputTask.value = '';
            inputDescripcion.value = '';
            inputFecha.value = '';
            inputPrioridad.value = '';
        };

        const setDatos = (callback) => {
            form.addEventListener('submit', (evento) => {
                evento.preventDefault();
                const datos = datosForms();
                callback(datos);
                reset();
            });
        };

        return {
            setDatos
        };
    })();

    const tabla = (() => {
        const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0];

        const addTask = (task) => {
            const nuevaFila = cuerpoTabla.insertRow();

            nuevaFila.insertCell(0).textContent = task.task;
            nuevaFila.insertCell(1).textContent = task.description;
            nuevaFila.insertCell(2).textContent = task.date;
            nuevaFila.insertCell(3).textContent = task.priority;

            const accionesCell = nuevaFila.insertCell(4);
            const acciones = document.createElement('div');
            acciones.className = 'actions';

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Hecho';
            completeButton.className = 'view';
            completeButton.addEventListener('click', () => {
                nuevaFila.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                cuerpoTabla.deleteRow(nuevaFila.rowIndex - 1);
            });

            acciones.appendChild(completeButton);
            acciones.appendChild(deleteButton);
            accionesCell.appendChild(acciones);
        };

        const getTask = () => {
            return Array.from(cuerpoTabla.rows).map(row => ({
                task: row.cells[0].textContent,
                description: row.cells[1].textContent,
                date: row.cells[2].textContent,
                priority: row.cells[3].textContent,
                completed: row.classList.contains('completed')
            }));
        };

        return {
            addTask,
            getTask
        };
    })();

    Form.setDatos((datos) => {
        tabla.addTask(datos);
    });

})();