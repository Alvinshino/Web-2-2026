// funcion tradicional
function decimalABinario(numero) {

    return numero.toString(2);

}

//Funcion de la flecha
const decimalABinarioFlecha = (numero) =>
    numero.toString(2);


// Ejemplo de uso
let numero = 10;

console.log("Tradicional:", decimalABinario(numero));
console.log("Flecha:", decimalABinarioFlecha(numero));