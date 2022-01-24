"use strict"
var strTop = prompt("Введите строку для расчёта");
function calc(str) {
	var result = 0;


	if (str.indexOf('(') != -1) {
		var a = str.indexOf('(');
		var b = str.indexOf(')');
		var strbot = calc(str.slice(a + 1, b));
		str = str.replace(str.slice(a, b + 1), strbot);
	}
	if (isNaN(str)) {
		if (str.indexOf('+') != -1) {
			str = str.split('+');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				result = result + calc(str[i]);
			}
		}
		else if (str.indexOf('-') != -1) {
			str = str.split('-');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				result = result - calc(str[i]);
			}
		}
		else if (str.indexOf('*') != -1) {
			str = str.split('*');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				result = result * calc(str[i]);
			}
		}
		else if (str.indexOf('/') != -1) {
			str = str.split('/');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				result = result / calc(str[i]);
			}
		}
	}
	else (result = parseFloat(str));
	return result;
}
console.log(calc(strTop));


