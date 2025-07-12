//Ejercicio 24: Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
//introducido por el usuario a través de un prompt.

let array = []
let n = Number(prompt('Ingrese un numero: '))

for(let i = 0; i < n; i++){
    array.push(Math.floor(Math.random() * 101))
}
console.log(array);
