// Ejercicio 21: Crear una función que reciba un número entero y muestre un error si el tipo de dato
//pasado es de otro tipo.

function verificar(a){
    if(typeof a !== 'number'){
        console.error('Error: el dato no es un número');
    } else {
        console.log('Correcto: es un número');
    }
}

verificar('4')
verificar(5)