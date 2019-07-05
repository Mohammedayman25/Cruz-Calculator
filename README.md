
# Cruz Calculator

** Version 1.0.0 **

Calculator made up using pure HTML, CSS, JavaScript.
It is great to call it inside your website for the users to do simple calculations.
Ex: Calling it inside GPA Calculators to give the student the ability of performing side calculations.

## Mechanism

### Clear Button

It is composed of buttons and only one input that gets cleared when AC button is clicked and this process done by calling a function that resets the value of the input to empty string:

```
function clearInput() {
	results.value = "";
};
```

### Del Button

Del button deletes the character that's placed directly behind the cursor and this is done using the selectionStart property with subtracting 1 from the output to use the right index with slice function:

```
function del(){
	var position = results.selectionStart - 1;
	var numsValue = results.value;
	var str = numsValue.slice(0,position) + numsValue.slice(position+1, results.length);
	results.value = str;
	results.selectionStart = position;
};
```

### Clac Button

Calc button calculates inputs' result depending on try and catch to fetch any error or invalid input besides using eval() function to transform the string into mathematical operation:

```
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
```

## Related:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

## Author:

Name: Mohammed Ayman
Phone: +201090658284
Email: Mae252002@gmail.com
Linkedin: https://www.linkedin.com/in/muhammedayman25