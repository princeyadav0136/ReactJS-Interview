// Promises in Javascript
// Synchronous vs Asynchronous Code
// Synchronous code runs sequentially, blocking the execution of subsequent code until the current operation completes.
// Asynchronous code allows other operations to run while waiting for a task to complete, improving performance and responsiveness.

// Sync Code
console.log("Start");
console.log("Middle");
console.log("End");

// Async Code
console.log("Start");
// setTimeout(() => {
//   console.log("Middle");
// }, 1000); // Simulates a delay of 1 second
console.log("End");

// Callbacks

function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched";
    callback(data);
  }, 1000);
}

// fetchData((data) => {
//   console.log(data); // "Data fetched"
// });

function checkTheProduct(callback) {
    setTimeout(() => {
        const product = "Product is available";
        callback(product);
    }, 2000);
}

function addToCart(product, callback) {
    setTimeout(() => {
        const cartMessage = `${product} added to cart`;
        callback(cartMessage);
    }, 1000);
}

function checkout(cartMessage, callback) {
    setTimeout(() => {
        const orderMessage = `${cartMessage}. Checkout complete!`;
        callback(orderMessage);
    }, 1500);
}

// checkTheProduct((product) => {
//     console.log(product)
//     addToCart("Stationary", (cartMessage) => {
//         console.log(cartMessage)
//         checkout("Hello", (orderMessage) => {
//             console.log(orderMessage);
//         })
//     })
// })

// nested callbacks look like messy also known as "Callback Hell" 
// Solution: Promises

// Promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if(result){
            resolve("Success")
        }
        else{
            reject("Failure")
        }
    }, 2000)
})

// promise.then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
// })

function checkTheProductPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Product is Available");
    }, 2000);
    })
}

function addToCartPromise(product) {
    return new Promise((resolve, reject) => {
        reject(`${product} added to cart`)
    })
}

function checkoutPromise(cartMessage) {
    return new Promise((resolve, reject) => {
        resolve(`${cartMessage}. Checkout complete!`)
    })
}

// First way to print
// checkTheProductPromise().then((res) => {
//     console.log(res);
//     addToCartPromise("Stationary").then((res) => {
//         console.log(res);
//         checkoutPromise("Hello").then((res) => {
//             console.log(res);
//         })
//     })
// }).catch((err) => {
//     console.error(err);
// })

// Second way  - Chaining
// checkTheProductPromise().then((res) => {
//     console.log(res);
//     return addToCartPromise("Stationary2")
// }).then((res) => {
//     console.log(res);
//     return checkoutPromise("Hello2");
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

// Third way - Promise Combinators
// Promise Combinators allow you to run multiple promises in parallel and wait for all of them to complete.
// There are four types of combinators:
// 1. Promise.all - Waits for all promises to resolve or any to reject.
// 2. Promise.allSettled - Waits for all promises to settle (resolve or reject) and returns an array of results.
// 3. Promise.race - Returns the result of the first promise that resolves or rejects.
// 4. Promise.any - Returns the first resolved promise, ignoring rejections.

// Promise.all
// Promise.all([
//     checkTheProductPromise(),
//     addToCartPromise("Stationary3"),
//     checkoutPromise("Hello3")
// ]).then((results) => {
//     console.log("All promises resolved:", results);
// }).catch((err) => {
//     console.error("One of the promises failed:", err);
// });

// Promise.allSettled
// Promise.allSettled([
//     checkTheProductPromise(),
//     addToCartPromise("Stationary4"),
//     checkoutPromise("Hello4")
// ]).then((results) => {
//     console.log("All promises settled:", results);
// }).catch((err) => {
//     console.error("One of the promises failed:", err);
// });

// Promise.race
// Promise.race([
//     checkTheProductPromise(),
//     addToCartPromise("Stationary5"),
//     checkoutPromise("Hello5")
// ]).then((result) => {
//     console.log("First promise resolved:", result);
// }).catch((err) => {
//     console.error("One of the promises failed:", err);
// });

// Promise.any
// Promise.any([
//     checkTheProductPromise(),
//     addToCartPromise("Stationary6"),
//     checkoutPromise("Hello6")
// ]).then((result) => {
//     console.log("First resolved promise:", result);
// }).catch((err) => {
//     console.error("All promises failed:", err);
// });

// Async/Await
// Async/Await is a syntax that allows you to write asynchronous code in a more synchronous style
// It is built on top of Promises and makes the code easier to read and maintain.

const result = async () => {
    try {
        const product = await checkTheProductPromise();
        console.log(product);
        const cartMessage = await addToCartPromise("Stationary7");
        console.log(cartMessage);
        const orderMessage = await checkoutPromise("Hello7");
        console.log(orderMessage);
    } catch (err) {
        console.error(err);
    }
};

// result();

// Whats the output
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
})

promise1.then((res) => {
    console.log(res);
})

console.log("end");

// Whats the output
const job = () => {
    return new Promise((resolve, reject) => {
        reject();
    })
}

let promise2 = job();

promise2.then((res) => {
    console.log("Success1");
}).then((res) => {
    console.log("Success2");
}).then((res) => {
    console.log("Success3");
}).catch((err) => {
    console.log("Error 1"); // Error 1
}).then((res) => {
    console.log("Success4"); // Success4
})

// Whats the output
const job2 = (state) => {
    return new Promise((resolve, reject) => {
        if(state) {
            resolve("success")
        }
        else{
            reject("error")
        }
    })
}

const promise3 = job2(true);

promise3.then((data) => {
    console.log(data); //success
    return job2(true);
}).then((data) => {
    if(data !== "victory") {
        throw "defeat";
    }
    return job2(true);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error); //defeat
    return job2(false);
}).then((data) => {
    console.log(data);
    return job2(true);
}).catch((error) => {
    console.log(error); // error
    return "Error Caught";
}).then((data) => {
    console.log(data); // Error Caught
    return new Error("test") // not returning promise
}).then((data) => {
    console.log("Success :" + data.message); // Success: test
}).catch((error) => {
    console.log("Failure :" + error.message);
})


// Promise Polyfill Implementation