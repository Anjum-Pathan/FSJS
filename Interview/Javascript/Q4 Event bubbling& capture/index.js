//event Bubbling
var parent = document.querySelector("#p1");
parent.addEventListener("click", function () {
  console.log("Parent is invoked");
});
var child = document.querySelector("#c1");
child.addEventListener("click", function () {
  console.log("Child is invoked");
});
//event Capture
var parent = document.querySelector("#p1");
var child = document.querySelector("#c1");

parent.addEventListener(
  "click",
  function () {
    console.log("Parent is invoked");
  },
  true
);

child.addEventListener(
  "click",
  function () {
    console.log("Child is invoked");
  },
  true
);
