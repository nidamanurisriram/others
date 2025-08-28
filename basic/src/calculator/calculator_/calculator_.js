let no0 = document.getElementById("num_btn_0");
let no1 = document.getElementById("num_btn_1");
let no2 = document.getElementById("num_btn_2");
let no3 = document.getElementById("num_btn_3");
let no4 = document.getElementById("num_btn_4");
let no5 = document.getElementById("num_btn_5");
let no6 = document.getElementById("num_btn_6");
let no7 = document.getElementById("num_btn_7");
let no8 = document.getElementById("num_btn_8");
let no9 = document.getElementById("num_btn_9");
	
let numbers = [no0, no1, no2, no3, no4, no5, no6, no7, no8, no9];
	
let status = false;
	
let operator = "";
	
let limit = numbers.length;
	
for(let i=0; i<=limit-1; i++) {
	
numbers[i].addEventListener("click", function() { 

if(status == false) {
	
if(document.getElementById("num_1").value == "") {
	
console.log(i);
document.getElementById("num_1").value = i;
 	
}
	
else {
	
let value = document.getElementById("num_1").value;
	
if(value>=0) {
	
let data = 10 * value + i;
	
if(data>1000) {
console.log(data);
document.getElementById("err_msg").innerHTML = "limit 1000";
document.getElementById("err_msg").style.display = "inline-block";
return;
}
	
document.getElementById("num_1").value = data;
	
}
	
if(value<0) {
	
let data = 10 * value - i;
	
if(data<(-1000)) {
console.log(data);
document.getElementById("err_msg").innerHTML = "limit 1000";
document.getElementById("err_msg").style.display = "inline-block";
return;
}
	
document.getElementById("num_1").value = data;
	
}

}
	
}
	
if(status == true) {
	
if(document.getElementById("num_2").value == "") {
	
console.log(i);
document.getElementById("num_2").value = i;
 	
}
	
else {
	
let value = document.getElementById("num_2").value;
	
if(value>=0) {
	
let data = 10 * value + i;
	
if(data>1000) {
console.log(data);
document.getElementById("err_msg").innerHTML = "limit 1000";
document.getElementById("err_msg").style.display = "inline-block";
return;
}
	
document.getElementById("num_2").value = data;
	
}
	
if(value<0) {
	
let data = 10 * value - i;
	
if(data<(-1000)) {
console.log(data);
document.getElementById("err_msg").innerHTML = "limit 1000";
document.getElementById("err_msg").style.display = "inline-block";
return;
}
	
document.getElementById("num_2").value = data;
	
}

}	
	
}
	
});
	
}
	
let add = document.getElementById("add_btn");
	
let sub = document.getElementById("sub_btn");
	
let mul = document.getElementById("mul_btn");
	
let div = document.getElementById("div_btn");
	
add.addEventListener("click", function() {
let a = document.getElementById("num_1").value;
let b = document.getElementById("num_2").value;
if(a!= "" && b=="") {
console.log("+");
operator = "+";
status = true;
document.getElementById("ath_opr").innerHTML = "+";
document.getElementById("ath_opr").style.display = "inline";
}
});
	
sub.addEventListener("click", function() {
let a = document.getElementById("num_1").value;
let b = document.getElementById("num_2").value;
if(a!= "" && b=="") {
console.log("-");
operator = "-";
status = true;
document.getElementById("ath_opr").innerHTML = "-";
document.getElementById("ath_opr").style.display = "inline";
}
});
	
mul.addEventListener("click", function() {
let a = document.getElementById("num_1").value;
let b = document.getElementById("num_2").value;
if(a!= "" && b=="") {
console.log("*");
operator = "*";
status = true;
document.getElementById("ath_opr").innerHTML = "*";
document.getElementById("ath_opr").style.display = "inline";
}
});
	
div.addEventListener("click", function() {
let a = document.getElementById("num_1").value;
let b = document.getElementById("num_2").value;
if(a!= "" && b=="") {
console.log("/");
operator = "/";
status = true;
document.getElementById("ath_opr").innerHTML = "/";
document.getElementById("ath_opr").style.display = "inline";
}
});
	
let result = document.getElementById("oth_btn_E");
	
result.addEventListener("click", function() {
let a = document.getElementById("num_1").value;
let b = document.getElementById("num_2").value;
//if(a!="" && b=="") {
//status = true;
//}
if(a!="" && b!="") {
status = null;
a=parseInt(a);
b=parseInt(b);
if(operator=="+") {
let sum = a+b;
console.log(sum);
document.getElementById("res_n").value = sum;
}
if(operator=="-") {
let sub = a-b;
console.log(sub);
document.getElementById("res_n").value = sub;
}
if(operator=="*") {
let mul = a*b;
console.log(mul);
document.getElementById("res_n").value = mul;
}
if(operator=="/") {
let div = a/b;
console.log(div);
document.getElementById("res_n").value = div;
}
}
});
	
let reset = document.getElementById("oth_btn_C");
	
reset.addEventListener("click", function () {
	
operator = "";
status = false;
	
document.getElementById("num_1").value = "";
document.getElementById("num_2").value = "";
document.getElementById("res_n").value = "";
document.getElementById("ath_opr").style.display = "none";
document.getElementById("err_msg").style.display = "none";
});