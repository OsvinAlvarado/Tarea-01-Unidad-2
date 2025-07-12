//Ejercicio Numero 2: Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

let a = Number(prompt('Escriba 1er numero:'))
let b = Number(prompt('Escriba el 2do numero:'))
let c = Number(prompt('Escriba el 3er numero:'))

if ( a >= b && a >= c) {
    console.log(`El numero ${a} es mayor`);
    
} else if (b >= a && b >= c){
    console.log(`El numero ${b} es mayor`);
    
}else if (c >= a && c >= b){
    console.log(`El numero ${c} es mayor`);
    
}else if (a === b && b === c){
    console.log('Los Numeros son iguales');
    
}