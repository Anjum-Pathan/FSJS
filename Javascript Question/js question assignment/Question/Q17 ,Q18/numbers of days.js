//17. Write a program which tells the number of days in a month.

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(1, 2023));
console.log(getDaysInMonth(2, 2023));
console.log(getDaysInMonth(9, 2023));
console.log(getDaysInMonth(12, 2023));
//18. Write a program which tells the number of days in a month, now consider leap year.
//non leap year
console.log(getDaysInMonth(5, 2023));
console.log(getDaysInMonth(2, 2023));
// February in a leap year.
console.log(getDaysInMonth(2, 2012));
