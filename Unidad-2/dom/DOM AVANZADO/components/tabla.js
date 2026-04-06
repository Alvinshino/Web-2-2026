import cards from "./cards.js";

const tabla = (() => {
  const cuerpoTabla = document.getElementById("taskTable").getElementsByTagName("tbody")[0];
  const API_URL = "http://localhost:3001/tasks";

  const limpiarTabla = () => {
    cuerpoTabla.innerHTML = "";
  };

  const actualizarFila = (fila, task) => {
    fila.cells[0].textContent = task.task;
    fila.cells[1].textContent = task.description;
    fila.cells[2].textContent = task.date;
    fila.cells[3].textContent = task.priority;
    fila.cells[4].textContent = task.extra1;
    fila.cells[5].textContent = task.extra2;
    fila.cells[6].textContent = task.extra3;
    fila.dataset.completed = String(!!task.completed);

    if (task.completed) {
      fila.classList.add("completed");
    } else {
      fila.classList.remove("completed");
    }
  };

  const crearAcciones = (nuevaFila) => {
    const accionCell = nuevaFila.insertCell(7);
    const acciones = document.createElement("div");
    acciones.className = "actions";

    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.className = "edit";
    editButton.addEventListener("click", async () => {
      const taskActualizada = {
        task: prompt("Editar nombre de la tarea", nuevaFila.cells[0].textContent) ?? nuevaFila.cells[0].textContent,
        description: prompt("Editar descripción", nuevaFila.cells[1].textContent) ?? nuevaFila.cells[1].textContent,
        date: prompt("Editar fecha", nuevaFila.cells[2].textContent) ?? nuevaFila.cells[2].textContent,
        priority: prompt("Editar prioridad", nuevaFila.cells[3].textContent) ?? nuevaFila.cells[3].textContent,
        extra1: prompt("Editar dato 1", nuevaFila.cells[4].textContent) ?? nuevaFila.cells[4].textContent,
        extra2: prompt("Editar dato 2", nuevaFila.cells[5].textContent) ?? nuevaFila.cells[5].textContent,
        extra3: prompt("Editar dato 3", nuevaFila.cells[6].textContent) ?? nuevaFila.cells[6].textContent,
        completed: nuevaFila.dataset.completed === "true",
      };

      const response = await fetch(`${API_URL}/${nuevaFila.dataset.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskActualizada),
      });

      if (!response.ok) {
        alert("No se pudo editar la tarea en el API.");
        return;
      }

      const tareaGuardada = await response.json();
      actualizarFila(nuevaFila, tareaGuardada);
      cards.update();
    });
    acciones.appendChild(editButton);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Hecho";
    completeButton.className = "view";
    completeButton.addEventListener("click", async () => {
      const nuevoEstado = !(nuevaFila.dataset.completed === "true");

      const response = await fetch(`${API_URL}/${nuevaFila.dataset.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: nuevoEstado }),
      });

      if (!response.ok) {
        alert("No se pudo actualizar el estado en el API.");
        return;
      }

      const tareaActualizada = await response.json();
      actualizarFila(nuevaFila, tareaActualizada);
      cards.update();
    });
    acciones.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", async () => {
      const response = await fetch(`${API_URL}/${nuevaFila.dataset.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("No se pudo eliminar la tarea del API.");
        return;
      }

      cuerpoTabla.deleteRow(nuevaFila.rowIndex - 1);
      cards.update();
    });
    acciones.appendChild(deleteButton);

    accionCell.appendChild(acciones);
  };

  const renderTask = (task) => {
    const nuevaFila = cuerpoTabla.insertRow();
    nuevaFila.dataset.id = task.id;

    nuevaFila.insertCell(0).textContent = task.task;
    nuevaFila.insertCell(1).textContent = task.description;
    nuevaFila.insertCell(2).textContent = task.date;
    nuevaFila.insertCell(3).textContent = task.priority;
    nuevaFila.insertCell(4).textContent = task.extra1;
    nuevaFila.insertCell(5).textContent = task.extra2;
    nuevaFila.insertCell(6).textContent = task.extra3;

    nuevaFila.dataset.completed = String(!!task.completed);
    if (task.completed) {
      nuevaFila.classList.add("completed");
    }

    crearAcciones(nuevaFila);
  };

  const addTask = async (task) => {
    const nuevaTask = {
      ...task,
      completed: false,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaTask),
    });

    if (!response.ok) {
      alert("No se pudo guardar la tarea en el API.");
      return;
    }

    const tareaGuardada = await response.json();
    renderTask(tareaGuardada);
  };

  const loadTasks = async () => {
    limpiarTabla();

    const response = await fetch(API_URL);
    if (!response.ok) {
      alert("No se pudieron cargar las tareas desde el API.");
      return;
    }

    const tasks = await response.json();
    tasks.forEach((task) => renderTask(task));
  };

  const getTask = () => {
    return Array.from(cuerpoTabla.rows).map((row) => ({
      id: row.dataset.id,
      task: row.cells[0].textContent,
      description: row.cells[1].textContent,
      date: row.cells[2].textContent,
      priority: row.cells[3].textContent,
      extra1: row.cells[4].textContent,
      extra2: row.cells[5].textContent,
      extra3: row.cells[6].textContent,
      completed: row.dataset.completed === "true",
    }));
  };

  return { addTask, getTask, loadTasks };
})();

export default tabla;
