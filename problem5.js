function testcase5(arr) {
  //arr contain array of car-year
  let YearlessThan2000 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
      //
      YearlessThan2000.push(arr[i]);
    }
  }
  return YearlessThan2000; //it will return array of years<2000
}
module.exports = {
  publicTestcase5: testcase5,
};
