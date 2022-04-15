"use strict"
var strTop = prompt("Введите строку для расчёта");
function calc(str) {
	var srtY = "";
	var result = 0;
	var znak = false;
	var turn = false;

	for (var i = 0; i < str.length; i++) {
		if (str.indexOf('(') != -1) {
			var m = str.indexOf('(');
			var n = str.indexOf(')');
			var strbot = calc(str.slice(m + 1, n));
			var str = str.replace(str.slice(m, n + 1), strbot);
		}
	}
	if (str.indexOf('-') != -1) {
		var a = str.indexOf('-');
		if (str.charAt(a + 1) == "-") {
			str = str.replace(str.slice(a, a + 2), "+");
		}
	}

	if (isNaN(str)) {
		for (var i = 0; i < str.length; i++) {
			if (str[0] === "-") {
				znak = true;
			}
		}
		if (str.indexOf('*') != -1) {
			if (znak === true) {
				var str = str.slice(1);
				var a = str.indexOf('*');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "*");
					str = str.split('*');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result * calc(str[i]);
					}
					turn = true;
				}
				else {
					str = str.split('*');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = calc(str[i]) * result;
					}
				}

			}
			if (znak === false) {
				var a = str.indexOf('*');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "*");
					str = str.split('*');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result * calc(str[i]);
					}
					znak = true;
				}
				else {
					str = str.split('*');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = calc(str[i]) * result;
					}
				}
			}
		}
		else if (str.indexOf('/') != -1) {
			if (znak === true) {
				var str = str.slice(1);
				var a = str.indexOf('/');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "/");
					str = str.split('/');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result / calc(str[i]);
					}
					turn = true;
				}
				else {
					str = str.split('/');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result / calc(str[i]);
					}
				}

			}
			if (znak === false) {
				var a = str.indexOf('/');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "/");
					str = str.split('/');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result / calc(str[i]);
					}
					znak = true;
				}
				else {
					str = str.split('/');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result / calc(str[i]);
					}
				}
			}
		}
		else if (str.indexOf('+') != -1) {
			if (znak === true) {
				var str = str.slice(1);
				if (str.indexOf('-') != -1) {
					var b = str.indexOf('+');
					if (str.charAt(b + 1) == "-") {
						str = str.replace(str.slice(b, b + 2), "+");
						str = str.split('+');
						for (var i = 0; i < str.length; i++) {
							result = result + calc(str[i]);
						}
					}
				}
				else {
					str = str.split('+');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = calc(str[i]) - result;
						turn = true;
					}
				}
			}
			if (znak === false) {
				var a = str.indexOf('+');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "-");
					str = str.split('-');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result - calc(str[i]);
					}
				}
				else {
					str = str.split('+');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result + calc(str[i]);
					}
				}
			}
		}
		else if (str.indexOf('-') != -1) {
			if (znak === true) {
				var str = str.slice(1);
				if (str.indexOf('-') != -1) {
					var c = str.indexOf('-');
					if (str.charAt(c + 1) == "-") {
						str = str.replace(str.slice(c, c + 2), "-");
						str = str.split('-');
						result = calc(str[0]);
						for (var i = 1; i < str.length; i++) {
							result = calc(str[i]) - result;
							turn = true;
						}
					}
					else {
						str = str.split('-');
						result = calc(str[0]);
						for (var i = 1; i < str.length; i++) {
							result = result + calc(str[i]);
						}
					}
				}
			}
			if (znak === false) {
				var a = str.indexOf('-');
				if (str.charAt(a + 1) == "-") {
					str = str.replace(str.slice(a, a + 2), "+");
					str = str.split('+');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result + calc(str[i]);
					}
				}
				else {
					str = str.split('-');
					result = calc(str[0]);
					for (var i = 1; i < str.length; i++) {
						result = result - calc(str[i]);
					}
				}
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



