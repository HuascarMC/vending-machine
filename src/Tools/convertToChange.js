var convertToChange = function(a) {
  var result = []

    while(a > 0.00) {
      console.log("l");
      if(a >= 1.00) {
        result.push("DOLLAR")
        a -= 1.00;
        console.log(a);
      } else if (a >= 0.25) {
        result.push("QUARTER")
        a -= 0.25;
      } else if (a >= 0.10) {
        result.push("DIME")
        a -= 0.10;
      } else if (a >= 0.05) {
        result.push("NICKEL")
        a -= 0.050;
      } else if (a >= 0.009) {
        result.push("PENNY")
        a -= 0.01;
      } else {
        return result;
}
  }
  return result;
}

module.exports = convertToChange;
