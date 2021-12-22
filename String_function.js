/**
* 1. Create a fork of this repl.it.
* 2. Write test cases to validate your code before you complete the exercise.
* 3. Make sure to run your exercise and check
* for correctness.
*/
 
/**
* Exercise 1:
* We want to check if a string is empty.
* If a string is not empty, we want to print
* out the first character of that string.
* If a string is empty, print out a text saying
* "This string is empty"
*/
var cadena = prompt("Escribe");
function checkEmptyString(str) {
  if(str==="") {
    console.log("La cadena esta vacia");
  }
  else{ 
    console.log(str.charAt(0) );
  }
}
checkEmptyString(cadena);
