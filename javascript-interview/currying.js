// Currying in JS
// Function to add two numbers

function add(a) {
    return function(b) {
        return a + b;
    };
}
// Example usage
const add5 = add(5);
console.log(add5(10)); // Outputs: 15

// Currying with multiple arguments
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
// Example usage
console.log(multiply(2)(3)(4)); // Outputs: 24

// Infinite currying

function infiniteCurrying(fn) {
    const inner = (...args) => {
        if (args.length === 0) {
            return fn();
        }
        return (...nextArgs) => inner(...args, ...nextArgs);
    };
    return inner;
}
const sum = infiniteCurrying((...args) => args.reduce((acc, num) => acc + num, 0));
console.log(sum(1)(2)(3)()); // Outputs: 6

// Currying vs Partial Application
function partial(fn, ...args) {
    return function(...newArgs) {
        return fn(...args, ...newArgs);
    };
}

function addThreeNumbers(a, b, c) {
    return a + b + c;
}
const addFiveAndSix = partial(addThreeNumbers, 5, 6);
console.log(addFiveAndSix(10)); // Outputs: 21

// curry function implementation

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    }
}

