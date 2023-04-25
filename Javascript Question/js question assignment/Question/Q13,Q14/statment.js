//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("What is your age:");
if (age < 18) {
  console.log(`You are not old enough to drive, wait for ${"18 years"} age.`);
} else {
  console.log("You are old enough to drive");
}

//14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.
const number = prompt("Enter a number: ");
if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
