import Form from "./components/formulario.js";
import tabla from "./components/tabla.js";
import cards from "./components/cards.js";

(async () => {
  await tabla.loadTasks();
  cards.update();

  Form.setDatos(async (task) => {
    await tabla.addTask(task);
    cards.update();
  });
})();
