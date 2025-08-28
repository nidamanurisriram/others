function addition() {
		
	let no1 = document.getElementById("num_1");
		
	let no2 = document.getElementById("num_2");
		
	let a = Number(no1.value);
		
	let b = Number(no2.value);
		
	if((no1.value) !== "" && (no2.value) !=="") {
		
	let result = a + b;
		
	document.getElementById('res_n').value = result;
		
	}
		
  }
		
function subtract() {
		
	let no1 = document.getElementById("num_1");
		
	let no2 = document.getElementById("num_2");
		
	let a = Number(no1.value);
		
	let b = Number(no2.value);
		
	if((no1.value) !== "" && (no2.value) !=="") {
		
	let result = a - b;
		
	document.getElementById('res_n').value = result;
		
	}
		
  }
		
function reset() {
		
	document.getElementById("num_1").value ="";
		
	document.getElementById("num_2").value ="";
		
	document.getElementById("res_n").value   ="";
		
  }