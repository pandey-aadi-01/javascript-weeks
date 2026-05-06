// 1. Sum values in object arrays

//   ** Input:**
//     ```js
// { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }


const data = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
};
const result = {};

for (let key in data) {
  let sum = 0;

  for (let i = 0; i < data[key].length; i++) {
    sum += data[key][i];
  }
  result[key] = sum
}
console.log(result);

// 2. ** Count word occurrences in array **
//   - Input:["apple", "banana", "apple", "orange", "banana", "apple"]



const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let store = {};

for (let i = 0; i < arr.length; i++) {
  let word = arr[i];

  if (store[word]) {
    store[word] += 1;
  }
  else {
    store[word] = 1;
  }
}

console.log(store);

const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

let store1 = {};

for (let i = 0; i < array.length; i++) {
  let str = array[i];

  if (store1[str]) {
    store1[str] += 1;
  }
  else {
    store1[str] = 1;
  }
}
console.log(store1);



// 3. ** Swap keys and values of object **
//   - Input: { a: "x", b: "y", c: "z" }

const swap = { a: "x", b: "y", c: "z" };

let storeswap = {};

for (let key in swap) {
  let value = swap[key];

  storeswap[value] = key;
}

console.log(storeswap);

// 4. **Find the largest value key**
//     - Input:{ a: 10, b: 50, c: 20 }

const largest = { a: 10, b: 50, c: 20 };

let large = "";
let lowest = -Infinity;

for (let key in largest) {
  if (largest[key] > lowest) {
    lowest = largest[key];
    large = key;
  }
}
console.log(large);

const lgt = { a: 20, b: 60, x: 90 };

let grstvlaue = "";
let max = -Infinity;

for (let key in lgt) {
  if (lgt[key] > max) {
    max = lgt[key];
    grstvlaue = key;
  }
}
console.log(grstvlaue);

// 5. ** Flatten object of arrays into one array **
//   - Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }


const onearray = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"]
}

let storeingarr = [];

for( let key in onearray){
   let arr = onearray[key];
    for( let i = 0; i < arr.length; i++){
      storeingarr.push(arr[i]);
    }
}

console.log(storeingarr);

// 6. ** Group people by city **
//   - Input:[
// { name: "A", city: "Delhi" },
// { name: "B", city: "Mumbai" },
// { name: "C", city: "Delhi" }
// ]


