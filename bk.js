if  (currentHour < 9 ){
    console.log("GREY -past ")
    getTextArea9.style.backgroundColor ="red"
  }
  
  if  (currentHour > 9){
    console.log("lightblue -future")
    getTextArea9.style.backgroundColor ="lightblue"
  }
  
  if  (currentHour  ===  9){
    console.log("GREEN- present" )
    getTextArea9.style.backgroundColor ="green"
  }
  /* nine am function */
  var saveButton9 = document.querySelector("#saveBtn9").addEventListener("click", nine_amFunction)
  function nine_amFunction(){
  var getTextArea9 = document.getElementById("9").value;
    // save in localStorage
  localStorage.setItem("textAreaKey9", getTextArea9);
  };
  
  
  //This code will allow the 10:am time block to load
  if  (currentHour < 10){
    console.log("GREY -past ")
    getTextArea10.style.backgroundColor ="grey"
  }
  if  (currentHour > 10){
    console.log("lightblue -future")
    getTextArea10.style.backgroundColor ="lightblue"
  }
  
  if  (currentHour  ===  10){
    console.log("GREEN- present" )
    getTextArea10.style.backgroundColor ="green"
  }
  /* Getting 10 am function */
  var saveButton10 = document.querySelector("#saveBtn10").addEventListener("click", ten_amFunction)
  function ten_amFunction(){
  var getTextArea10 = document.getElementById("10").value;
    // save in localStorage
  localStorage.setItem("textAreaKey10", getTextArea10);
  };
  
  
  
  
  
  //This code will allow the 11:am time block to load
  if  (currentHour < 11){
    console.log("GREY -past ")
    getTextArea11.style.backgroundColor ="grey"
  }
  if  (currentHour > 11){
    console.log("lightblue -future")
    getTextArea11.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  11){
    console.log("GREEN- present" )
    getTextArea11.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton11 = document.querySelector("#saveBtn11").addEventListener("click", eleven_amFunction)
  function eleven_amFunction(){
  var getTextArea11 = document.getElementById("11").value;
    // save in localStorage
  localStorage.setItem("textAreaKey11", getTextArea11);
  };
  
  
  
  //This code will allow the noon  time block to load
  getTextArea12.value = noonData ;
  if  (currentHour < 12){
    console.log("GREY -past ")
    getTextArea12.style.backgroundColor ="grey"
  }
  if  (currentHour > 12){
    console.log("lightblue -future")
    getTextArea12.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  12){
    console.log("GREEN- present" )
    getTextArea12.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton12 = document.querySelector("#saveBtn12").addEventListener("click", noon_Function)
  function noon_Function(){
  var getTextArea12 = document.getElementById("12").value;
    // save in localStorage
  localStorage.setItem("textAreaKey12", getTextArea12);
  };
  
  
  
  //This code will allow 1 pm  time block to load
  getTextArea13.value = onepmData ;
  if  (currentHour < 13){
    console.log("GREY -past ")
    getTextArea13.style.backgroundColor ="grey"
  }
  if  (currentHour > 13){
    console.log("lightblue -future")
    getTextArea13.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  13){
    console.log("GREEN- present" )
    getTextArea13.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton13 = document.querySelector("#saveBtn13").addEventListener("click", onepm_Function)
  function onepm_Function(){
  var getTextArea13 = document.getElementById("13").value;
    // save in localStorage
  localStorage.setItem("textAreaKey13", getTextArea13);
  };
  
  
  
  
  //This code will allow 2 pm  time block to load
  if  (currentHour < 14){
    console.log("GREY -past ")
    getTextArea14.style.backgroundColor ="grey"
  }
  if  (currentHour > 14){
    console.log("lightblue -future")
    getTextArea14.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  14){
    console.log("GREEN- present" )
    getTextArea14.style.backgroundColor ="green"
  }
  //This code will allow the  2pm time block to load
  var saveButton14 = document.querySelector("#saveBtn14").addEventListener("click", twopm_Function)
  function twopm_Function(){
  var getTextArea14 = document.getElementById("14").value;
    // save in localStorage
  localStorage.setItem("textAreaKey14", getTextArea14);
  };
  
  
  
  //This code will allow the 3 pm  time block to load
  if  (currentHour < 15){
    console.log("GREY -past ")
    getTextArea15.style.backgroundColor ="grey"
  }
  if  (currentHour > 15){
    console.log("lightblue -future")
    getTextArea15.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  15){
    console.log("GREEN- present" )
    getTextArea15.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton15 = document.querySelector("#saveBtn15").addEventListener("click", threepm_Function)
  function threepm_Function(){
  var getTextArea15 = document.getElementById("15").value;
    // save in localStorage
  localStorage.setItem("textAreaKey15", getTextArea15);
  };
  
  
  
  //This code will allow the 4 pm  time block to load
  if  (currentHour < 16){
    console.log("GREY -past ")
    getTextArea16.style.backgroundColor ="grey"
  }
  if  (currentHour > 16){
    console.log("lightblue -future")
    getTextArea16.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  16){
    console.log("GREEN- present" )
    getTextArea16.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton16 = document.querySelector("#saveBtn16").addEventListener("click", fourpm_Function)
  function fourpm_Function(){
  var getTextArea16 = document.getElementById("16").value;
    // save in localStorage
  localStorage.setItem("textAreaKey16", getTextArea16);
  };
  
  
  //This code will allow the 4 pm  time block to load
  getTextArea17.value = fivepmData ;
  if  (currentHour < 17){
    console.log("GREY -past ")
    getTextArea17.style.backgroundColor ="grey"
  }
  if  (currentHour > 17){
    console.log("lightblue -future")
    getTextArea17.style.backgroundColor ="lightblue"
  }
  if  (currentHour  ===  17){
    console.log("GREEN- present" )
    getTextArea17.style.backgroundColor ="green"
  }
  //This code will allow the 11:am time block to load
  var saveButton17 = document.querySelector("#saveBtn17").addEventListener("click", fivepm_Function)
  function fivepm_Function(){
  var getTextArea17 = document.getElementById("17").value;
    // save in localStorage
  localStorage.setItem("textAreaKey17", getTextArea17);
  };