const deleteData = () => {
    const id = document.getElementById("postId").value.trim();

    if (!id) {
        showResult("Debe ingresar un ID para eliminar.", true);
        return;
    }

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Http error estado: ${response.status}`);
            }

            showResult({
                message: `Post con el id ${id} eliminado`,
                status: response.status
            });
        })
        .catch(error => showResult(error.message, true));
};