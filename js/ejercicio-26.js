//Ejercicio 26: El usuario ingresa un string con varias palabras separadas por coma en un popup y se
//deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

let texto = prompt('Ingrese una palabra, letra por letra separada por comas:')

let array = texto.split(",");
console.log(array);
