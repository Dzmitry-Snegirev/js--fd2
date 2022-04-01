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

let playWidth = playDiv.offsetWidth;// ширина игрового поля
let playHeight = playDiv.offsetHeight;// высота игрового поля

function switchToStateFromURLHash() {
	var URLHash = window.location.hash;
	var stateJSON = decodeURIComponent(URLHash.substr(1));
	if (stateJSON != "")
		SPAState = JSON.parse(stateJSON);
	else
		SPAState = { pagename: 'Main' };


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
			scoreDiv.style.display = 'none';
			gameDiv.style.display = 'none';

			break;
		case 'Scores':
			mainDiv.style.display = 'block';
			ruleDiv.style.display = 'none';
			scoreDiv.style.display = 'block';
			gameDiv.style.display = 'none';
			restoreInfo();
			break;

	}
}
window.onbeforeunload = befUnload;
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

function befUnload(EO) {
	EO = EO || window.event;
	if (score > 0)
		EO.returnValue = 'При смене страницы результат игры сбросится!';
};

switchToStateFromURLHash();


var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = 'SNEGIREV_FROG_RECORDS';
var InfoH = [];

function storeInfo() {
	updatePassword = Math.random();
	$.ajax(
		{
			url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
			data: { f: 'LOCKGET', n: stringName, p: updatePassword },
			success: LockGetReady, error: ErrorHandler
		}
	);

}



function LockGetReady(ResultH) {
	if (ResultH.error != undefined)
		alert(ResultH.error);
	else {
		// нам всё равно, что было прочитано - 
		// всё равно перезаписываем
		var InfoA =
		{
			name: document.getElementById('Player').value,
			record: score
		}
		InfoH.push(InfoA)
		$.ajax(
			{
				url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
				data: { f: 'UPDATE', n: stringName, v: JSON.stringify(InfoH), p: updatePassword },
				success: UpdateReady, error: ErrorHandler
			}
		);
		delGame();
	}

}

function UpdateReady(ResultH) {
	if (ResultH.error != undefined)
		alert(ResultH.error);
}

function restoreInfo() {
	$.ajax(
		{
			url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
			data: { f: 'READ', n: stringName, v: JSON.stringify(InfoH) },
			success: readReady, error: ErrorHandler
		}
	);
}
function compareScores(A, B) {
	return B.score - A.score;
}

function readReady(callresult) {
	var pageHTML = '';
	if (callresult.error != undefined)
		alert(callresult.error);
	else if (callresult.result != "") {
		InfoH = JSON.parse(callresult.result);

		InfoH.sort(compareScores);
		pageHTML += '<table border=1> <thead> Рекорды игры </thead><tbody>';
		pageHTML += '<td>' + '№' + '</td>' + '<td>' + 'ИМЯ' + '</td>' + '<td>' + 'СЧЕТ' + '</td>';
		for (var i = 0; i < InfoH.length; i++) {
			if (i > 9) {
				break;
			}
			pageHTML += '<tr>';
			pageHTML += '<td>' + (i + 1) + '</td>' + '<td>' + InfoH[i].name + '</td>' + '<td>' + InfoH[i].record + '</td>';
			pageHTML += '</tr>';
		}
		pageHTML += '</tbody></table>';
		scoreDiv.innerHTML = pageHTML;
	}
}


function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
	alert(StatusStr + ' ' + ErrorStr);
}

//создание стрелок для управления тачем
function makeArrow(image, classArrow) {
	var arrow = document.createElement('img');
	arrow.setAttribute('src', image);
	arrow.setAttribute('width', playWidth / 5);
	arrow.setAttribute('height', playHeight / 7);
	arrow.setAttribute('class', classArrow);
	arrow.style.cssText = 'position: absolute; visibility: hidden';
	mainDiv.appendChild(arrow);
	this.arrowVisible = function (arrowPos) {
		if (arrowPos === "bottom") {
			arrow.style.cssText = 'position: absolute; left:40%; ' + arrowPos + ': 2%; z-index: 10; visibility: visible';
		}
		if (arrowPos === "left") {
			arrow.style.cssText = 'position: absolute; bottom: 10%; ' + arrowPos + ': 20%; z-index: 10; visibility: visible';
		}
		if (arrowPos === "top") {
			arrow.style.cssText = 'position: absolute; left:40%; ' + arrowPos + ': 75%; z-index: 10; visibility: visible';
		}
		if (arrowPos === "right") {
			arrow.style.cssText = 'position: absolute; bottom: 10%; ' + arrowPos + ': 20%; z-index: 10; visibility: visible';
		}
	}
}

var leftArrow = new makeArrow('image/arrow-left.png', 'leftArrow');
var rightArrow = new makeArrow('image/arrow-right.png', 'rightArrow');
var topArrow = new makeArrow('image/arrow-top.png', 'topArrow');
var bottomArrow = new makeArrow('image/arrow-button.png', 'bottomArrow');

if (document.body.offsetWidth < 768) {
	leftArrow.arrowVisible('left');
	rightArrow.arrowVisible('right');
	topArrow.arrowVisible('top');
	bottomArrow.arrowVisible('bottom');
}



