//document.ready function
$(document).ready(function() {
   //add event listener for save button click on a given time slot and call text storage function
    $(".saveBtn").on("click", function() {
      // fetch sibling values
      var description = $(this).siblings("#text-block").val();
      var time = $(this).parent().attr("id");
  
      // save description to local storage assosiated with the time slot
      localStorage.setItem(time, description);
    });
});

// gets data from a given time slot text area in local storage

$("#time-9 #text-block").val(localStorage.getItem("time-9"));
$("#time-10 #text-block").val(localStorage.getItem("time-10"));
$("#time-11 #text-block").val(localStorage.getItem("time-11"));
$("#time-12 #text-block").val(localStorage.getItem("time-12"));
$("#time-13 #text-block").val(localStorage.getItem("time-13"));
$("#time-14 #text-block").val(localStorage.getItem("time-14"));
$("#time-15 #text-block").val(localStorage.getItem("time-15"));
$("#time-16 #text-block").val(localStorage.getItem("time-16"));
$("#time-17 #text-block").val(localStorage.getItem("time-17"));

// function that calls a luxon framework to display current day and time using the "currentDay" ID
var currentDT = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY);
$("#currentDay").text(currentDT);


function timeCheck() {
    // gets current time
    var currentTime = luxon.DateTime.now().hour;
    //console.log(currentTime);

    // loop over each row and check if the row is past present or future and apply proper css class for color
    $(".row").each(function() {
      var selectedHour = parseInt($(this).attr("id").split("-")[1]);
      //console.log(selectedHour);
      if (selectedHour < currentTime) {
        $(this).addClass("past");
      } 
      else if (selectedHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  //set interval to check for time and adjust color coding for each row by running the timecheck function
  
  timeCheck();
  var interval = setInterval(timeCheck, 30000);





    