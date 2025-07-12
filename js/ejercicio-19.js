// Ejercicio 19: Usando for, crear un programa que determine si un número es perfecto o no

let numero = Number(prompt('Ingrese cualquier numero: '))

let suma = 0;


for(let i = 1; i < numero; i++){
    if(numero % i === 0){
        suma += i; 
    }
}


if(suma === numero){
    console.log(`El numero ${numero} es perfecto`);
} else {
    console.log(`El numero ${numero} no es perfecto`);
}
