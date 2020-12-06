//variable kelvin declared as a constant "293"
const kelvin = 0;
//variable celsius declared as kelvin-273
const celsius = kelvin - 273;
let Newton = celsius *(33/100);
Newton = Math.floor(Newton);
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${Newton} degrees Newton.`)
