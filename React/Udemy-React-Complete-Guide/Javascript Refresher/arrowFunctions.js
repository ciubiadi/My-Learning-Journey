//Arrow functions

// function myFnc(){
//...
// }
// is the same as
// const myFnc=() => {
//...
// }

function printMyName(name) {
  console.log(name);
}

printMyName("Ciubi");

let printMyName2 = (name, age) => {
  console.log(name, age);
};
printMyName2("Ciubu2", 25);

let multiply = (number) => {
  return number * 2;
};

console.log(multiply(2));
