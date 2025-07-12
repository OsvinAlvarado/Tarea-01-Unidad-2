//Ejercicio 31: Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
//arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

function invertirArray(array) {
    return array.slice().reverse();
}


let numeros = [1,2,3];
let invertido = invertirArray(numeros);
console.log(invertido); 
