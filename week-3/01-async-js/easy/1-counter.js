// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let count = 0;

let id = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 5) {
    clearInterval(id);
    console.log("Stopped!");
  }
}, 1000);


let countor = 0;

let Id =setInterval(() => {

  countor++;
  console.log("countor : ", countor)

  if(countor === 12){
    clearInterval(Id);
    console.log(" End!!!! ")
  }
}, 1000);

