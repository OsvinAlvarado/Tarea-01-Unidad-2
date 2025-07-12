//Ejercicio 17: Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
//ingresa un usuario.
let n = Number(prompt('Ingrese un numero cualquiera: '))
let m = Number(prompt('Ingrese un 2do numero mayor del que ya ingreso: '))

let i = n
while(i <= m){
    if((i % 2)=== 0){
        console.log(i);
    }
    i++;
}

