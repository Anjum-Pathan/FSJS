//24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let Even = [];
let Odd = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    Even.push(i);
  } else {
    Odd.push(i);
  }
}
console.log("Even array is", Even);
console.log("Odd array is", Odd);
