// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out
// which car has an id of 33 by calling a function that will return the data for that car. Then log the
// car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*";

function testcase1(inventory, ID) {
  //let suppose I enter ID=33 from terminal
  for (let i = 0; i < inventory.length; i++) {
    let dictt = inventory[i]; //take each dictionary one by one from inventory array.

    if (dictt["id"] == ID) {
      //check ID is same or not
      let detail = []; // If ID is same store the complete detail of car in detail array
      detail.push(dictt["id"]);
      detail.push(dictt["car_year"]);
      detail.push(dictt["car_make"]);
      detail.push(dictt["car_model"]);
      return detail; //it return the data for that car.
    }
  }
}
module.exports = {
  publicTestcase: testcase1,
};
