const kelvin = prompt("What is the Kelvin temperature today?");
const celsius = kelvin - 273;
var fahrenheit = celsius * ( 9/5 ) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit +" degrees fahrenheit");