//Ejercicio Numero 4: Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

let frase = prompt('Escriba cualquier frase')

console.log(frase);

let caracteres = frase.split("")
let contador = 0

for (let letra of caracteres) {
    if (letra === 'a') {
        contador++
    }
}

console.log(`La letra 'a' aparece ${contador} veces`)
