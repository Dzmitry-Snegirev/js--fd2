"use strict"
function deepComp(a, b) {
	if (typeof (a) !== typeof (b)) {
		return false;
	}
	if (typeof (a) == 'number' && isNaN(a) && isNaN(b)) {
		return true;
	}
	if ((typeof (a) !== "object" || a === null) || (typeof (b) !== "object" || b === null)) {
		return a === b;
	}

	if (typeof a === "object") {
		if (Array.isArray(a) !== Array.isArray(b)) {
			return false;
		}
		if (Array.isArray(a)) {
			if (a.length === b.length) {
				return a.every((elem, index) => deepComp(elem, b[index]));
			}
			else {
				return false;
			}
		}

		for (var key in a) {
			if ((key in b) == false) {
				return false;
			}
			if (deepComp(a[key], b[key]) !== true) {
				return false;
			}
		}
		for (var key in b) {
			if ((key in a) == false) {
				return false;
			}
		}
		return true;
	}
}
var H1 = { a: 5, b: { b1: 6, b2: 7 } };
var H2 = { b: { b1: 6, b2: 7 }, a: 5 };
var H3 = { a: 5, b: { b1: 6 } };
var H4 = { a: 5, b: { b1: 66, b2: 7 } };
var H5 = { a: 5, b: { b1: 6, b2: 7, b3: 8 } };
var H6 = { a: null, b: undefined, c: Number.NaN };
var H7 = { c: Number.NaN, b: undefined, a: null };
var H8 = { a: 5, b: 6 };
var H9 = { c: 5, d: 6 };
var H10 = { a: 5 };
var A1 = [5, 7];
var A2 = [5, 5, 7];
var A3 = [5, 8, 7];
console.log(deepComp(H1, H2) ? 'ПРОЙДЕН!' : 'Не пройден');
console.log(deepComp(H1, H3) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(H1, H4) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(H1, H5) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(H6, H7) ? 'ПРОЙДЕН!' : 'Не пройден');
console.log(deepComp(H8, H9) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(H8, H10) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(null, H10) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(H10, null) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(null, null) ? 'ПРОЙДЕН!' : 'Не пройден');
console.log(deepComp(null, undefined) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(5, "5") ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(5, H1) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(A1, H1) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(A2, A3) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp({ a: 5, b: undefined }, { a: 5, c: undefined }) ? 'Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp([5, 7], { 0: 5, 1: 7 }) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp([5, 7], { 0: 5, 1: 7, length: 2 }) ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp("aaa", "bbb") ? ' Не ПРОЙДЕН!' : 'ПРОЙДЕН!');
console.log(deepComp(Number.NaN, Number.NaN) ? 'ПРОЙДЕН!' : 'Не ПРОЙДЕН!');


/*deepComp(H1,H2) будет true
deepComp(H1,H3) будет false
deepComp(H1,H4) будет false
deepComp(H1,H5) будет false
deepComp(H6,H7) будет true
deepComp(H8,H9) будет false
deepComp(H8,H10) будет false
deepComp(null,H10) будет false
deepComp(H10,null) будет false
deepComp(null,null) будет true
deepComp(null,undefined) будет false
deepComp(5,"5") будет false
deepComp(5,H1) будет false
deepComp(A1,H1) будет false
deepComp(A2,A3) будет false
deepComp( {a:5,b:undefined}, {a:5,c:undefined} ) будет false
deepComp([5,7],{0:5,1:7}) будет false
deepComp( [5,7],{0:5,1:7,length:2} ) будет false
deepComp("aaa","bbb") будет false
deepComp(Number.NaN,Number.NaN) будет true
*/