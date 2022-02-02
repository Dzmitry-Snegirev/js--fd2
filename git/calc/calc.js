"use strict"
var strTop = prompt("Введите строку для расчёта");
function calc(str) {
	var result = 0;
	var znak = false;
	var turn = false;

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

	if (str.indexOf('+') != -1) {
		if (str.indexOf('-') != -1) {
			var m = str.indexOf('-');
			str = str.slice(0, m) + str.slice(m + 1, str.length);
			znak = true;
			turn = false;
		}
		str = str.split('+');
		result = calc(str[0]);
		for (var i = 1; i < str.length; i++) {
			if (znak === true) {
				result = result - calc(str[i]);
				znak = false;
			}
			else {
				result = result + calc(str[i]);
			}
		}
	}

	else if (str.indexOf('*') != -1) {
		if (znak === true && str.indexOf('-') != -1) {
			var p = str.indexOf('-');
			str = str.slice(0, p) + str.slice(p + 1, str.length);
			znak = false;
		}
		str = str.split('*');
		result = calc(str[0]);
		for (var i = 1; i < str.length; i++) {
			result = result * calc(str[i]);
		}
	}
	else if (str.indexOf('/') != -1) {
		if (znak === true && str.indexOf('-') != -1) {
			var r = str.indexOf('-');
			str = str.slice(0, r) + str.slice(r + 1, str.length);
			znak = false;
		}
		str = str.split('/');
		result = calc(str[0]);
		for (var i = 1; i < str.length; i++) {
			result = result / calc(str[i]);
		}
	}
	else if (str.indexOf('-') != -1) {
		var f = str.indexOf('-');
		for (var i = 0; i < str.length; i++) {
			if (str[f + 1] === "-") {
				str = str.slice(0, f) + str.slice(f + 1, str.length);
				znak = true;
				turn = true;
			}
		}
		str = str.split('-');
		result = calc(str[0]);
		for (var i = 1; i < str.length; i++) {
			if (znak === true) {
				result = result + calc(str[i]);
				znak === false;
			}
			else {
				result = result - calc(str[i]);
			}
		}
	}

	else (result = parseFloat(str));
	if (znak === true && result !== 0 && turn === false) {
		result = "-" + result;
	}
	return result;
}
console.log(calc(strTop));



