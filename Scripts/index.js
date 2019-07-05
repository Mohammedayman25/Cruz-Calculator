
// Global Variables:

var results = document.querySelector('input');
var numsButtons = document.querySelectorAll('#nums button');
var operationButtons = document.querySelectorAll("#operations button")

// Add attributes to all buttons:

numsButtons.forEach(
	function addAttr(el, index){
		el.setAttribute('onclick', 'add('+index+');');
	}
);

operationButtons.forEach(
	function addAttr(el, index){
		el.setAttribute('onclick', 'add("'+el.textContent+'");');
	}
);


// Append number to the input field

function add(num){
	results.value += num;
};

// Clear the input field

function clearInput() {
	results.value = "";
};

// Delete the number before the cursor in the input field

function del(){
	var position = results.selectionStart - 1;
	var numsValue = results.value;
	var str = numsValue.slice(0,position) + numsValue.slice(position+1, results.length);
	results.value = str;
	results.selectionStart = position;
};

// Calculate the result

function calc(){
	try {
		var result = eval(results.value);
		if(result >= 0 || result < 0){
			results.value = result;
		} else{
			results.value = "";		
		}
	}
	catch(err) {
		alert("Invalid Input!");
	}
};
