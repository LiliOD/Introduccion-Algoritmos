//Parte 2
/*Escriba un algoritmo para encontrar el mayor entre 5 números diferentes ingresados ​​por el usuario.
Imprima el número más grande en la consola*/

let	num1=parseInt(prompt("Ingrese el numero 1"));
let num2=parseInt(prompt("Ingrese el numero 2"));
let num3=parseInt(prompt("Ingrese el numero 3"));
let num4=parseInt(prompt("Ingrese el numero 4"));
let num5=parseInt(prompt("Ingrese el numero 5"));

var max = Math.max(num1,num2,num3,num4,num5); //El método Math.max () devuelve el número con el valor más alto.
window.alert("El valor mas grande es:" +max);
console.log(max)