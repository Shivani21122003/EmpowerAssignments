//a) Template literal
const username = "Shiva";
const course = "Javascript";
console.log("Hello, welcome to the course!");
// b)shorthand syntax
const name = "Shiva";
const age = 21;
const student = {
  name: name,
  age: age,
  greet : function() {
    console.log("Hello");
  }
};
// c) Arrow function shorthand (no return keyword)
const getFullName = (first, last) => `${first} ${last}`;