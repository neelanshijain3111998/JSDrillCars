// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
// Execute a function that will return an array from the dealer data
// containing only the car years and log the result in the console as it was returned.

function testcase4(inventory) {
  let detail = [];
  for (let i = 0; i < inventory.length; i++) {
    let dictt = inventory[i];
    detail.push(dictt["car_year"]);
  }
  return detail;
}
module.exports = {
  publicTestcase4: testcase4,
};
