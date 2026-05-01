// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


const fs = require("fs");

function readFileP(callfn) {

  return new Promise(function (resolve, reject) {

    fs.readFile(callfn, "utf-8", function (err, data) {

      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }

    })

  })

}


function callbackify(fn) {

  return function (callfn, callback) {

    fn(callfn).then(function (data) {

      callback(null, data)

    }).catch(function (err) {

      callback(err)

    })

  }

}



const readFileCb = callbackify(readFileP)



readFileCb("a.txt", function (err, data) {

  if (err) {
    console.log("Error catch :", err)
  }

  else {
    console.log("data printed :", data)
  }

})



/*
This code is written by me for learning purposes.

I am practicing:

* Promise
* Callback
* callbackify concept

I tried different versions to understand how it works.
*/


// const fs = require("fs");

// function callbackify(fn) {

//   return new Promise(function (resolve, reject) {
//     fs.readFile(fn, "utf-8", function (err, data) {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })

// }
// const readFileCallback = callbackify(readFilePromise);

// readFileCallback("a.txt", function (err, data) {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Success:", data);
//   }
// });







// const fs = require("fs");

// function readFilePromise(myFile) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(myFile, "utf-8", function (err, data) {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// }

// readFilePromise("a.txt")
//   .then(function (data) {
//     console.log("File data:", data);
//   })
//   .catch(function (err) {
//     console.log("Error:", err);
//   });










//2
// // Promise returning function
// function r eadFilePromise(fileName) {
//   const fs = require("fs");

//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileName, "utf-8", function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// // convert to callback style
// const readFileCallback = callbackify(readFilePromise);       ye line kha se aye

// // use it
// readFileCallback("a.txt", function (err, data) {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Success:", data);
//   }
// });
