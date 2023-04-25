//05. Declare a varibale and assign string value to it and then split it into an array using split() method
const namevar = "anjum";
splited = namevar.split("");
console.log(`String splitted into an Array: ${JSON.stringify(splited)}`);
console.log(splited);
//06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const companyname = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
console.log(companyname.split(","));

// 07 .Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
//First occurrence
const skill = ["pw skills", "html", "css", "javascript"];
console.log(skill.lastIndexOf("pw skills"));
//last occurrence
const skill1 = ["html", "css", "javascript", "pw skills"];
console.log(skill1.lastIndexOf("pw skills"));

//08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.
const name = "           anjum               ";
console.log(name.trim());
