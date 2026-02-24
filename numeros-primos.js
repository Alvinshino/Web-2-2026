// funcion original
function esPrimo(numero) {

    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}


// funcion original
function filtrarPrimos(array) {

    return array.filter(esPrimo);

}


// La funcion de la flecha
const filtrarPrimosFlecha = (array) => {

    const esPrimo = (numero) => {
        if (numero <= 1) return false;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }

        return true;
    };

    return array.filter(numero => esPrimo(numero));
};


// Ejemplo de uso
let numeros = [1,2,3,4,5,6,7,8,9,10,11];

console.log("Tradicional:", filtrarPrimos(numeros));
console.log("Flecha:", filtrarPrimosFlecha(numeros));