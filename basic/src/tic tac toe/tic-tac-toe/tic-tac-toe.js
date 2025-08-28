let b1 = document.getElementById("box_1");
let b2 = document.getElementById("box_2");
let b3 = document.getElementById("box_3");
let b4 = document.getElementById("box_4");
let b5 = document.getElementById("box_5");
let b6 = document.getElementById("box_6");
let b7 = document.getElementById("box_7");
let b8 = document.getElementById("box_8");
let b9 = document.getElementById("box_9");

let d1 = document.getElementById("box_1").value;
let d2 = document.getElementById("box_2").value;
let d3 = document.getElementById("box_3").value;
let d4 = document.getElementById("box_4").value;
let d5 = "O";
let d6 = document.getElementById("box_6").value;
let d7 = document.getElementById("box_7").value;
let d8 = document.getElementById("box_8").value;
let d9 = document.getElementById("box_9").value;

let boxes = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

let turn = "X";

console.log(boxes);

let result = true;

b1.addEventListener("click", function() {

if (result == true) {

let data = d1;

if(turn == "X" && data == null) {
document.getElementById("text_1").innerHTML = "X";
d1="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_1").innerHTML = "O";
d1="O";
checkGame();
tuzrn = "X";
return;
}

}
});

b2.addEventListener("click", function() {

if (result == true) {

let data = d2;

if(turn == "X" && data == null) {
document.getElementById("text_2").innerHTML = "X";
d2="X";
    checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_2").innerHTML = "O";
d2="O";
checkGame();
turn = "X";
return;
}

}
});

b3.addEventListener("click", function() {

if (result == true) {

let data = d3;

if(turn == "X" && data == null) {
document.getElementById("text_3").innerHTML = "X";
d3="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_3").innerHTML = "O";
d3="O";
checkGame();
turn = "X";
return;
}

}
});

b4.addEventListener("click", function() {

if (result == true) {

let data = d4;

if(turn == "X" && data == null) {
document.getElementById("text_4").innerHTML = "X";
d4="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_4").innerHTML = "O";
d4="O";
checkGame();
turn = "X";
return;
}

}
});

b5.addEventListener("click", function() {

if (result == true) {

let data = "O";

console.log(data);

if(turn == "X" && data == null) {
document.getElementById("text_5").innerHTML = "X";
d5="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_5").innerHTML = "O";
d5="O";
checkGame();
turn = "X";
return;
}

}
});

b6.addEventListener("click", function() {

if(result == true) {

let data = d6;

if(turn == "X" && data == null) {
document.getElementById("text_6").innerHTML = "X";
d6="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_6").innerHTML = "O";
d6="O";
checkGame();
turn = "X";
return;
}

}
});

b7.addEventListener("click", function() {

if (result == true) {

let data = d7;

if(turn == "X" && data == null) {
document.getElementById("text_7").innerHTML = "X";
d7="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_7").innerHTML = "O";
d7="O";
checkGame();
turn = "X";
return;
}

}
});

b8.addEventListener("click", function() {

if (result == true) {

let data = d8;

if(turn == "X" && data == null) {
document.getElementById("text_8").innerHTML = "X";
d8="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_8").innerHTML = "O";
d8="O";
checkGame();
turn = "X";
return;
}

}
});

b9.addEventListener("click", function() {

if (result == true) {

let data = d9;

if(turn == "X" && data == null) {
document.getElementById("text_9").innerHTML = "X";
d9="X";
checkGame();
turn = "O";
return;
}

if(turn == "O" && data == null) {
document.getElementById("text_9").innerHTML = "O";
d9="O";
checkGame();
turn = "X";
return;
}

}
});

let reset = document.getElementById("res_btn");

reset.addEventListener("click", function() {

turn ="X";

result = true;

d1=null; document.getElementById("text_1").innerHTML =null;
d2=null; document.getElementById("text_2").innerHTML =null;
d3=null; document.getElementById("text_3").innerHTML =null;
d4=null; document.getElementById("text_4").innerHTML =null;
d6=null; document.getElementById("text_6").innerHTML =null;
d7=null; document.getElementById("text_7").innerHTML =null;
d8=null; document.getElementById("text_8").innerHTML =null;
d9=null; document.getElementById("text_9").innerHTML =null;

document.getElementById("message").innerHTML = null;

});

function checkGame() {

if(result) {

if((d1 == "O" && d2 == "O" && d3 == "O") || (d1 == "X" && d2 == "X" && d3 == "X") ||
   (d1 == "O" && d4 == "O" && d7 == "O") || (d1 == "X" && d4 == "X" && d7 == "X") ||
   (d1 == "O" && d5 == "O" && d9 == "O") || (d1 == "X" && d5 == "X" && d9 == "X") ||
   (d2 == "O" && d5 == "O" && d8 == "O") || (d2 == "X" && d5 == "X" && d5 == "X") ||
   (d3 == "O" && d5 == "O" && d7 == "O") || (d3 == "X" && d5 == "X" && d7 == "X") ||
   (d3 == "O" && d6 == "O" && d9 == "O") || (d3 == "X" && d6 == "X" && d9 == "X") ||
   (d4 == "O" && d5 == "O" && d6 == "O") || (d4 == "X" && d5 == "X" && d6 == "X") ||
   (d7 == "O" && d8 == "O" && d9 == "O") || (d7 == "X" && d8 == "X" && d9 == "X") ){
document.getElementById("message").innerHTML = turn + " 's Win";
result = false;
return;
}

if(((d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6!= null && d7!= null && d8!= null) && d9 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6!= null && d7!= null && d9!= null) && d8 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d6!= null && d8!= null && d9!= null) && d7 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d4 != null && d5 != null && d7!= null && d8!= null && d9!= null) && d6 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d4 != null && d6 != null && d7!= null && d8!= null && d9!= null) && d5 ==null) ||
   ((d1 != null && d2 != null && d3 != null && d5 != null && d6 != null && d7!= null && d8!= null && d9!= null) && d4 ==null) ||
   ((d1 != null && d2 != null && d4 != null && d5 != null && d6 != null && d7!= null && d8!= null && d9!= null) && d3 ==null) ||
   ((d1 != null && d3 != null && d4 != null && d5 != null && d6 != null && d7!= null && d8!= null && d9!= null) && d2 ==null) ||
   ((d2 != null && d3 != null && d4 != null && d5 != null && d6 != null && d7!= null && d8!= null && d9!= null) && d1 ==null)) {
document.getElementById("message").innerHTML = "Draw";
result = false;
return;
}

}
}