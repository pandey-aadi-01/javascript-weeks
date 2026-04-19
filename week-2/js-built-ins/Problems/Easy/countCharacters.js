/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countChar`
*/


let str = "hello";
function countCharacters(str) {
  let store = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (store[char]) {
      store[char] = store[char] + 1;
    }
    else {
      store[char] = 1;
    }
  }
  return store;
}
console.log(countCharacters(str));


let str1 = "aabbcc";
function countCharacters1() {
  let result = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (result[char]) {
      result[char] = result[char] + 1;
    }
    else {
      result[char] = 1;
    }
  }
  return result;

}

console.log(countCharacters1(str1));


const srting = "";

function countCharacters2() {
  let empty = {};

  for (let i = 0; i < srting.length; i++) {
    let space = String[i]

    if (empty[space]) {
      empty[space] = empty[space] + 1;
    }
    else {
      empty[space] = 1;
    }
  }
  return empty

}

console.log(countCharacters2(String));

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

function countOccurrences2 (emp) {
  for(let i = 0; i< emp.length; i++){
    let newval = emp[i];

    if(value2[newval]){
      value2[newval] = value2[newval]+1;

    }
    else{
      value2[newval] =1;
    }
  }
  return value2;
}
console.log(countOccurrences2(emp))
