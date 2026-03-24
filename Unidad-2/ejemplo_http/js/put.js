const putData = () => {
    const id = document.getElementById("postId").value.trim();
    const titulo = document.getElementById("tituloUpdate").value.trim();
    const descripcion = document.getElementById("descripcionUpdate").value.trim();

    if (!id) {
        showResult("Debe ingresar un ID para actualizar.", true);
        return;
    }

    if (!titulo || !descripcion) {
        showResult("Debe ingresar título y descripción para actualizar.", true);
        return;
    }

    const updateData = {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        fecha: new Date().toISOString()
    };

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(updateData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http error estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => showResult(data))
        .catch(error => showResult(error.message, true));
};