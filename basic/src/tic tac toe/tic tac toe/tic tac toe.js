let b0 = document.getElementById("box_0");
let b1 = document.getElementById("box_1");
let b2 = document.getElementById("box_2");
let b3 = document.getElementById("box_3");
let b4 = document.getElementById("box_4");
let b5 = document.getElementById("box_5");
let b6 = document.getElementById("box_6");
let b7 = document.getElementById("box_7");
let b8 = document.getElementById("box_8");

let data = [];

let d0, d1, d2, d3, d4, d5, d6, d7, d8;

d4 = "O";

let turn = "X";

let result = true;

let boxes = [b0, b1, b2, b3, b4, b5, b6, b7, b8];

let limit = boxes.length;

function updateData(i, value) {
data[i] = value;
console.log(data);
console.log(data[i]);
console.log(data.length);
}

function updateValue() {
d0 = data[0];
d1 = data[1];
d2 = data[2];
d3 = data[3];
d5 = data[5];
d6 = data[6];
d7 = data[7];
d8 = data[8];
console.log(d0 + " "+ d1 + " " + d2 + " " + d3 + " " + d4 + " " + d5 + " " + d6 + " " + d7 + " " + d8);
}

console.log(limit);

for(let i=0; i<=limit-1; i++) {

boxes[i].addEventListener("click", function() {

if (result == true && i != 4) {

let box = "box_"+i;

let text = "text_"+i;

let box_data = document.getElementById(box).value;

if(turn == "X" && box_data == null) {
document.getElementById(text).innerHTML = "X";
document.getElementById(box).value="X";
updateData(i, "X");
updateValue();
checkGame();
turn = "O";
return;
}

if(turn == "O" && box_data == null) {
document.getElementById(text).innerHTML = "O";
document.getElementById(box).value="O";
updateData(i, "O");
updateValue();
checkGame();
turn = "X";
return;
}

}
});

}

let reset = document.getElementById("res_btn");

reset.addEventListener("click", function() {

turn ="X";

result = true;

document.getElementById("text_0").innerHTML =null;
document.getElementById("text_1").innerHTML =null;
document.getElementById("text_2").innerHTML =null;
document.getElementById("text_3").innerHTML =null;
document.getElementById("text_5").innerHTML =null;
document.getElementById("text_6").innerHTML =null;
document.getElementById("text_7").innerHTML =null;
document.getElementById("text_8").innerHTML =null;

data[0] =null; document.getElementById("box_0").value =null;
data[1] =null; document.getElementById("box_1").value =null;
data[2] =null; document.getElementById("box_2").value =null;
data[3] =null; document.getElementById("box_3").value =null;
data[5] =null; document.getElementById("box_5").value =null;
data[6] =null; document.getElementById("box_6").value =null;
data[7] =null; document.getElementById("box_7").value =null;
data[8] =null; document.getElementById("box_8").value =null;

document.getElementById("message").innerHTML = null;

});

function checkGame() {

if(result) {

if((d0 == "O" && d1 == "O" && d2 == "O") || (d0 == "X" && d1 == "X" && d2 == "X") ||
   (d0 == "O" && d3 == "O" && d6 == "O") || (d0 == "X" && d3 == "X" && d6 == "X") ||
   (d0 == "O" && d4 == "O" && d8 == "O") || (d0 == "X" && d4 == "X" && d8 == "X") ||
   (d1 == "O" && d4 == "O" && d7 == "O") || (d1 == "X" && d4 == "X" && d7 == "X") ||
   (d2 == "O" && d4 == "O" && d6 == "O") || (d2 == "X" && d4 == "X" && d6 == "X") ||
   (d2 == "O" && d5 == "O" && d8 == "O") || (d2 == "X" && d5 == "X" && d8 == "X") ||
   (d3 == "O" && d4 == "O" && d5 == "O") || (d3 == "X" && d4 == "X" && d5 == "X") ||
   (d6 == "O" && d7 == "O" && d8 == "O") || (d6 == "X" && d7 == "X" && d8 == "X") ){
document.getElementById("message").innerHTML = turn + " 's Win";
result = false;
return;
}

if(((d0 != null && d1 != null && d2 != null && d3 != null && d4 != null && d5!= null && d6!= null && d7!= null) && d8 ==null) ||
   ((d0 != null && d1 != null && d2 != null && d3 != null && d4 != null && d5!= null && d6!= null && d8!= null) && d7 ==null) ||
   ((d0 != null && d1 != null && d2 != null && d3 != null && d4 != null && d5!= null && d7!= null && d8!= null) && d6 ==null) ||
   ((d0 != null && d1 != null && d2 != null && d3 != null && d4 != null && d6!= null && d7!= null && d8!= null) && d5 ==null) ||
   ((d0 != null && d1 != null && d2 != null && d3 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d4 ==null) ||
   ((d0 != null && d1 != null && d2 != null && d4 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d3 ==null) ||
   ((d0 != null && d1 != null && d3 != null && d4 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d2 ==null) ||
   ((d0 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d1 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d0 ==null)) {
document.getElementById("message").innerHTML = "Draw";
result = false;
return;
}

}
}