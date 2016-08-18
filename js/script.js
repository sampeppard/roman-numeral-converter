$(document).ready(function() {
// Business Logic
var toRoman = function(num) {

  var romanValOnes = ["", "I","II","III","IV","V","VI","VII","VIII","IX"];
  var romanValTens = ["", "X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var romanValHundreds = ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var romanValThou = ["", "M","MM","MMM","Mv"];
  var testNum = num.toString().split("");
  var romanNumeral = [];

  // Do nothing to 0.
  // Do nothing to numbers higher than 3,999.
  if (num === 0 || num > 3999) {
    alert("Please enter a number greater than 0 and less than 4,000");
  }
  else {
    // NUMBERS IN THOUSANDS
    if (testNum.length === 4) {
      for (var m = 0; m < romanValThou.length; m++) {
        if (testNum[0] == m) {
          romanNumeral.push(romanValThou[m]);
        }
      }
      for (var c = 0; c < romanValHundreds.length; c++) {
        if (testNum[1] == c) {
          romanNumeral.push(romanValHundreds[c]);
        }
      }
      for (var d = 0; d < romanValTens.length; d++) {
        if (testNum[2] == d) {
          romanNumeral.push(romanValTens[d]);
        }
      }
      for (var u = 0; u < romanValOnes.length; u++) {
        if (testNum[3] == u) {
          romanNumeral.push(romanValOnes[u]);
        }
      }
    }
    // NUMBERS IN HUNDREDS
    else if (testNum.length === 3) {
      for (var c = 0; c < romanValHundreds.length; c++) {
        if (testNum[0] == c) {
          romanNumeral.push(romanValHundreds[c]);
        }
      }
      for (var d = 0; d < romanValTens.length; d++) {
        if (testNum[1] == d) {
          romanNumeral.push(romanValTens[d]);
        }
      }
      for (var u = 0; u < romanValOnes.length; u++) {
        if (testNum[2] == u) {
          romanNumeral.push(romanValOnes[u]);
        }
      }
    }
    // NUMBERS IN TENS
    else if (testNum.length === 2) {
      for (var d = 0; d < romanValTens.length; d++) {
        if (testNum[0] == d) {
          romanNumeral.push(romanValTens[d]);
        }
      }
      for (var u = 0; u < romanValOnes.length; u++) {
        if (testNum[1] == u) {
          romanNumeral.push(romanValOnes[u]);
        }
      }
    }
    // NUMBERS IN ONES
    else if (testNum.length === 1) {
      for (var u = 0; u < romanValOnes.length; u++) {
        if (testNum[0] == u) {
          romanNumeral.push(romanValOnes[u]);
        }
      }
    }

    var result = romanNumeral.join("");
    console.log(result);
    return result;

  }

}

// User Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#converted-number").text("");
    var romanNumeralResult = toRoman(number);
    $("#converted-number").text(romanNumeralResult);
  });
});