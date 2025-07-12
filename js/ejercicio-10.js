//Ejercicio Numero 10. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
//determine si el triángulo es válido o no.

let a = Number(prompt('Ingrese el 1er ángulo: '))
let b = Number(prompt('Ingrese el 2do ángulo: '))
let c = Number(prompt('Ingrese el 3er ángulo: '))

suma = a + b + c;

if(suma === 180){
    console.log('el triangulo es correcto');
    
}else{
    console.log('El triangulo es incorrecto');
    
}