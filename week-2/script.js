// 1. Sum values in object arrays

//   ** Input:**
//     ```js
// { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }


const arrays = [
  [5, 10, 15],
  [2, 4, 6],
  [7, 8, 9]
];

let sum = 0;
let result ={};
for( let i= 0; i< arrays.length; i++){
  for (let j = 0; j < arrays[i].length; j++){
    sum += arrays[i][j];
  }

}

console.log( "sum 0f arrays:" ,sum);


const arr = [3, 5, 7];

 let total =0;
  for(let i = 0; i <arr.length; i++){
    total += arr[i];
  }

  console.log(total);
