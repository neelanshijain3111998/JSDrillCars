// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and
// log the results in the console as it was returned.

function testcase3(inventory) {
  let detail = [];
  for (let i = 0; i < inventory.length; i++) {
    let dictt = inventory[i];
    detail.push(dictt["car_model"]); //pushing the car model one by one into the array
  }
  return detail.sort(); //it return array of car models alphabetically
}
module.exports = {
  publicTestcase3: testcase3,
};
