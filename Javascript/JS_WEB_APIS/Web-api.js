


// What is Web API?

// API stands for Application Programming Interface.

// A Web API is an application programming interface for the Web.

// A Browser API can extend the functionality of a web browser.

// A Server API can extend the functionality of a web serve

///////////////////////////////////////
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
//////////////////////////////////////////////



// Third Party APIs
// Third party APIs are not built into your browser.

// To use these APIs, you will have to download the code from the Web.

// Examples:

// YouTube API - Allows you to display videos on a web site.
// Twitter API - Allows you to display Tweets on a web site.
// Facebook API - Allows you to display Facebook info on a web site.


////////////////////////////////////////////////////////


// Web History API

{/* <button onclick="myFunction()">Go Back</button> */}

function myFunction() {
  window.history.back();
}

///////////////////////
function myFunction() {
  window.history.go(-2);
}

var x = history.length;

// ////////////////////////
               History_Object_Methods

Method      :	Description

back()        	// Loads the previous URL in the history list
forward()	   //  Loads the next URL in the history list
go()	       //  Loads a specific URL from the history list


                 Web_Storage_API

window.localStorage.setItem('name', 'Obaseki Nosa');
///

const person = {
    name: "Obaseki Nosa",
    location: "Lagos",
}

window.localStorage.setItem('user', JSON.stringify(person));

// RETRIVE 
JSON.parse(window.localStorage.getItem('user'));

//Delete
window.localStorage.removeItem('name');

// cleaar all

window.localStorage.clear();









