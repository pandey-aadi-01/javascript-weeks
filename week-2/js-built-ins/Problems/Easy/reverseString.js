/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/


const str = "Sumana";

// function reve(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }

//   return reversed;
// }


function reve(str) {
  return str.split("").reverse().join("");
}
console.log(reve(str));


const str1 = "hello"


function reve(str1) {
  return str1.split("").reverse().join("");
}
console.log(reve(str1));

let str2 = " " ;

function reve(str2) {
  return str2.split("").reverse().join("");
}
console.log(reve(str2));
