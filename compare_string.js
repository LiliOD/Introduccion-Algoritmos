//* Exercise 2:
// * We want to compare two strings and check if
 //* they are the same - case insensitive.
 //* Return a boolean - true if the two strings are
 //* the same, and false if they are not
 //*/
var c1 = prompt("Ingrese el primer valor ");
var c2 = prompt("Ingrese el segundo valor ");
function comparacion(str1,str2){
if(str1==str2){
  return true;
}
else{
  return false;
}
}
comparacion(c1,c2);
// Example test, should return true
//checkTwoStringsSame("String1", "string1");
