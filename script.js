var todayDate = new Date();
var formatDate = moment(todayDate).format('dddd, MMMM DD, YYYY')
var dateOutput = document.querySelector("#currentDay").innerHTML =`${formatDate}`;

/* nine am function */

var text_input =document.querySelector("#saveBtn").addEventListener("click", nine_amFunction);
var nine_am_input =document.querySelector("#nine_am");

function nine_amFunction(event){
    event.preventDefault()
var nine_am = localStorage.setItem("nine_am_task", nine_am_input.value);


var nine_am_get = localStorage.getItem("nine_am_task");
nine_am_input.textContent = `${nine_am_get}`
console.log(nine_am_get)

}

