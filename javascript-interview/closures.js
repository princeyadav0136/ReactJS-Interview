// Closure in JS
// Lexical Scope

var outerVar = "I am outside!";

function outerFunction() {
    var innerVar = "I am inside!";
    
    function innerFunction() {
        console.log(outerVar); // Accesses outerVar from outerFunction's scope
        console.log(innerVar); // Accesses innerVar from its own scope
    }
    
    return innerFunction; // Returns the inner function
}

var closureFunction = outerFunction(); // closureFunction now holds innerFunction
closureFunction(); // Outputs: I am outside! and I am inside!

// Closure Scope Chain
function makeCounter() {
    let count = 0; // Private variable

    return function() {
        count++; // Accesses and modifies the private variable
        return count;
    };
}

var counter = makeCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2

// Time Optimization using closures

function find(){
    let temp = [];
    for(let i = 0; i < 100000; i++){
        temp.push(i*i);
    }
    return function(num){
        return temp[num];
    };
}

var getSquare = find();
console.log(getSquare(10)); // Outputs: 100

// Block Scope with Closures

function a() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i); // Outputs: 5, 5, 5, 5, 5
        }, 1000);
    }
}
a();

function b() {
    for (let j = 0; j < 5; j++) {
        setTimeout(function() {
            console.log(j); // Outputs: 0, 1, 2, 3, 4
        }, 1000);
    }
}
b();

for(var k = 0; k < 5; k++) {
    function inner(i) {
        setTimeout(function() {
            console.log(i); // Outputs: 0, 1, 2, 3, 4
        }, 1000);
    }
   inner(k);
}

// How would you use a closure to create a private counter?

function createCounter() {
    let _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function getCount() {
        return _counter;
    }
    return {
        add,
        getCount
    };
}

var counter = createCounter();
counter.add(5);
console.log(counter.getCount()); // Outputs: 5

// What is Module Pattern in JavaScript?

// Module Pattern using Closures

var Module = (function() {
    let privateVar = "I am private";
    function privateMethod() {
        console.log(privateVar);
    }
    return {
        publicMethod: function() {
            privateMethod(); // Accesses private method
        }
    };
})();
Module.publicMethod(); // Outputs: I am private


