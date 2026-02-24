//funcion original
function invertirNumero(numero) {

    return parseInt(
        numero.toString().split("").reverse().join("")
    );

}


//la ffuncion de la flecha
const invertirNumeroFlecha = (numero) =>
    parseInt(
        numero.toString().split("").reverse().join("")
    );


// Ejemplo de uso
let numero = 12345;

console.log("Tradicional:", invertirNumero(numero));
console.log("Flecha:", invertirNumeroFlecha(numero));