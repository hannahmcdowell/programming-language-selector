// Business Logic
function findMode(array) {
  let modeCount = 0;
  let mode = "";
  for(let i = 0; i < array.length; i += 1) {
    const currVal = array[i];
    let currCount = 1;
    for(let j = i; j < array.length; j += 1) {
      if(array[j] === currVal) {
        currCount += 1;
      }
    }
    if(currCount > modeCount) {
      modeCount = currCount;
      mode = currVal;
    }
  }
  return mode;
}

function isValid(array) {
  for(let i = 0; i < array.length; i += 1) {
    if(!array[i]) {
      return false;
    } 
  }
  return true;
}

// User Interface Logic
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    // clear previous response cards
    $("#pythonCard").hide();
    $("#javaScriptCard").hide();
    $("#javaCard").hide();
    $("#cCard").hide();

    // store user input data 
    const userName = $("input#name").val();
    const question1Val = $("input:radio[name=question1]:checked").val();
    const question2Val = $("input:radio[name=question2]:checked").val();
    const question3Val = $("input:radio[name=question3]:checked").val();
    const question4Val = $("input:radio[name=question4]:checked").val();
    const question5Val = $("input:radio[name=question5]:checked").val();

    // append the userName to each yourName span
    $(".yourName").text(userName);

    // determine which language the user should learn and show appropriate response
    const responses = [question1Val, question2Val, question3Val, question4Val, question5Val];
    const valid = isValid(responses);
    if(valid) {
      const responsesMode = findMode(responses);
      if(responsesMode === "a") {
        $("#pythonCard").show();
      } else if(responsesMode === "b") {
        $("#javaScriptCard").show();
      } else if(responsesMode === "c") {
        $("#javaCard").show();
      } else if(responsesMode === "d") {
        $("#cCard").show();
      }
    } else {
      
    }
    
  });
});