// Business Logic


// User Interface Logic
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name").val();
    const question1Val = $("input:radio[name=question1]:checked").val();
  });
});