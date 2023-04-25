//15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let grade = prompt("Enter Your Grade:");

if (grade >= 80) {
  if (grade <= 100) {
    console.log("Grade is : A");
  } else {
    console.log(`Grade is ${grade} invalid `);
  }
} else if (grade >= 70 && grade <= 79) {
  console.log(`Grade is ${grade}  : B`);
} else if (grade >= 60 && grade <= 69) {
  console.log(`Grade is ${grade}  : c`);
} else if (grade >= 50 && grade <= 59) {
  console.log(`Grade is ${grade}  : D`);
} else if (grade >= 0 && grade <= 49) {
  console.log(`Grade is ${grade}  : F`);
}

//16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer
let inputseason = prompt("Enter the month to check the season.");

if (inputseason === "September" || "October" || "November") {
  console.log("the season is Autumn.");
} else if (inputseason === "December" || "January" || "February") {
  console.log("the season is Winter.");
} else if (inputseason === "March" || "April" || "May") {
  console.log("the season is Spring.");
} else if (inputseason === "June" || "July" || "August") {
  console.log("the season is Summer.");
}
