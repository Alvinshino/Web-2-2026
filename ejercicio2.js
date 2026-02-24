// la funcion original 
function palabraMasLarga(frase) {

    let palabras = frase.split(" ");
    let masLarga = "";

    for (let i = 0; i < palabras.length; i++) {

        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }

    }

    return masLarga;
}



//la funcion de flecha
const palabraMasLargaFlecha = (frase) => {

    return frase
        .split(" ")
        .reduce((larga, actual) =>
            actual.length > larga.length ? actual : larga
        , "");

};



// Ejemplo de uso
let frase = "JavaScript es un lenguaje de programacion poderoso";

console.log("Resultado tradicional:");
console.log(palabraMasLarga(frase));

console.log("Resultado función flecha:");
console.log(palabraMasLargaFlecha(frase));