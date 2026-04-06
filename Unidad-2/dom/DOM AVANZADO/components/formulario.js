const Form = (()=>{
      const form = document.querySelector('[data-form]');// accedemos al formulario
      const inputTask = document.querySelector('[data-input-task]');// recupero input nombre de tarea
      const inputDescription = document.querySelector('[data-input-descripcion]');//inport descripcion
      const inputFecha = document.querySelector('[data-input-fecha]');//inportacion fecha
      const inputPrioridad = document.querySelector('[data-input-prioridad]');//inport prioridad
      const inputExtra1 = document.querySelector('[data-input-extra-1]');
      const inputExtra2 = document.querySelector('[data-input-extra-2]');
      const inputExtra3 = document.querySelector('[data-input-extra-3]');

      const datosForm = () =>{
        return{
                task: inputTask.value.trim(),
                description: inputDescription.value.trim(),
                date: inputFecha.value.trim(),
                priority: inputPrioridad.value.trim(),
                extra1: inputExtra1.value.trim(),
                extra2: inputExtra2.value.trim(),
                extra3: inputExtra3.value.trim()
        };
      };
      const reset =()=>{
        inputTask.value="";
        inputDescription.value="";
        inputFecha.value="";
        inputPrioridad.value="";
        inputExtra1.value="";
        inputExtra2.value="";
        inputExtra3.value="";
      }
      const setDatos = (callback)=>{
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            callback(datosForm());
            reset();
        });
      };
      return{setDatos,}
       })();
       export default Form;
