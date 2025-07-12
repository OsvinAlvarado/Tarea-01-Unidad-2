//Ejercicio Número 7: Crear un programa que determine si un número introducido en un Prompt es par o
//no, la respuesta será mostrada en la consola.

let numero = Number(prompt('Ingrese cualquier numero: '))


if( (numero % 2 ) === 0) {
    console.log(`${numero} es Par`);
        
} else {
    console.log(`${numero} es Impar`);

}
