// Allows you to easily extract array elements or object properties and store them in variables
// Spread operator takes out all elements/all properties and distributes them in a new array or object or whatever I'm using
// Destructuring allows you to pull out single elements/properties and store them in variableds for arrays/objectrs

//For Arrays
// const [a, b] = ['Hello', 'Max'];

//For Objects
// {name} = {
//     name: 'Max',
//     age: 28};

let someNumbers = [1, 3, 5, 7];
// [num1, num2] = numbers;
let [num1, , , num2] = someNumbers;
console.log(num1, num2);

var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

// Expected output: Array [30, 40, 50]
console.log(rest);
console.log(a);
console.log(b);
