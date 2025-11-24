//1 QUESTION
//a>>const 
const a=5;
const b=7;
console.log(`${a} + ${b} =${a+b}`);
//b>
const message=`
This is line 1
This is line 2
This is line 3
`;
console.log(message);
//c>
const firstname="Shivani";
const lastname="Siraveni";
console.log(`Full NAME: ${firstname} ${lastname}`);

//2QUESTION
//a>>
const square = n => n * n;

//b>
const obj={
    value :50,
    test: () =>console.log(this.value)
};
obj.test();
//Reason: Arrow function do not have their own this.
//>> this inside the arrow function refer to the outer lexical scope, not to obj.
//>> That outer scope doesnot have a value property->so it prints UNDEFINED

//C>>
const object = {
    value :50,
    test:  function () {
console.log(this.value)
    }
};
object.test();

//3. REST , SPREAD & COPING OBJECTS
//a>>
const product = { name: "Pen", price: 10 };
const productCopy = {...product};
console.log(product)

//b>
const a1 = { x: 1 };
const b1 = { y: 2 };
const mergeObject = { ...a1, ...b1 };
console.log(mergeObject)
//c>
function maxValue(...nums) {
    return Math.max(...nums);
}
console.log(maxValue(1, 5, 2, 8, 3));
//4> DESTRUCTING & Optional Changing
// a) Destructure to extract a and b
const arr = [10, 20, 30];
const [a2, b2] = arr;
console.log(a); // 10
console.log(b); // 20


// b) Destructure the object to extract brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); 


// c) Optional chaining example
const info = {};
console.log(info.user?.name); 

//5>
//a>
for (var i = 0; i < 3; i++) {}
console.log(i);
//b>
for (let j=0; j <3; j++) {}
console.log(j);
//c>
//To prevent accidential reassignment and improve code clartiy.

//6>
//a>
let speed =(kmph > 60) ? "Fast" : "Normal";

//b>
let age1;
let status = (age1 >= 18)? "Adult" : "Minor";
//c>
let number;
let sign = (num > 0 ) ? "positive" : (number===0) ? "zero" : "negative";
//7 . SPREAD REST ARRAYS
//a>>
const nums = [1,2,3];
const updateNums = [...nums, 4, 5];
console.log(updateNums)
//b>
 const a3 = ["x","y"];
 const b3 = ["z"];
const combined=[...a3, ...b3];
console.log("b) Combined Array:", combined);
//c>
function printNames(...names){
    return names;
}
console.log("c) function output:", printNames("A", "B", "C"));
//8 OBJECT DESTRUCTING AND SHORTHAND
//A>
const user = { id: 101, status: "active" };
const { id1, statuss } = user;
console.log(id1);
console.log(statuss);
//b>
const id = 101;
const role = "admin";
const userShorthand = { id, role };
console.log(userShorthand);
//c>
const name = "Alice";
const age = 30;
const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log(person);
person.greet();

//9 Template Literals (More Practice)
const today=new Date().toDateString();
console.log(`today's date is: ${today}`);

//10 Arrow Function Shorthands
//a>
function add(a, b){
    return a+b;
}
function addArrow(a, b) {
    return a + b;
}
console.log(addArrow(5,3));
//b>
const isAdult = (age) => age >= 18;


console.log(isAdult(25));
console.log(isAdult(16));
//c>
const double = (num) => num * 2;
console.log(double(10));
//11> SPREAD OPERATOR (AARRYS AND OBLECTS)
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
clonedArray.push(4);
console.log(originalArray);
console.log(clonedArray);
//b>
const originalArrays = [1, 2, 3];
const newArrays = [100, ...originalArrays];
console.log( newArrays);
//c>
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

//12>OPTIONAL CHANGINING (MORE PRACTICE)
//a>
const username1 = {
name: "Alex",
address: {
city: "Bangalore"
}
};

const city = username1.address?.city;
console.log(city);

//b>
const username = {
name: "Alex",
address: {
city: "Bangalore"
}
};

const jobTitle = username.job?.title;
console.log(jobTitle);
//c>
const username2 = {
name: "Alex",
address: {
city: "Bangalore"
}
};
const jobTitleSafe = username2.job?.title;
console.log(jobTitleSafe);