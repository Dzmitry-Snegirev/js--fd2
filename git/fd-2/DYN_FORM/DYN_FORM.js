"use strict"
function creatForm(a) {
	var elem = document.getElementById('top');
	var formNew = document.createElement('form');
	formNew.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');
	elem.appendChild(formNew);

	a.forEach(function (element) {
		for (let key in element) {

			if (key === "label" || key === "caption") {
				var label = document.createElement('label');
				formNew.appendChild(label);
				var textLabel = document.createTextNode(element[key]);
				var br = document.createElement('br');
				label.appendChild(br);
				label.appendChild(textLabel);
			}

			if (element[key] === "longtext" || element[key] === "number" || element[key] === "shorttext") {
				var input = document.createElement('input');
				input.setAttribute('type', element[key]);
				label.appendChild(input);
			}

			if (element[key] === "name") {
				input.setAttribute('name', element[key]);
				label.appendChild(input);
			}


			if (element[key] === "combo") {
				var select = document.createElement('select');
				label.appendChild(select);
				select.setAttribute('name', element[key]);
				label.appendChild(select);
				for (let key in element) {
					if (key === "variants") {
						var k = element[key];
						k.forEach(function (el) {
							for (let key in el) {
								if (key === "text") {
									var option = document.createElement('option');
									var optionText = document.createTextNode(el[key]);
									option.appendChild(optionText);
								}
								if (key === "value") {
									option.setAttribute('value', el[key]);
									select.appendChild(option);
								}
							}
						});
					}
				}
			}

			if (element[key] === "radio") {
				for (let key in element) {
					if (key === "variants") {
						var m = element[key];
						m.forEach(function (el) {
							for (let key in el) {
								if (key === "text") {
									var input = document.createElement('input');
									var inputText = document.createTextNode(el[key]);
									input.setAttribute('type', "radio");
									input.setAttribute('name', 'placing');
									label.appendChild(input);
									label.appendChild(inputText);
								}
								if (key === "value") {
									input.setAttribute('value', el[key]);
								}
							}
						});
					}
				};
			}
			if (element[key] === "check") {
				var input = document.createElement('input');
				input.setAttribute('type', 'checkbox');
				input.setAttribute('name', element[key]);
				input.checked = true;
				label.appendChild(input);
			}
			if (element[key] === "memo") {
				var textarea = document.createElement('textarea');
				label.appendChild(textarea);
			}


			if (element[key] === "submit") {
				var input = document.createElement('input');
				input.setAttribute('type', element[key]);
				label.appendChild(input);
				for (let key in element) {
					if (key === "caption") {
						input.setAttribute('value', element[key]);
					}
				}
			}
		}
	});

	return formNew;
}





var formDef1 =
	[
		{ label: '???????????????? ??????????:', kind: 'longtext', name: 'sitename' },
		{ label: 'URL ??????????:', kind: 'longtext', name: 'siteurl' },
		{ label: '?????????????????????? ?? ??????????:', kind: 'number', name: 'visitors' },
		{ label: 'E-mail ?????? ??????????:', kind: 'shorttext', name: 'email' },
		{
			label: '?????????????? ????????????????:', kind: 'combo', name: 'division',
			variants: [{ text: '????????????????', value: 1 }, { text: '???????????????? ??????', value: 2 }, { text: '?????????????? ??????????????', value: 3 }]
		},
		{
			label: '????????????????????:', kind: 'radio', name: 'payment',
			variants: [{ text: '????????????????????', value: 1 }, { text: '??????????????', value: 2 }, { text: 'VIP', value: 3 }]
		},
		{ label: '?????????????????? ????????????:', kind: 'check', name: 'votes' },
		{ label: '???????????????? ??????????:', kind: 'memo', name: 'description' },
		{ caption: '????????????????????????', kind: 'submit' },
	];

var formDef2 =
	[
		{ label: '??????????????:', kind: 'longtext', name: 'lastname' },
		{ label: '??????:', kind: 'longtext', name: 'firstname' },
		{ label: '????????????????:', kind: 'longtext', name: 'secondname' },
		{ label: '??????????????:', kind: 'number', name: 'age' },
		{ caption: '????????????????????????????????????', kind: 'submit' },
	];
creatForm(formDef1);
creatForm(formDef2);
