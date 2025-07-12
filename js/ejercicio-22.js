//Ejercicio 22: Dado el array = [1,2,3,4,5,6]
//a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
//pantalla.
//b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
//pantalla.
//c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
//en pantalla.
//d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
//e. Generar una copia de un array pero con todos los elementos incrementados en 1.
//f. Calcular el promedio
console.log('----a----');

let numeros = [1,2,3,4,5,6]
console.log(numeros);

let i = 0;

while(i <= numeros.length){
    console.log(numeros[i]);
    i++
    
}
console.log('----b----');
for(i = 0; i <=numeros.length; i++ ){
    console.log(numeros[i]);
    
}
console.log('----c----');
numeros.forEach(function(i){
    console.log(i);
    
})
console.log('----d----');
numeros.forEach(function(i) {
    console.log(i+1);
    
})

console.log('----e----');

let copiaNumeros = []
numeros.forEach(function(i) {
    copiaNumeros.push(i+1)
})

console.log('----f----');
let suma = 0;
numeros.forEach(function(i) {
    suma += i;
})

let promedio = (suma/numeros.length)
console.log(promedio);
