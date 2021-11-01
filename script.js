// data variables
var todayDate = new Date();
var formatDate = moment(todayDate).format('dddd, MMMM DD, YYYY')
var dateOutput = document.querySelector("#currentDay").innerHTML =`${formatDate}`;
//converting to military time
var currentHour = moment().format("H");
console.log(currentHour);
// Getting local storage data
var nineData = localStorage.getItem('textAreaKey9');
var tenData = localStorage.getItem('textAreaKey10');
var elevenData = localStorage.getItem('textAreaKey11');
var noonData = localStorage.getItem('textAreaKey12');
var onepmData = localStorage.getItem('textAreaKey13');
var twopmData = localStorage.getItem('textAreaKey14');
var threepmData = localStorage.getItem('textAreaKey15');
var fourpmData = localStorage.getItem('textAreaKey16');
var fivepmData = localStorage.getItem('textAreaKey17');

//this line of code updates the value from the localStorage
var getTextArea9 = document.getElementById("9");
getTextArea9.value = nineData ;

var getTextArea10 = document.getElementById("10");
getTextArea10.value = tenData ;

var getTextArea11 = document.getElementById("11");
getTextArea11.value = elevenData ;

var getTextArea12 = document.getElementById("12");
getTextArea12.value = noonData ;

var getTextArea13 = document.getElementById("13");
getTextArea13.value = onepmData ;

var getTextArea14 = document.getElementById("14");
getTextArea14.value = twopmData ;

var getTextArea15 = document.getElementById("15");
getTextArea15.value = threepmData ;

var getTextArea16 = document.getElementById("16");
getTextArea16.value = fourpmData ;

var getTextArea17 = document.getElementById("17");
getTextArea17.value = fivepmData ;



console.log(currentHour)
  // getting 9 am hour

  if  (currentHour > 9 ){
    console.log("LIGHTGREY - past ")
    getTextArea9.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 9 ){
       console.log("RED -present ")
       getTextArea9.style.backgroundColor ="red";
     }
   if  (currentHour < 9 ){
     console.log("LIGHTGREEN -future ")
     getTextArea9.style.backgroundColor ="lightgreen";
   }
/* nine am function */
var saveButton9 = document.querySelector("#saveBtn9").addEventListener("click", nine_amFunction)
function nine_amFunction(){
var getTextArea9 = document.getElementById("9").value;
  // save in localStorage
localStorage.setItem("textAreaKey9", getTextArea9);
};






  // getting 10 
  if  (currentHour > 10 ){
    console.log("LIGHTGREY - past ")
    getTextArea10.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 10 ){
       console.log("RED -present ")
       getTextArea10.style.backgroundColor ="red";
     }
   if  (currentHour < 10 ){
     console.log("LIGHTGREEN -future ")
     getTextArea10.style.backgroundColor ="lightgreen";
   }
/* Getting 10 am function */
var saveButton10 = document.querySelector("#saveBtn10").addEventListener("click", ten_amFunction)
function ten_amFunction(){
var getTextArea10 = document.getElementById("10").value;
  // save in localStorage
localStorage.setItem("textAreaKey10", getTextArea10);
};





  // getting 11 
  if  (currentHour > 11 ){
    console.log("LIGHTGREY - past ")
    getTextArea11.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 11 ){
       console.log("RED -present ")
       getTextArea11.style.backgroundColor ="red";
     }
   if  (currentHour < 11 ){
     console.log("LIGHTGREEN -future ")
     getTextArea11.style.backgroundColor ="lightgreen";
   }
//This code will allow the 11:am time block to load
var saveButton11 = document.querySelector("#saveBtn11").addEventListener("click", eleven_amFunction)
function eleven_amFunction(){
var getTextArea11 = document.getElementById("11").value;
  // save in localStorage
localStorage.setItem("textAreaKey11", getTextArea11);
};



  // getting 12 
  if  (currentHour > 12 ){
    console.log("LIGHTGREY - past ")
    getTextArea12.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 12 ){
       console.log("RED -present ")
       getTextArea12.style.backgroundColor ="red";
     }
   if  (currentHour < 12 ){
     console.log("LIGHTGREEN -future ")
     getTextArea12.style.backgroundColor ="lightgreen";
   }
