//11. Use the Date object to do the following activities.
//- What is the year today?
let today = new Date();
const year = today.getFullYear();
console.log(today);
//- What is the month today as a number?
let month;
month = today.getMonth();
console.log(month);
//- What is the date today?
let date;
date = today.getDate();
console.log(date);
//- What is the day today as a number?
let day;
day = today.getDay();
console.log(day);
//- What is the hours now?
let hours;
hours = today.getHours();
console.log(hours);
//- What is the minutes now?
let mini;
mini = today.getMinutes();
console.log(mini);
//- Find out the numbers of seconds elapsed from January 1, 1970 to now.
let past = new Date("1970-01-01");
let now = new Date();
let elapsed = now - past;
console.log(elapsed / 1000);

//12. Create a human readable time format using the Date time object
//1- YYYY-MM-DD HH:mm
const a = new Date();
const s = a.toISOString();
console.log(s);
//2- DD-MM-YYYY HH:mm
const b = a.toLocaleString("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(b);

//3- DD/MM/YYYY HH:mm
let c = a.toLocaleString();
console.log(c);
