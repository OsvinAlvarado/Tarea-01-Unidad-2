//Ejercicio 30: Crear una función que tome como parámetro un arreglo de números, retornar el número
//menor, si es un número negativo mostrar su valor absoluto.

function menorAbsoluto(array) {
    let menor = Math.min(...array);
    return Math.abs(menor);
}


console.log(menorAbsoluto([5, -3, 7, -8])); 
console.log(menorAbsoluto([4, 2, 9])); 
