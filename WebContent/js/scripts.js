function insert(button){
	document.calcForm.calculatorScreen.value += button;
}

function evaluation(){
	var expression = document.calcForm.calculatorScreen.value;
	if(expression)
		document.calcForm.calculatorScreen.value = eval(document.calcForm.calculatorScreen.value);
}

function erase(){
	document.calcForm.calculatorScreen.value = "";
}

function backspace(){
	var expression = document.calcForm.calculatorScreen.value;
	if(expression.length > 0)
		document.calcForm.calculatorScreen.value = expression.substring(0,expression.length-1);
}