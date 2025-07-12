//Ejercicio NUmero 9: Crear un programa que determine si un string introducido por un usuario inicia con un
//número o con una letra.

let texto = prompt('Ingresa una palabra o frase:')

console.log(texto[0]);

let caracter = texto[0] 

if(isNaN(Number(caracter))){
    console.log('Es un caracter');
    
}else{
    console.log('es un numero');
    
}
    
