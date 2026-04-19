
/*
  Write a function `countOccurrences` which takes an array as input and returns an object representing the frequency of each element in the array.

  What is frequency?
  - The frequency of an element is the number of times it appears in the array.

  Example:
  - Input: [10, 20, 10, 30, 20, 20]
  - Output: { 10: 2, 20: 3, 30: 1 }

  - Input: [1, 2, 3, 1, 2, 1]
  - Output: { 1: 3, 2: 2, 3: 1 }

  - Input: []
  - Output: {}

  Once you've implemented the logic, test your code by running
  - `npm run test-occurrences`
*/
let arr = [10, 20, 10, 30, 20, 20];

function countOccurrences(arr) {

  let store = {};

  for (let i = 0; i < arr.length; i++) {

    let value = arr[i];

    if (store[value]) {
      store[value] = store[value] + 1;
    } else {
      store[value] = 1;
    }
  }

  return store;
}

console.log(countOccurrences(arr));


const number = [1, 2, 3, 1, 2, 1];
let store3 = {};

function countOccurrences1(number) {

  for (let i = 0; i < number.length; i++) {

    let val = number[i];

    if (store3[val]) {
      store3[val] = store3[val] + 1;
    }
    else {
      store3[val] = 1;
    }
  }
  return store3;
}
console.log(countOccurrences1(number));


const emp = [];

let value2 = {};

function countOccurrences2(emp) {
  for (let i = 0; i < emp.length; i++) {
    let newval = emp[i];

    if (value2[newval]) {
      value2[newval] = value2[newval] + 1;

    }
    else {
      value2[newval] = 1;
    }
  }
  return value2;
}
console.log(countOccurrences2(emp))
