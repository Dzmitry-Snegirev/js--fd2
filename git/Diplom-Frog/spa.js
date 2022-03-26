'use strict'

window.onhashchange = switchToStateFromURLHash;

var SPAState = {};

var mainPageButton = document.getElementById('mainPage');
var gamePageButton = document.getElementById('gamePage');
var rulesPageButton = document.getElementById('rulesPage');
var scorePageButton = document.getElementById('scorePage');

var mainDiv = document.getElementById('mainId');
var playDiv = document.querySelector('.wrapper');
var ruleDiv = document.getElementById('ruleId');
var scoreDiv = document.getElementById('scoreId');
var gameDiv = document.getElementById('frogPage');
var listDiv = document.querySelector('.list');
var gameOnline = false;

function switchToStateFromURLHash() {
	var URLHash = window.location.hash;
	var stateJSON = decodeURIComponent(URLHash.substr(1));
	if (stateJSON != "")
		SPAState = JSON.parse(stateJSON);
	else
		SPAState = { pagename: 'Main' };

	var pageHTML = "";
	switch (SPAState.pagename) {
		case 'Main':
			mainDiv.style.display = 'block';
			ruleDiv.style.display = 'none';
			scoreDiv.style.display = 'none';
			gameDiv.style.display = 'none';
			break;

		case 'Game':
			mainDiv.style.display = 'block';
			ruleDiv.style.display = 'none';
			scoreDiv.style.display = 'none';
			gameDiv.style.display = 'block';
			break;
		case 'Rules':
			mainDiv.style.display = 'block';
			ruleDiv.style.display = 'block';
			scoreDiv.style.display = 'block';
			gameDiv.style.display = 'none';
			break;
		case 'Scores':
			mainDiv.style.display = 'block';
			ruleDiv.style.display = 'none';
			scoreDiv.style.display = 'block';
			gameDiv.style.display = 'none';
			break;

	}
}

function switchToState(newState) {
	location.hash = encodeURIComponent(JSON.stringify(newState));
}

mainPageButton.onclick = function (EO) {
	switchToState({ pagename: 'Main' });
	EO.preventDefault();
}

gamePageButton.onclick = function (EO) {
	switchToState({ pagename: 'Game' });
	EO.preventDefault();
}

rulesPageButton.onclick = function (EO) {
	switchToState({ pagename: 'Rules' });
	EO.preventDefault();
}

scorePageButton.onclick = function (EO) {
	switchToState({ pagename: 'Scores' });
	EO.preventDefault();
}
switchToStateFromURLHash();



/*

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var stringName = 'ZABAVSKIY_RACING_RECORDS';

function restoreInfo() {
		$.ajax({
				url: ajaxHandlerScript,
				type: 'POST',
				cache: false,
				dataType: 'json',
				data: { f: 'READ', n: stringName },
				success: readReady,
				error: errorHandler
		});
}

function readReady(callresult) {
		if (callresult.error != undefined)
				console.log(callresult.error);
		else if (callresult.result != "") {
				var result = JSON.parse(callresult.result);
				createRecordTable(scoreDiv, result);
		}
}

function compareScore(a, b) {
		return b.record - a.record;
}

function createRecordTable(field, data) {
		var pageHTML = '';
		data.sort(compareScore);
		pageHTML += '<table border=1> <thead> Рекорды игры </thead><tbody>';
		pageHTML += '<td>' + '№' + '</td>' + '<td>' + 'ИМЯ' + '</td>' + '<td>' + 'СЧЕТ' + '</td>';
		for (var i = 0; i < data.length; i++) {
				if (i > 9) {
						break;
				}
				pageHTML += '<tr>';
				pageHTML += '<td>' + (i + 1) + '</td>' + '<td>' + data[i].name + '</td>' + '<td>' + data[i].record + '</td>';
				pageHTML += '</tr>';
		}
		pageHTML += '</tbody></table>';
		field.innerHTML = pageHTML;
}

function errorHandler(jqXHR, statusStr, errorStr) {
		alert(statusStr + ' ' + errorStr);
}*/