// Q1. Double each number (map)
// Input: [1, 2, 3]

const arr = [1, 2, 3];

const newarr = arr.map(n => n * 2);

console.log(newarr);

// function


const num = [1, 2, 3, 6, 9];


const fun = num.map(function (n) {
  return n * 2;
})

console.log(fun)


const num1 = [3, 6, 9];

const funs = function (n) {
  return n * 2;
}

const ans = num1.map(funs);
console.log(ans)

// Q2.Convert numbers to strings(map)
// Input: [1, 2, 3]
// Output: ["1", "2", "3"]

const str = [1, 2, 3];

const tostr = str.map(n => n.toString());

console.log(tostr)


// Q3.Keep only even numbers(filter)
// Input: [1, 2, 3, 4]
// Output: [2, 4]
