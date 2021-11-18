//global variables


//array of time slot objects for working hours
var timeSlots = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };

//document.ready function


// function that calls a luxon framework to display current day and time using the "currentDay" ID
var currentDT = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY);
$("#currentDay").text(currentDT)

// function that saves text data for a given time slot to local storage

//add event listener for save button click on a given time slot and call text storage function