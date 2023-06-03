function multiply(a) {
  return function (b) {
    return a * b;
  };
}

// Currying the multiply function
let multiplyByTwo = multiply(2);
let multiplyByThree = multiply(3);

console.log(multiplyByTwo(4));
console.log(multiplyByThree(5));
