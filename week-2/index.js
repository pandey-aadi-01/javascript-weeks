
// 1. Sum values in object arrays

// const arr1 = [3, 5, 7];
// let total = 0;
// for (let i = 0; i < arr1.length; i++) {
//   total += arr1[i];
// }

// console.log(total);

// const arr = [3, 5, 7];

// let total1 = 0;

// for (let i = 0; i < arr.length; i++) {
//   total1 += arr[i];
// }


// const arrays = [
//   [5, 10, 15],
//   [2, 4, 6],
//   [7, 8, 9]
// ];

// let sum = 0;
// for (let i = 0; i < arrays.length; i++) {
//   for (let j = 0; j < arrays[i].length; j++) {
//     sum += arrays[i][j];
//   }


// }
// const vlaue = {
//   food: sum,
//   waste: sum,
// }
// console.log("sum 0f arrays:", vlaue);


// // store result
// const result = {
//   // numbers: arr,
//   food: total
// };

// console.log(result);



// 1. Sum values in object arrays

//1. Loop through each "key" in the object.
// 2.For each "key," start a sum(initially 0).
// 3.Loop through the array under that key and add all the numbers.
//  4.Take the total sum and store it in the result object under the same key.
//  5.In the end, print the entire result object.

// Q1: add one array
const arr1 = [3, 5, 7];
let total = 0;
for (let i = 0; i < arr1.length; i++) {
  total += arr1[i];
}
console.log(total);


// Q2: add one array again
const arr = [3, 5, 7];
let total1 = 0;
for (let i = 0; i < arr.length; i++) {
  total1 += arr[i];
}


// Q3: add multiple arrays
const arrays = [
  [5, 10, 15],
  [2, 4, 6],
  [7, 8, 9]
];

let sum = 0;
for (let i = 0; i < arrays.length; i++) {
  for (let j = 0; j < arrays[i].length; j++) {
    sum += arrays[i][j];
  }
}

const vlaue = {
  food: sum,
  waste: sum,
};
console.log("sum:", vlaue);


// Q4: store result in object
const result = {
  food: total
};

console.log(result);


// 2. ** Count word occurrences in array **
//   - Input:

const arr3 = ["apple"];
const result1 = {};

let word = arr3[0];
result1[word] = 1;

console.log(result1);


const arr4 = ["apple", "apple"];

const result = {};


let word1 = arr4[0];
result[word1] = 1;

let word2 = arr4[1];
result[word2] = result[word2] + 1;

console.log(result);

const arr = ["apple", "apple", "apple"];

const result = {};

let w1 = arr[0];
result[w1] = 1;


let w2 = arr[1];
result[w2] = result[w2] + 1;


let w3 = arr[2];
result[w3] = result[w3] + 1;

console.log(result);

// 3. ** Swap keys and values of object **
//   - Input: { a: "x", b: "y", c: "z" }

const obj = { a: "x" };

const storeobj = {};

let vlaue = obj["a"]

storeobj[vlaue] = "a"

console.log(storeobj);
