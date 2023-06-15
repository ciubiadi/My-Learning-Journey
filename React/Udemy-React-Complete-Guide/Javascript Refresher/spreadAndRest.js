// Spread and Rest operator is "..."
// Spread Operator is used to split up array/object elements/properties
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4];

let someObject = {
  name: "test",
  age: 24,
};
let newObject = {
  ...someObject,
  gender: "male",
};
console.log(someObject);
console.log(newObject);

// Rest Operator is used to merge a list of function arguments into an array
function sortArgs(...args) {
  return args.sort();
}

let someFilter = (...args) => {
  return args.filter((el) => el == 1);
};

console.log(someFilter(1, 2, 3));
