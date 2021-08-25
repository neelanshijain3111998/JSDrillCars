// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory.
// Execute a function to find what the make and model of the last car in
// the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*";

function testcase2(inventory) {
  let last = inventory.length - 1;
  let dictt = inventory[last];
  let detail = [];
  detail.push(dictt["id"]);
  detail.push(dictt["car_year"]);
  detail.push(dictt["car_make"]);
  detail.push(dictt["car_model"]);
  return "Last car is a " + detail[2] + " " + detail[3];
}

module.exports = {
  publicTestcase2: testcase2,
};
