const API_BASE_URL = 'http://127.0.0.1/api1/mascotas.php';

// LISTAR MASCOTAS
const listarboleto = () => {
    return fetch(API_BASE_URL)
        .then(response => {
            if (!response.ok) throw new Error('Error al obtener boleto');
            return response.json();
        });
};

// CREAR MASCOTA
const crearboleto = (nombre, costo, descripcion) => {
    return fetch(API_BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            costo,
            descripcion
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Error al crear boleto');
        return response.json();
    });
};

// ELIMINAR MASCOTA
const eliminarboleto = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error('Error al eliminar boleto');
        return response.json();
    });
};

// ACTUALIZAR MASCOTA
const actualizarboleto = (id, nombre, costo, descripcion) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            nombre,
            costo,
            descripcion
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Error al actualizar boleto');
        return response.json();
    });
};

// OBTENER UNA MASCOTA
const boleto = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error('boleto no encontrado');
            return response.json();
        });
};

// EXPORTAR FUNCIONES
export const boletoServices = {
    listarboleto,
    crearboleto,
    eliminarboleto,
    actualizarboleto,
    boleto
};