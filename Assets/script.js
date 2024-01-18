// The current date in the header of the page.
window.onload = function() {
  setInterval(function(){
    // Give us the current time and date
      var date = new Date();
    // Convert the date portion of the Date object into a string using the current locale’s settings
      var displayDate = date.toLocaleDateString();
    // Convert the time portion of the Date object into a string using the current locale’s settings
      var displayTime = date.toLocaleTimeString();
    // Takes the formatted date and time strings and shows it in the HTML
      document.getElementById('currentDay').innerHTML = displayDate + " " + displayTime;
  }, 1000); 
}



// Wrap that interacts with the DOM 
$(document).ready(function () {

  // the click event listener to the save button
  $(".saveBtn").on("click", function() {
    // Get the user input and the corresponding time-block id
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  



function trackTime() {
// Get the current hour using moment.js
var currentHour = moment().hour();

// Loop through each time block element
$(".time-block").each(function() {
  // Get the id of the time block element, which is the hour in 24-hour format
    var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);
 
  // Compare the time block hour with the current hour and apply the appropriate class
  if (timeBlockHour < currentHour) {
    // If the time block hour is less than the current hour, it is in the past
    $(this).addClass("past");
    
  } else if (timeBlockHour == currentHour) {
    // If the time block hour is equal to the current hour, it is in the present
    $(this).addClass("present");
    
  } else {
    // If the time block hour is greater than the current hour, it is in the future
    $(this).addClass("future");
    
  }
})}



// Loop iterates through the hours from 9 to 17
for (var i = 9; i <= 17; i++) {
  var key = "hour" + i;
// Set value of each description for each hour by getting corresponding value from the local storage
  $("#" + key + " .description").val(localStorage.getItem(key));
}



trackTime();



})

























