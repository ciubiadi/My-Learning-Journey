// someNumber is a primitive type
let someNumber = 1;

// num2 will actually create a real copy of someNumber, so it will copied the value 1
let numberr2 = someNumber;

// Primitive Types are : Numbers, Strings, Booleans
// Refference Types are objects and arrays
console.log(numberr2);

/* secondPerson will print the same value as person but will not actually have copied the person, instead person the object is stored 
 in memory and in the person variable I store a pointer to that place in memory. 
*/
let person = {
  name: "Adrian",
};

let secondPerson = person;

person.name = "Ciubuu";

console.log(secondPerson);

// The propper way is to copy just values/properties
let thirdperson = {
  ...person,
};
