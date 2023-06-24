/* BASICS TYPES in TS
// Primitives : Number, String, Boolean, etc.
// Complex Types : Arrays. Objects, etc.
*/

/* Primitives (primitive types are written usually with lower cases, because Objects are noted with Capital letter*/
let age: number = 26;
let firstName: string = "Adrian";
let isBored: boolean = false;

// More Complex Types

// Arrays
// Array of strings
let hobbies: string[];

// Object initialization
let person: {
  name: string;
  age: number;
} = {
  name: "Marius",
  age: 27,
};

// Array of objects
let car: {
  model: string;
  age: number;
}[];

// Type inferance
let course = "React Course";
// course = 3; => will give error even if I didn't specif the type because of the initialization, Typescript knows
// the type. So it's nice to not specify the type if it is not necessary.

// Union Types is a type definition that allows more than one type
let height: string | number = "1.82";
height = 1.8;

// I can create a type alias. I can define my own based type in which a more complex type is stored
type PersonCustom = {
  firstName: string;
  lastName: string;
  heightCM: string | number;
  age: number;
};

let customPersons: PersonCustom[] = [
  {
    firstName: "Adrian",
    lastName: "Ciubi",
    heightCM: 180,
    age: 26,
  },
  {
    firstName: "Miha",
    lastName: "Hincu",
    heightCM: 10,
    age: 26,
  },
];

// Function an Function Types
// after the function parameters we can specify the type of return
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

//Generics
function insertAtBegining<T>(array: T[], value: T) {
  // add value in array at beginning
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [2, 3, 4];
const updatedDemoArray = insertAtBegining(demoArray, -1);
updatedDemoArray[0].split("");
console.log(updatedDemoArray);
