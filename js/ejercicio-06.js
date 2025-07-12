// Ejercicio Numero 6: Escribir un programa que escriba en pantalla los divisores de un número dado.

let numero = Number(prompt('Ingrese cualquier Número: '))
 
for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i);
        
    }
}

