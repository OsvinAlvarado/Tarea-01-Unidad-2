// Ejercicio Número 11: Determinar si una palabra empieza con mayúscula o no.

let palabra = prompt('Ingrese una palabra: ')

let caracter = palabra[0]

if(caracter === caracter.toUpperCase()){
    console.log(`${palabra} Empieza con mayúscula`);
    
}else{
    console.log(`${palabra} Empieza con minúscula`);
    
}