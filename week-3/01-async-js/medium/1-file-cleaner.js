// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("err catch :", err);
  }
  const cleaned = data.replace(/\s+/g, " ");
  console.log("done!", cleaned);
})




fs.readFile("b.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("the output", err)
  }
  const clean = data.replace(/\s+/g  ," ");
  console.log("trim successfully: " ,clean);
})

