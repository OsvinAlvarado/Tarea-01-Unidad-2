//Ejercicio 18: Todos los ejercicios de while anteriores los debe replicar con el ciclo for.

console.log('-----Ejercicio 13-----');

//Ejercicio 13 usando for

let n = Number(prompt('Ingrese un numero cualquiera')) 


for(let i = 0; i <= n; i++){
    console.log(i);
}

//Ejercicio 14 usando for
console.log('-----Ejercicio 14-----');

let n2 = Number(prompt('Ingrese un numero cualquiera')) 

for(let i = 0; i<= n2; i += 2){
    console.log(i);
    
}

//Ejercicio 15 usando for
console.log('-----Ejercicio 15-----');
let n3 = Number(prompt('Ingrese un numero cualquiera')) 


for(let j = n3; j >= 1; j--){
    console.log(j);
    
}

//Ejercicio 16 usando for
console.log('-----Ejercicio 16-----');
let numero = Number(prompt('Ingrese cualquier número: '))

for(let h = 1; h <= 12; h++){
    console.log(numero*h);
    
}

//Ejercicio 17 usando for
console.log('-----Ejercicio 17-----');

let n4 = Number(prompt('Ingrese un numero cualquiera: '))
let m = Number(prompt('Ingrese un 2do numero mayor del que ya ingreso: '))


for(let k = n4; k <= m; k++){
    if((k % 2)=== 0){
        console.log(k);
    }
}

