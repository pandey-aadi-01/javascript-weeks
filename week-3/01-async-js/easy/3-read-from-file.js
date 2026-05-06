// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {

//   if (err) {
//     console.log("file", err)
//     return;
//   }
//   else {
//     console.log("File:", data);
//   }
// });

// let ans = 0;
// for (let i = 1; i <= 1000000000; i++) {
//   ans += i;
// }
// console.log("Loop:", ans);


 fs.readFile("a.txt", "utf-8", (err, data) => {
  if (data ) {
    console.log("file read :", err);
  }
  else{
    console.log("err catch :", data)
    return ;
  }
})

let ans1 =0;
for(let i = 0; i<1000000000; i++){
 ans1 += 1;
}

console.log(ans1)
