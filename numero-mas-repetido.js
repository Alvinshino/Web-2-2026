

// La funcion original 
function numeroMasRepetido(array) {

    let contador = {};
    let max = 0;
    let numeroFrecuente = null;

    for (let numero of array) {

        contador[numero] = (contador[numero] || 0) + 1;

        if (contador[numero] > max) {
            max = contador[numero];
            numeroFrecuente = numero;
        }

    }

    return numeroFrecuente;
}


// La funcion de la flecha 
const numeroMasRepetidoFlecha = (array) => {

    let contador = {};

    array.forEach(numero => {
        contador[numero] = (contador[numero] || 0) + 1;
    });

    return Object.keys(contador).reduce((a, b) =>
        contador[a] > contador[b] ? a : b
    );

};


// Ejemplo de uso
let numeros = [1,2,2,3,3,3,4,4,4,4,5];

console.log("Tradicional:", numeroMasRepetido(numeros));
console.log("Flecha:", numeroMasRepetidoFlecha(numeros));