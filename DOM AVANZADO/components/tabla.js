import cards from "./cards.js";
const tabla = (()=>{
           const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0];

           const actualizarFila = (fila, task) => {
               fila.cells[0].textContent = task.task;
               fila.cells[1].textContent = task.description;
               fila.cells[2].textContent = task.date;
               fila.cells[3].textContent = task.priority;
               fila.cells[4].textContent = task.extra1;
               fila.cells[5].textContent = task.extra2;
               fila.cells[6].textContent = task.extra3;
           };

           const addTask = (task) => {
               const nuevaFila = cuerpoTabla.insertRow();//creamos una nueva fila
               nuevaFila.insertCell(0).textContent = task.task;
               nuevaFila.insertCell(1).textContent = task.description;
               nuevaFila.insertCell(2).textContent = task.date;
               nuevaFila.insertCell(3).textContent = task.priority;
               nuevaFila.insertCell(4).textContent = task.extra1;
               nuevaFila.insertCell(5).textContent = task.extra2;
               nuevaFila.insertCell(6).textContent = task.extra3;
               //agregar acciones
               const accionCell = nuevaFila.insertCell(7);
               const acciones = document.createElement('div');
               acciones.className='actions';

               //crear Botones
               const editButton = document.createElement('button');
               editButton.textContent='Editar';
               editButton.className='edit';
               editButton.addEventListener('click',()=>{
                  const taskActualizada = {
                    task: prompt('Editar nombre de la tarea', nuevaFila.cells[0].textContent) ?? nuevaFila.cells[0].textContent,
                    description: prompt('Editar descripción', nuevaFila.cells[1].textContent) ?? nuevaFila.cells[1].textContent,
                    date: prompt('Editar fecha', nuevaFila.cells[2].textContent) ?? nuevaFila.cells[2].textContent,
                    priority: prompt('Editar prioridad', nuevaFila.cells[3].textContent) ?? nuevaFila.cells[3].textContent,
                    extra1: prompt('Editar dato 1', nuevaFila.cells[4].textContent) ?? nuevaFila.cells[4].textContent,
                    extra2: prompt('Editar dato 2', nuevaFila.cells[5].textContent) ?? nuevaFila.cells[5].textContent,
                    extra3: prompt('Editar dato 3', nuevaFila.cells[6].textContent) ?? nuevaFila.cells[6].textContent,
                  };
                  actualizarFila(nuevaFila, taskActualizada);
                  cards.update();
               });
               acciones.appendChild(editButton);

               const completeButton = document.createElement('button');
               completeButton.textContent='Hecho';
               completeButton.className='view';
               completeButton.addEventListener('click',()=>{
                  nuevaFila.classList.toggle('completed');
                  cards.update();
               });
               acciones.appendChild(completeButton);

               const deleteButton = document.createElement('button');
               deleteButton.textContent='Eliminar';
               deleteButton.className = 'delete';
               deleteButton.addEventListener('click',()=>{
                   cuerpoTabla.deleteRow(nuevaFila.rowIndex-1);
                   cards.update(); 
               });
               acciones.appendChild(deleteButton);
               accionCell.appendChild(acciones);
           };
           const getTask = ()=>{
                return Array.from(cuerpoTabla.rows).map(row =>({
                    task:row.cells[0].textContent,
                    description: row.cells[1].textContent,
                    date:row.cells[2].textContent,
                    priority:row.cells[3].textContent,
                    extra1:row.cells[4].textContent,
                    extra2:row.cells[5].textContent,
                    extra3:row.cells[6].textContent,
                    completed:row.classList.contains('completed')
                }));
           };
           return{addTask,getTask}
       })();
       export default tabla;
