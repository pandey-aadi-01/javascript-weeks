/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/

// Level 1 (Warm-up)
// Remove something
// Then multiply
// const arr = [1, 2, 3, 4];

// let num = arr
//   .filter(n => n > 2)
//   .map(n => n * 2);

// console.log(num)

function findDuplicates(arr) {

  let seen = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {

    let value = arr[i];

    if (seen[value]) {
      duplicates.push(value);
    } else {
      seen[value] = true;
    }

  }

  return duplicates;
}
console.log(findDuplicates([10, 20, 20, 20, 30, 10, 40]));


function finddual(arr1) {
  let check = {};
  let store = [];

  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];

    if (check[value]) {
      store.push(value);
    }
    else {
      check[value] = true;
    }
  }
  return store;
}

console.log(finddual([10, 30, 10, 40]))

function emp(arr2) {
  let check = {};
  let store = [];

  for (let i = 0; i < arr1.length; i++) {
    let value = arr2[i];

    if (check[value]) {

      store.push(value);
    } else {
      check[value] = true;
    }
  }
  return store;
}
console.log(finddual([1, 2, 3, 4, 5]));


function empbox(arr3) {
  let check = {};
  let dual = [];

  for (let i = 0; i < arr3.length; i++) {
    let val = arr3[i];

    if (check[val]) {
      dual.push(val);
    }
    else {
      check[val] = ture;
    }
  }
  return dual;
}

console.log(empbox([]));
