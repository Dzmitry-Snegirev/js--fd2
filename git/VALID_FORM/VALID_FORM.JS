"use strict"
var formTag = document.forms.INFO;

var devField = formTag.elements.develop;
var nameField = formTag.elements.nameSite;
var siteField = formTag.elements.url;
var dateField = formTag.elements.DATA;
var countField = formTag.elements.count;
var mailField = formTag.elements.mail;
var catalogField = formTag.elements.catalog;
var agreeField = formTag.elements.AGREE;
var agreeValue = agreeField.checked;
var mytextField = formTag.elements.mytext;
var serviceField = formTag.elements.service;


devField.addEventListener('blur', devBlur, false);
nameField.addEventListener('blur', nameBlur, false);
siteField.addEventListener('blur', siteBlur, false);
dateField.addEventListener('blur', dateBlur, false);
countField.addEventListener('blur', countBlur, false);
mailField.addEventListener('blur', mailBlur, false);
catalogField.addEventListener('change', catalogBlur, false);
agreeField.addEventListener('change', agreeClick, false);
mytextField.addEventListener('blur', mytextBlur, false);

function devBlur(devField) {
	if (this.value == "" || this.value.length > 30) {
		var pars1 = document.getElementById('span1');
		pars1.style.display = 'inline-block';

	}
	else {
		var pars1 = document.getElementById('span1');
		pars1.style.display = 'none';
	}
}

function nameBlur(nameField) {
	if (this.value === "" || this.value.length > 15) {
		var pars2 = document.getElementById('span2');
		pars2.style.display = 'inline-block';
	}
	else {
		var pars2 = document.getElementById('span2');
		pars2.style.display = 'none';
	}
}
function siteBlur(siteField) {
	if (this.value === "" || this.value.length > 15) {
		var pars3 = document.getElementById('span3');
		pars3.style.display = 'inline-block';
	}
	else {
		var pars3 = document.getElementById('span3');
		pars3.style.display = 'none';
	}
}
function dateBlur(dateField) {
	if (this.value === "" || this.value.length > 15) {
		var pars4 = document.getElementById('span4');
		pars4.style.display = 'inline-block';
	}
	else {
		var pars4 = document.getElementById('span4');
		pars4.style.display = 'none';
	}
}
function countBlur(countField) {
	if (this.value === "" || isNaN(this.value)) {
		var pars5 = document.getElementById('span5');
		pars5.style.display = 'inline-block';
	}
	else {
		var pars5 = document.getElementById('span5');
		pars5.style.display = 'none';
	}
}
function mailBlur(mailField) {
	if (this.value === "" || this.value.indexOf('@') == -1) {
		var pars6 = document.getElementById('span6');
		pars6.style.display = 'inline-block';
	}
	else {
		var pars6 = document.getElementById('span6');
		pars6.style.display = 'none';
	}
}
function catalogBlur(catalogField) {
	if (this.value == 1) {
		var pars7 = document.getElementById('span7');
		pars7.style.display = 'inline-block';
	}
	else {
		var pars7 = document.getElementById('span7');
		pars7.style.display = 'none';
	}
}

for (var i = 0; i < serviceField.length; i++) {
	serviceField[i].onclick = function () {
		var pars8 = document.getElementById('span8');
		pars8.style.display = 'none';
	}
}


function agreeClick(EO) {
	EO = EO || window.event;
	if (!agreeValue) {
		var pars9 = document.getElementById('span9');
		pars9.style.display = 'none';
	}
}

function mytextBlur(mytextField) {
	if (this.value == "") {
		var pars10 = document.getElementById('span10');
		pars10.style.display = 'inline-block';
	}
	else {
		var pars10 = document.getElementById('span10');
		pars10.style.display = 'none';
	}
}

formTag.addEventListener('submit', validateInfoForm, false);
function validateInfoForm(EO) {
	EO = EO || window.event;
	var focusInput;

	try {
		var formTag = document.forms.INFO;

		var devField = formTag.elements.develop;
		var devValue = devField.value;

		var nameField = formTag.elements.nameSite;
		var nameValue = nameField.value;

		var siteField = formTag.elements.url;
		var urlValue = siteField.value;

		var dateField = formTag.elements.DATA;
		var dateValue = dateField.value;

		var countField = formTag.elements.count;
		var countValue = parseInt(countField.value.trim());

		var mailField = formTag.elements.mail;
		var mailValue = mailField.value;

		var catalogField = formTag.elements.catalog;
		var catalogValue = catalogField.value;

		var serviceField = formTag.elements.service;
		var serviceValue = serviceField.value;

		var agreeField = formTag.elements.AGREE;
		var agreeValue = agreeField.checked;

		var mytextField = formTag.elements.mytext;
		var mytextValue = mytextField.value;


		if (devValue === "" || devValue.length > 30) {
			devField.focus();
			var pars1 = document.getElementById('span1');
			pars1.style.display = 'inline-block';
			focusInput = true;
			EO.preventDefault();
		}
		else {
			var pars1 = document.getElementById('span1');
			pars1.style.display = 'none';
		}

		if (nameValue === "" || nameValue.length > 15) {
			var pars2 = document.getElementById('span2');
			pars2.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				nameField.focus();
				focusInput = true;
			}
		}
		else {
			var pars2 = document.getElementById('span2');
			pars2.style.display = 'none';
		}
		if (urlValue === "" || urlValue.length > 15) {
			var pars3 = document.getElementById('span3');
			pars3.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				siteField.focus();
				focusInput = true;
			}
		}
		else {
			var pars3 = document.getElementById('span3');
			pars3.style.display = 'none';
		}

		if (dateValue === "") {
			var pars4 = document.getElementById('span4');
			pars4.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				dateField.focus();
				focusInput = true;
			}
		}
		else {
			var pars4 = document.getElementById('span4');
			pars4.style.display = 'none';
		}
		if (countValue === "" || isNaN(countValue)) {
			var pars5 = document.getElementById('span5');
			pars5.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				countField.focus();
				focusInput = true;
			}
		}
		else {
			var pars5 = document.getElementById('span5');
			pars5.style.display = 'none';
		}
		if (mailValue === "" || mailValue.indexOf('@') == -1) {
			var pars6 = document.getElementById('span6');
			pars6.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				mailField.focus();
				focusInput = true;
			}
		}
		else {
			var pars6 = document.getElementById('span6');
			pars6.style.display = 'none';
		}
		if (catalogValue == 1) {
			var pars7 = document.getElementById('span7');
			pars7.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				catalogField.focus();
				focusInput = true;
			}
		}
		else {
			var pars7 = document.getElementById('span7');
			pars7.style.display = 'none';
			focusInput = false;
		}
		if (serviceValue == "") {
			var pars8 = document.getElementById('span8');
			pars8.style.display = 'inline-block';
			EO.preventDefault();
		}
		else {
			var pars8 = document.getElementById('span8');
			pars1.style.display = 'none';
		}
		if (!agreeValue) {
			var pars9 = document.getElementById('span9');
			pars9.style.display = 'inline-block';
			EO.preventDefault();
		}
		else {
			var pars9 = document.getElementById('span9');
			pars9.style.display = 'none';
		}
		if (mytextValue == "") {
			var pars10 = document.getElementById('span10');
			pars10.style.display = 'inline-block';
			EO.preventDefault();
			if (focusInput !== true) {
				mytextField.focus();
				focusInput = true;
			}
		}
		else {
			var pars10 = document.getElementById('span10');
			pars10.style.display = 'none';
		}
	}
	catch (ex) {
		EO.preventDefault();
	}
}


