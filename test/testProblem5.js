const inventoryy = require("../inventoryRecord.js").inventory;
const pr51 = require("../problem4.js"); //from Problem4 I will take the array of years.
let arr = pr51.publicTestcase4(inventoryy);

const pr52 = require("../problem5.js"); //pass the array of years in problem5
console.log(pr52.publicTestcase5(arr));
console.log(pr52.publicTestcase5(arr).length);
