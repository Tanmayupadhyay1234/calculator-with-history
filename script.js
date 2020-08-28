console.clear();
var historyId = 0;
var result;
function calcEval() {
    if (calcScreen.value.indexOf("^") !== -1) {
      var expArray = calcScreen.value.split("^");
      console.log(expArray);
      calcScreen.value = "Math.pow(" + expArray[0] + "," + expArray[1] + ")";
    }

    if (isNaN(eval(calcScreen.value))) {
        calcScreen.value = "ERROR";
    } else {
        historyId++;
        $("#history").append("<li id='history-" + historyId + "'>" + calcScreen.value + "</li>");
        result = eval(calcScreen.value);
        calcScreen.placeholder = result;
        $("#history-" + historyId).append(" = " + result);
    }
    console.log(calcScreen.value);
}

function calcSquare() {
    if (isNaN(eval(calcScreen.value * calcScreen.value))) {
        calcScreen.value = "ERROR";
    } else {
        historyId++;
        $("#history").append("<li id='history-" + historyId + "'>" + calcScreen.value + "<sup>2</sup></li>");
        result = eval(calcScreen.value * calcScreen.value);
        $("#history-" + historyId).append(" = " + result);
    }
}

function addToTextArea(char) {
  if(calcScreen.value.length < 14) {
      calcScreen.value += char;
  }
}