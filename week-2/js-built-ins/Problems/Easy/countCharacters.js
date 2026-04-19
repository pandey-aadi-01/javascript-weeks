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
