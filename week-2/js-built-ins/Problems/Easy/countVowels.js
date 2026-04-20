/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

// function countVowels(str) {
//   let count = 0;
//   let vowels = "aeiou";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("hello world"));

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;

}
console.log(countVowels(" Hello World"))


function countVowels1(str1) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i].toLowerCase();

    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;

}
console.log(countVowels1("AEIOUaeiou"))

function countVowels2(str2) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels2("xyz"));

function countVowels3(str3) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str3.length; i++) {
    let value = str3[i];

    if (vowels.includes[value]) {
      count++;
    }
  }
  return count
}

console.log(countVowels3(""));
