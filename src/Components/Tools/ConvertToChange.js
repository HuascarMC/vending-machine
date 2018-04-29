var ConvertToChange = function(amount) {
  var result = []

  while(amount > 0.00) {
    if(amount >= 1.00) {
      result.push("DOLLAR")
      amount -= 1.00;
    } else if (amount >= 0.25) {
      result.push("QUARTER")
      amount -= 0.25;
    } else if (amount >= 0.10) {
      result.push("DIME")
      amount -= 0.10;
    } else if (amount >= 0.05) {
      result.push("NICKEL")
      amount -= 0.050;
    } else if (amount >= 0.009) {
      result.push("PENNY")
      amount -= 0.01;
    } else {
      return result;
    }
  }
  return result;
}

module.exports = ConvertToChange;
