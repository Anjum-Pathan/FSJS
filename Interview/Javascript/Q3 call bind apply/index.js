const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "anjum",
  lastName: "pathan",
};
const person2 = {
  firstName: "tabassum",
  lastName: "pathan",
};
// Using call() to invoke the method on different objects
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

//Using bind() to create a new function with a specific this value
const fullNameFunc = person.fullName.bind(person1);
console.log(fullNameFunc());

// Using apply() to invoke the function with arguments as an array
const args = ["Hello", "pathan"];
console.log(person.fullName.apply(person2, args));
