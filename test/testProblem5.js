const inventoryy = require("../inventoryRecord.js").inventory;
const pr51 = require("../problem4.js");
let arr = pr51.publicTestcase4(inventoryy); //from Problem4 I will take the array of years.

const pr52 = require("../problem5.js"); //pass the array of years in problem5
console.log(pr52.publicTestcase5(arr)); //it will print years<2000
console.log(pr52.publicTestcase5(arr).length); //Count of cars older than the year 2000
