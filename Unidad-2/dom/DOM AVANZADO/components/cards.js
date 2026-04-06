import tabla from "./tabla.js";
const cards = (()=>{
           const taskCards = document.getElementById('taskCards');
           const update =()=>{
              const tasks = tabla.getTask();
              taskCards.innerHTML = '';

              tasks.forEach(task => {
                    const card = document.createElement('div');
                    card.className = 'taskCard';
                    if (task.completed) {
                      card.classList.add('taskCardCompleted');
                    }
                    card.innerHTML = ` 
                    <p><strong>Nombre:</strong> ${task.task}</p>
                    <p><strong>Descripcion:</strong> ${task.description}</p>
                    <p><strong>Fecha:</strong> ${task.date}</p>
                    <p><strong>Prioridad:</strong> ${task.priority}</p>
                    <p><strong>Dato 1:</strong> ${task.extra1}</p>
                    <p><strong>Dato 2:</strong> ${task.extra2}</p>
                    <p><strong>Dato 3:</strong> ${task.extra3}</p>
                    <p><strong>Estado:</strong> ${task.completed ? 'Completada' : 'Pendiente'}</p>
                `;
                taskCards.appendChild(card)
              });
           };
           return {update,}
       })();
       export default cards;
