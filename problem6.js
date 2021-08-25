function testcase6(inventory) {
  let BMWAndAudi = [];
  for (let i = 0; i < inventory.length; i++) {
    let dictt = inventory[i];

    if (dictt["car_make"] == "BMW" || dictt["car_make"] == "Audi") {
      BMWAndAudi.push(inventory[i]);
    }
  }
  return BMWAndAudi;
}

module.exports = {
  publicTestcase6: testcase6,
};
