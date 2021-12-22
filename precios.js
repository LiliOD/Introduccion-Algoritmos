//De 3 valores que ingresa el usuario, hay que encontrar los 
//dos valores más pequeños.
let num1=parseInt(prompt("Ingrese el precio 1"));
let num2=parseInt(prompt("Ingrese el precio 2"));
let num3=parseInt(prompt("Ingrese el precio 3"));

var max=Math.max(num1,num2,num3); //identifico el valor más grande y lo comparo con los otros.

    if(max==num1){
        alert ('Los precios más baratos son: '+ num2+ ' y '+num3);
        
    }else if (max==num2){
        alert ('Los precios más baratos son: '+ num1+ ' y '+num3);   
    }else if (max==num3){
        alert ('Los precios más baratos son: '+ num1+ ' y '+num2); 
    }


