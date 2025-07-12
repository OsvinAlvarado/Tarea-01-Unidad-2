//Ejercicio 28: Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
//contenga sólo las palabras que empiezan con una vocal.


function palabrasConVocal(array) {
    return array.filter(palabra => {
        let primeraLetra = palabra.charAt(0).toLowerCase();
        return ['a', 'e', 'i', 'o', 'u'].includes(primeraLetra);
    });
}

// Ejemplo:
let palabras = ["hola", "amor", "elefante", "sol", "uva"];
let resultado = palabrasConVocal(palabras);
console.log(resultado); 
