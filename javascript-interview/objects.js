// Objects in JavaScript

const user = {
    name: "John",
    age: 30,
    "is admin": true,
}

user.age = 31; // Updating property value
delete user.name; // Deleting property
console.log(user); // Accessing property using dot notation
console.log(user["is admin"]); // Accessing property using bracket notation

// Dynamic property names
const propName = "age";
const userWithDynamicProp = {
    name: "Alice",
    [propName]: 25, // Using variable as property name
};
console.log(userWithDynamicProp);

// Print keys and values
for (const key in user) {
    console.log(`${key}: ${user[key]}`); // Using template literals for better readability
}

// Whats the output of the following?
const obj = {
    a: 1,
    b: 2,
    a: 3,
}

console.log(obj); // { a: 3, b: 2 } - Last property value overrides previous ones

// Multiply the values of all properties in an object by 2
const numbers = {
    x: 5,
    y: 10,
    z: "My String",
};
for (const key in numbers) {
    if (typeof numbers[key] === "number") {
        numbers[key] *= 2; // Only multiply if the value is a number
    }
}
console.log(numbers); // { x: 10, y: 20, z: "My String" }

// Whats the output of the following?

const a = {};
const b = {key: "b"};
const c = {key: "c"};
a[b] = 123; // b is converted to a string "[object Object]"
a[c] = 456; // c is also converted to a string "[object Object]"
console.log(a[b]); // 456 - Last assignment overrides the previous one
console.log(a[c]); // 456 - Same reason as above

// Whats is JSON.stringify() and JSON.parse()?
// JSON.stringify() converts a JavaScript object into a JSON string.
// JSON.parse() converts a JSON string back into a JavaScript object.

const StrUser = JSON.stringify(user); // Convert object to JSON string
const parsedUser = JSON.parse(StrUser); // Convert JSON string back to object
console.log(parsedUser); // { age: 31, "is admin": true }   

// Where can we use JSON.stringify() and JSON.parse()?
// 1. Storing data in localStorage or sessionStorage
// 2. Sending data to a server via AJAX requests
// 3. Saving data in files or databases
// 4. Configuring settings in applications
// 5. Serializing complex data structures for transmission or storage
// 6. Interacting with APIs that require JSON format
// 7. Debugging and logging data in a readable format
// 8. Converting objects to strings for display or storage in text files

// Whats the output of the following?
console.log([...'Lydia']); // ['L', 'y', 'd', 'i', 'a'] - Spread operator converts string to array of characters

// Whats the output of the following?
const person = {
    name: "John",
    age: 30,
}

const admin = {admin: true, ...person}; // Spread operator merges properties
console.log(admin); // { admin: true, name: "John", age: 30

// What is destructuring in JavaScript?
// Destructuring is a syntax that allows unpacking values from arrays or properties from objects into
const {name, age} = user; // Extracting properties from an object
console.log(name, age); // John 31