//This code will allow the 11:am time block to load
var saveButton12 = document.querySelector("#saveBtn12").addEventListener("click", noon_Function)
function noon_Function(){
var getTextArea12 = document.getElementById("12").value;
  // save in localStorage
localStorage.setItem("textAreaKey12", getTextArea12);
};









  // getting 1 PM
  if  (currentHour > 13 ){
    console.log("LIGHTGREY - past ")
    getTextArea13.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 13 ){
       console.log("RED -present ")
       getTextArea13.style.backgroundColor ="red";
     }
   if  (currentHour < 13 ){
     console.log("LIGHTGREEN -future ")
     getTextArea13.style.backgroundColor ="lightgreen";
   }
//This code will allow the 11:am time block to load
var saveButton13 = document.querySelector("#saveBtn13").addEventListener("click", onepm_Function)
function onepm_Function(){
var getTextArea13 = document.getElementById("13").value;
  // save in localStorage
localStorage.setItem("textAreaKey13", getTextArea13);
};













  // getting 1 PM
  if  (currentHour > 14 ){
    console.log("LIGHTGREY - past ")
    getTextArea14.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 14 ){
       console.log("RED -present ")
       getTextArea14.style.backgroundColor ="red";
     }
   if  (currentHour < 14 ){
     console.log("LIGHTGREEN -future ")
     getTextArea14.style.backgroundColor ="lightgreen";
   }
//This code will allow the  2pm time block to load
var saveButton14 = document.querySelector("#saveBtn14").addEventListener("click", twopm_Function)
function twopm_Function(){
var getTextArea14 = document.getElementById("14").value;
  // save in localStorage
localStorage.setItem("textAreaKey14", getTextArea14);
};








  // getting 1 PM
  if  (currentHour > 15 ){
    console.log("LIGHTGREY - past ")
    getTextArea15.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 15 ){
       console.log("RED -present ")
       getTextArea15.style.backgroundColor ="red";
     }
   if  (currentHour < 15 ){
     console.log("LIGHTGREEN -future ")
     getTextArea15.style.backgroundColor ="lightgreen";
   }
//This code will allow the 11:am time block to load
var saveButton15 = document.querySelector("#saveBtn15").addEventListener("click", threepm_Function)
function threepm_Function(){
var getTextArea15 = document.getElementById("15").value;
  // save in localStorage
localStorage.setItem("textAreaKey15", getTextArea15);
};
//This code will allow the 11:am time block to load
var saveButton16 = document.querySelector("#saveBtn16").addEventListener("click", fourpm_Function)
function fourpm_Function(){
var getTextArea16 = document.getElementById("16").value;
  // save in localStorage
localStorage.setItem("textAreaKey16", getTextArea16);
};











  // getting 1 PM
  if  (currentHour > 16 ){
    console.log("LIGHTGREY - past ")
    getTextArea16.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 16 ){
       console.log("RED -present ")
       getTextArea16.style.backgroundColor ="red";
     }
   if  (currentHour < 16 ){
     console.log("LIGHTGREEN -future ")
     getTextArea16.style.backgroundColor ="lightgreen";
   }


  // getting 9 am hour
  if  (currentHour > 17 ){
    console.log("LIGHTGREY - past ")
    getTextArea17.style.backgroundColor ="lightgrey";
     }
     if  (currentHour === 17 ){
       console.log("RED -present ")
       getTextArea17.style.backgroundColor ="red";
     }
   if  (currentHour < 17 ){
     console.log("LIGHTGREEN -future ")
     getTextArea17.style.backgroundColor ="lightgreen";
   }

//This code will allow the 11:am time block to load
var saveButton17 = document.querySelector("#saveBtn17").addEventListener("click", fivepm_Function)
function fivepm_Function(){
var getTextArea17 = document.getElementById("17").value;
  // save in localStorage
localStorage.setItem("textAreaKey17", getTextArea17);
};