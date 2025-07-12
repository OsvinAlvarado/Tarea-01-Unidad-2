//Ejercicio 25: Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
//un color introducido por el usuario a través de un prompt se encuentra dentro del array o
//no.

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

let nuevoColor = prompt('Ingrese un color: ')

if(colores.includes(nuevoColor)){
  console.log(`El color ${nuevoColor} existe`);
} else {
  console.log('El color no existe');
}
