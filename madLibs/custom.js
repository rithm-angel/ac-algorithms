// 1) Add a script tag to the bottom of the page for your code.

// 2) Add an event listener to the button so that it calls a makeMadLib function when clicked.

// 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes pink cucumbers.") -->

// Bonus: Make an object with the list elements as keys and the inputs as values.  

$(document).ready (function() {
function makeMadLib(e) {
e.preventDefault()
  var userInputNoun = $("#noun").val();
  var userInputAdjective = $("#adjective").val();
  var userInputPersonName = $("#person").val();

  $("#story").append("<p>The " + userInputAdjective + " " + userInputNoun + " went to search for " + userInputPersonName + ".</p>")
}
  $("#lib-button").on("click", function(e) {

makeMadLib(e)


  });
});





















