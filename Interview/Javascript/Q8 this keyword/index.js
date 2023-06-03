// Global scope
console.log(this);

// Object method
const person = {
  name: "anjum",
  age: 25,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.sayHello();

// Constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("odi", "Camry");
console.log(myCar.make);
