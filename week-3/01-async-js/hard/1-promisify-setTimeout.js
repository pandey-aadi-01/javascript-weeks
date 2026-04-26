/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function Seconds(n) {
//   let p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, n * 1000);
//   });
//   return;
// }

function Seconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
};

const waitFor2Seconds = Seconds(2);

waitFor2Seconds.then(() => {
  console.log("2 seconds have passed");
});
