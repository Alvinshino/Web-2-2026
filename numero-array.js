// con la funcion original 
function contarParesImpares(arr) {

    let resultado = {
        pares: 0,
        impares: 0
    };

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            resultado.pares++;
        } else {
            resultado.impares++;
        }

    }

    return resultado;
}



// con la funcion flecha
const contarParesImparesFlecha = (arr) => {

    let resultado = {
        pares: 0,
        impares: 0
    };

    arr.forEach(numero => {
        numero % 2 === 0
            ? resultado.pares++
            : resultado.impares++;
    });

    return resultado;
};



// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Resultado tradicional:");
console.log(contarParesImpares(numeros));

console.log("Resultado función flecha:");
console.log(contarParesImparesFlecha(numeros));