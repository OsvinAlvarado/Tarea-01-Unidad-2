//Ejercicio 27: Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
//solo los números pares, pista: utilizar reduce().

function filtrarPares(array) {
    return array.reduce((acumulador, numero) => {
        if (numero % 2 === 0) {
            acumulador.push(numero);
        }
        return acumulador;
    }, []);
}

let numeros = [1, 2, 3, 4, 5, 6];
let pares = filtrarPares(numeros);
console.log(pares); 
