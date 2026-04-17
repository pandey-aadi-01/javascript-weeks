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

let store1 ={};

for(let i = 0; i < array.length; i++){
  let str = array[i];

  if(store1[str]){
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

