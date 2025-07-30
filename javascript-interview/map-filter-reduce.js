// map filter reduce

// what is map?

const numbers = [1, 2, 3, 4, 5];

const multiplied3 = numbers.map((num, index, numbers) => {
    console.log(num, index, numbers);
    return num * 3;
})

console.log(multiplied3); // [3, 6, 9, 12, 15]

// what is filter?
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter((num) => {
    return num % 2 === 0;
})
console.log(evenNumbers); // [2, 4]

// what is reduce?
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num, index, numbers) => {
    console.log(acc, num, index, numbers);
    return acc + num;
}, 0);

console.log(sum); // 15

// polyfill for map

Array.prototype.myMap = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
} 

const nums = [1, 2, 3, 4]

const multiplied4 = nums.myMap((num, index, nums) => {
    return num * 4;
})

console.log(multiplied4);

// pollyfill for filter

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0;  i < this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const morethan2 = nums.myFilter((num, index, nums) => {
    return num > 2;
})

console.log(morethan2);

// pollyfill for reduce

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const sumOfArray = nums.myReduce((acc, num, index, nums) => {
    return acc + num;
}, 0)

console.log(sumOfArray);