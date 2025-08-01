// Call Bind Apply in JavaScript (Explicit Binding)
// What is Call ?
// The `call` method allows you to call a function with a specified `this` context and arguments.

var obj = {
    name: "Prince",
}

function sayHello(age) {
    return `Hello, my name is ${this.name} and I am ${age} years old.`;
}

console.log(sayHello.call(obj, 26)); // Logs "Hello, my name is Prince and I am 26 years old."


// What is Apply ?
// The `apply` method is similar to `call`, but it takes an array of arguments instead of individual arguments.

console.log(sayHello.apply(obj, [26])); // Logs "Hello, my name is Prince and I am 26 years old."

// What is Bind ?
// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.\

const bindFunction = sayHello.bind(obj);
console.log(bindFunction(26)); // Logs "Hello, my name is Prince and I am 26 years old."

// Find the output of the following code:

const age = 30;
const person = {
    name: "John",
    age: 25,
    getDetails: function(name) {
        return `Name: ${name}, Age: ${this.age}`;
    }
};

const person2 = {
    age: 35,
}
console.log(person.getDetails.call(person2, "Prince")); // Logs "Name: Prince, Age: 35"

// Append array to another array using call, apply, and bind
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

array1.push.apply(array1, array2);
console.log(array1); // Logs [1, 2, 3, 4, 5, 6]

// Polyfill for Call

let car = {
    color: "Red",
    company: "Ferrari"
}
 
function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car from ${currency} ${price}`)
}

purchaseCar.call(car, "$", "500000")

Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== "function"){
        throw new Error( this + "is Not Callable");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car, "$", "500000");

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== "function"){
        throw new Error( this + "is Not Callable");
    }
    if(!Array.isArray(args)){
        throw new Error("Args is not in Array Form");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car, ["$", "500000"])

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error( this + "is Not Callable");
    }
    context.fn = this;
    return function(...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

const bindFunc = purchaseCar.myBind(car);
bindFunc("$", "50000000")
