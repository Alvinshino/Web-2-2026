document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hogwartsForm');
    const mensajeDiv = document.getElementById('mensaje-magico');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Detiene el envío normal

        // Obtenemos los datos con el DOM
        const nombre = document.getElementById('nombre').value;
        const casa = document.getElementById('casa').value;

        // Efecto de desvanecimiento del formulario
        form.style.transition = "opacity 0.5s ease";
        form.style.opacity = "0";

        setTimeout(() => {
            form.classList.add('hidden');
            mensajeDiv.classList.remove('hidden');

            // Personalizamos el mensaje final
            mensajeDiv.innerHTML = `
                <div class="success-msg">
                    <p>✨ <strong>¡Hechizo completado!</strong> ✨</p>
                    <p>Tu solicitud ha sido enviada al profesorado.</p>
                    <p>Bienvenido/a, <strong>${nombre}</strong>. Prepárate para entrar en <strong>${casa}</strong>.</p>
                    <p>📬 <i>Revisa tu ventana, la lechuza llegará pronto.</i></p>
                    <button onclick="location.reload()" style="width: auto; padding: 5px 15px; font-size: 0.7rem;">Enviar otra carta</button>
                </div>
            `;
        }, 500);
    });
});