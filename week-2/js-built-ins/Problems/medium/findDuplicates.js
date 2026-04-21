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
const arr = [1, 2, 3, 4];

let num = arr
  .filter(n => n > 2)
  .map(n => n * 2);

console.log(num)


