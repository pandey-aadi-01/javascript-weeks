// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counnt = 0;

const runcode = () => {
  counnt++;
  console.log("print :", counnt)

  if (counnt === 6) {
    console.log("end here")
    return;
  }
  setTimeout(runcode, 1000)
}

runcode();

let counter = 0;

function runcd() {
  counter = counter + 1;
  console.log(counter);

  if (counter === 13){
    console.log(" work done")
    return;
  }
  setTimeout(runcd, 1000)
}
runcd();
