// Functions in Javascript
// What is Function Declaration?

function greet(name) {
  return `Hello, ${name}!`;
}

// What is Function Expression?

const greetExpression = function(name) {
    return `Hello, ${name}!`;
}

// What are first-class functions?
// Functions that can be treated like any other variable, passed as arguments, returned from other functions


function executeFunction(fn) {
   console.log(fn("John"));
}

executeFunction(greet);

// What is an IIFE (Immediately Invoked Function Expression)?
(function() {
    console.log("This is an IIFE");
})();

// Function Scope

var num1 = 10, num2 = 20 , name = "John";

console.log(`The numbers are: ${num1} and ${num2}`);
function addNumbers() {
    var num1 = 30, num2 = 40; // Local scope
    console.log(`The numbers are ${num1} and ${num2} and name is ${name}` );
}

addNumbers(); // Outputs: The numbers are 30 and 40 and name is John

// O/P based on the Function Scope
// for(let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i); // Outputs: 0, 1, 2, 3, 4
//     }, 1000);
// }

// for(var j = 0; j < 5; j++) {
//     setTimeout(function() {
//         console.log(j); // Outputs: 5, 5, 5, 5, 5
//     }, 1000);
// }

// Hoisting in Functions
console.log(add(5, 10)); // Outputs: 15
function add(a, b) {
    return a + b;
}

// Params and Arguments
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Outputs: 5 (b defaults to 1)
console.log(multiply(5, 2)); // Outputs: 10

// Callback Functions

function processData(data) {
   console.log("Processing data:", data);
}

function fetchData(callback) {
   callback("Data fetched successfully!");
}

fetchData(processData); // Outputs: Processing data: Data fetched successfully!

// Arrow Functions
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 10)); // Outputs: 15





