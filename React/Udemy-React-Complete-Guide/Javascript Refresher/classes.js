//Clases
// a class can have properties(variables attached to classes) and mehionds(functions attach to classes)
class Car {
  //method called whenever you instantiate a class
  constructor() {
    this.type = "sedan";
  }

  printType() {
    console.log(this.type);
  }
}

class Limo extends Car {
  //   constructor() {
  //     super();
  //     this.type = "Limo";
  //     this.brand = "BMW";
  //   }
  //   printBrand() {
  //     console.log(this.brand);
  //   }

  // If I use the Arrow function I don't need the constructor and the "this" keyword anymore, so I will use the below approach
  type = "limo";
  brand = "bmw";

  printBrand = () => {
    console.log(this.brand);
  };
}

const car = new Limo();
car.printBrand();
car.printType();
