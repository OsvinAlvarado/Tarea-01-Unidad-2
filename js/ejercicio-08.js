// Ejercicio Numero 8:Crear un programa que determine si un número introducido en un Prompt es divisible
//por 5 o no, mostrar el resultado con console.log.

let numero = Number(prompt('Ingrese cualquier numero: '))


if( (numero % 5 ) === 0) {
    console.log(`${numero}  SI es Divisible entre 5`);
        
} else {
    console.log(`${numero} NO es divisible entre 5`);

}