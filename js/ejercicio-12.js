//Ejercicio 12: Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
//10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
//para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
//programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje
//de "Vuelva a intentarlo"

let numero = Math.floor(Math.random() * 10 + 1)

console.log(numero);

let numeroUsuario = Number(prompt('Ingrese un numero entre 1-10'))

while(numeroUsuario !== numero){

    let numeroUsuario = Number(prompt('Ingrese un numero entre 1-10'))
    
 if(numeroUsuario < 1 || numeroUsuario > 10){
    alert('Numero incorrecto');
    
}else if(numeroUsuario === numero){
    alert(`Perfecto adivinaste, Buen trabajo!`);
    break;
    
}else if (numeroUsuario != numero){
    alert('Vuelva a Intentarlo')
}
}
