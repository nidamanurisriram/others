let item = document.getElementById("item_4");

let status = false;

item.addEventListener("click", function() {

console.log(status);

if(status == true) {
status = false;
document.getElementById("dropdown-data").style.display="none";
return;
}

if(status == false) {
status = true;
document.getElementById("dropdown-data").style.display="block";
return;
}

});

document.getElementById("u_name").innerHTML = "Sriram Nidamanuri";

var imgs = document.querySelectorAll('.slide-show img');

var currentImage = 0;

function response() {
document.getElementById("resp-txt").innerHTML = "Request submitted!";
}

function ChangeSlide() {

var i;

for(i=0; i<imgs.length; i++) {
imgs[i].style.opacity = 0;
}

currentImage = (currentImage +1) % imgs.length;

imgs[currentImage].style.opacity = 1;

}

setInterval(ChangeSlide, 5300);

function viewTime() {

const now  = new Date();

//console.log(now);

let hours = now.getHours();

let minutes = now.getMinutes();

let no = now.getDay();

let day = now.getDate();

let month = now.getMonth();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

month = month + 1;

let year = now.getFullYear();

if(hours < 10) {
hours = 0+""+hours;
}

if(minutes <10) {
minutes=0+""+minutes;
}

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

if(hours<12) {
document.getElementById("status").innerHTML = "AM";
}

else {
document.getElementById("status").innerHTML = "PM";
}

document.getElementById("day").innerHTML = days[no];

document.getElementById("date").innerHTML = day +"/"+month;

//document.getElementById("showTime").innerHTML = new Date().toLocaleTimeString();

}

viewTime();
setInterval(viewTime, 1000);
