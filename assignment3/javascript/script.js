console.log("big red button");

let button = "big red red red red red button";

console.log(button);

function myFunction() {
  document.body.style.backgroundColor = "pink";
}


function myFunction2() {
  document.getElementById("power-symbol").style.color = "#FF8B8C";
}

function myFunction3(){
	alert("Button has been clicked！");
}

let redbutton = document.querySelector('.red-button');
let msg = document.querySelector('#message');

redbutton.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

document.querySelector(".fa-circle").style.color = "#EDE3E5";

function myFunction4() {
  document.getElementById("message").classList.add("mystyle");
}