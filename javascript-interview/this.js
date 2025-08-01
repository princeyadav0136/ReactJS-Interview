// this keyword in JavaScript (Implicit Binding)
// The `this` keyword refers to the context in which a function is called.
// In the case of a regular function call, `this` refers to the global object (

var a = 10; // In browsers, this is `window`
function showThis() {
    console.log(this.a);
}
showThis(); // Logs the global object (window in browsers)

var arrowFun = () => {
    console.log(this.a);
}// In arrow functions, `this` is lexically bound, meaning it refers to the context in
// where the arrow function was defined, not where it is called.
arrowFun(); // Logs the global object (window in browsers)

var obj = {
    a: 20,
    showThis: function() {
        console.log(this.a);
    },
    childObj: {
        b: 30,
        showThis: function() {
            console.log(this.b, "from childObj");
            console.log(this.a, "from childObj"); // This will be undefined
        }
    },
    childArrowFun: () => {
        console.log(this.a, "from childArrowFun"); // This will refer to the global object
    },
    normalFun: function() {
        console.log(this.a, "from normalFun"); // This will refer to the obj context
        const nestedArrowFun = () => {
            console.log(this.a, "from nestedArrowFun"); // This will refer to the global object
        }
        nestedArrowFun();
    }
}

obj.showThis(); // Logs 20, as `this` refers to `obj`
obj.childObj.showThis(); // Logs 30, as `this` refers to `childObj`
obj.childArrowFun(); // Logs 10, as `this` refers to the global object (window in browsers)
obj.normalFun(); // Logs 20, as `this` refers to `obj`

// this keyword in Class and Constructor Functions

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const person1 = new Person("Alice");
person1.showName(); // Logs "Alice", as `this` refers to the instance of Person


// What is the following code output?

const user = {
    name: "John",
    getName: function() {
        const name = "John";
        return this.name; // This will return "John" from the user object
    }
}
console.log(user.getName()); // Logs "John"

