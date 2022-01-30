"use strict"
var strTop = prompt("Введите строку для расчёта");
function calc(str) {
	var result = 0;
	var znak = false;
	if (str.charAt(0) === "-") {
		var strClear = str.slice(1);
		str = str.replace(str, strClear);
		znak = true;
	}
	if (str.indexOf('(') != -1) {
		var a = str.indexOf('(');
		var b = str.indexOf(')');
		var strbot = calc(str.slice(a + 1, b));
		for (var i = 0; i < strbot.length; i++) {
			if (strbot[0] === "-") {
				var strClear = strbot.slice(1);
				strbot = strbot.replace(strbot, strClear);
				znak = true;
			}
		}
		str = str.replace(str.slice(a, b + 1), strbot);
	}

	if (isNaN(str)) {
		if (str.indexOf('+') != -1) {
			str = str.split('+');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				if (znak === true) {
					result = result - calc(str[i]);
				}
				else {
					result = result + calc(str[i]);
				}
			}
		}
		else if (str.indexOf('-') != -1) {
			str = str.split('-');
			result = calc(str[0]);
			for (var i = 1; i < str.length; i++) {
				if (znak === true) {
					result = result + calc(str[i]);
				}
				else {
					result = result - calc(str[i]);
				}
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
	if (znak === true && result !== 0) {
		result = "-" + result;
		result = parseFloat(result);
	}

	return result;
}
console.log(calc(strTop));

