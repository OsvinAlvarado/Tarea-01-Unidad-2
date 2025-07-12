// Ejercicio Numero 5: Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
//las vocales.


let frase = prompt('Escriba cualquier frase')

console.log(frase);

let caracteres = frase.split("")
let contadorA = 0
let contadorE = 0
let contadorI = 0
let contadorO = 0
let contadorU = 0


for (let letra of caracteres) {
    if (letra === 'a') {
        contadorA++
    } if (letra === 'e') {
        contadorE++
    }if (letra === 'i') {
        contadorI++
    }if (letra === 'o') {
        contadorO++
    }if (letra === 'u') {
        contadorU++
    }
}


console.log(`La letra 'a' aparece ${contadorA} veces`)
console.log(`La letra 'e' aparece ${contadorE} veces`)
console.log(`La letra 'i' aparece ${contadorI} veces`)
console.log(`La letra 'o' aparece ${contadorO} veces`)
console.log(`La letra 'u' aparece ${contadorU} veces`)
