{()=>{
        const Form=(()=>{
            const Form=document.querySelector('[data-form]');//accedemos al formulario
            const inputTask=document.querySelector('[data-input-task]');//recupero input  de tarea
            const inputDescription=document.querySelector('[data-input-description]');//descripcion
            const inputFecha=document.querySelector('[data-input-fecha]');//recuperamos la fecha
            const inputPriority=document.querySelector('[data-input-priority]');//prioridad

            const datosForm=()=>{
                return{
                    task: inputTask.value.trim(),
                    description: inputDescription.value.trim(),
                    date: inputFecha.value.trim(),
                    priority: inputPriority.value.trim()
                }
            };
        const reset=()=>{
            inputTask.value='';
            inputDescription.value='';
            inputFecha.value='';
            inputPriority.value='';
        }

        const setDatos=(callback)=>{
            form.addEventListener('submit',(evento)=>{
                evento.preventDefault();
                callback(datosForm());
                reset();
            });

        }
    return{setDatos,}
        })();

        const tabla=((task)=>{
            const cuerpotabla=document.querySelector('TaskTable').getElementsByClassName('tBody')[0];
            const addTask=(task)=>{
                const nuevaFila=cuerpotabla.insertRow();//creamos una nueva fila
            nuevaFila.insertCell(0).textContent=task.task;
            nuevaFila.insertCell(1).textContent=task.description;
            nuevaFila.insertCell(2).textContent=task.date;
            nuevaFila.insertCell(3).textContent=task.priority;
        //agregamos acciones
        const accionCell=nuevaFila.insertCell(4);
        const acciones=document.createElement('div');
        acciones.className='actions';

        //crear botones
        const completeButton=document.createElement('button');
        completeButton.textContent='Hecho';
        completeButton.className='  View';
        completeButton.addEventListener('click',()=>{
            nuevaFila.classList.toggle('completed');
            //pendiente actualizar las cards
        });
        acciones.appendChild(completeButton);
        
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Eliminar';
        deleteButton.className='Delete';
        deleteButton.addEventListener('click',()=>{
            cuerpotabla.deleteRow(nuevaFila.rowIndex-1);
            //pendiente actualizar las cards
        });
        acciones.appendChild(deleteButton);
            }
            


        })




}}