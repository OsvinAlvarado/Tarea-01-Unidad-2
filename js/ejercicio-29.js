//Ejercicio 29: Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
//vacío debe devolver cero.

function promedio(array) {
    if(array.length === 0){
        return 0;
    } else {
        let suma = array.reduce((acc, num) => acc + num, 0);
        return suma / array.length;
    }
}


console.log(promedio([10, 20, 30])); 
console.log(promedio([])); 
