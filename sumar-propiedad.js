

// La funcion original 
function sumarPropiedad(array, propiedad) {

    let suma = 0;

    for (let objeto of array) {

        if (objeto[propiedad]) {
            suma += objeto[propiedad];
        }

    }

    return suma;
}


// La funcion de la flecha
const sumarPropiedadFlecha = (array, propiedad) =>

    array.reduce((total, objeto) =>
        total + (objeto[propiedad] || 0)
    , 0);


// Ejemplo de uso
let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 100 }
];

console.log("Tradicional:", sumarPropiedad(productos, "precio"));
console.log("Flecha:", sumarPropiedadFlecha(productos, "precio"));