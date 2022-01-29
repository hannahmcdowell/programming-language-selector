// Business Logic


// User Interface Logic
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name").val();
    const question1Val = $("input:radio[name=question1]:checked").val();
    const question2Val = $("input:radio[name=question2]:checked").val();
    const question3Val = $("input:radio[name=question3]:checked").val();
    const question4Val = $("input:radio[name=question4]:checked").val();
    const question5Val = $("input:radio[name=question5]:checked").val();

  });
});