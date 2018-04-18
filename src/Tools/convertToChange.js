var convertToChange = function(value) {
  var result = []
  while(value > 0.00) {
    if(value >= 1.00) {
      result.push("DOLLAR")
      value -= 1.00;
      console.log(value);
    } else if (value >= 0.25) {
      result.push("QUARTER")
      value -= 0.25;
    } else if (value >= 0.10) {
      result.push("DIME")
      value -= 0.10;
    } else if (value >= 0.05) {
      result.push("NICKEL")
      value -= 0.05;
    } else if (value >= 0.01) {
      result.push("PENNY")
      value -= 0.01;
    } else {
      return result;
    }
  }
  return result;
}

module.exports = convertToChange;
