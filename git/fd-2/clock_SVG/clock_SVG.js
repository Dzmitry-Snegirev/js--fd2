"use strict"
function addClock() {
	var form = document.forms.FPos;
	var clockRadius = parseFloat(form.elements.Radius.value) / 2;
	var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	svg.setAttribute("width", clockRadius * 2);
	svg.setAttribute("height", clockRadius * 2);
	document.body.append(svg);
	var clock = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	clock.setAttribute("fill", "yellow");
	clock.setAttribute("r", clockRadius);
	clock.setAttribute("cx", clockRadius);
	clock.setAttribute("cy", clockRadius);
	svg.appendChild(clock);


	var angleStart = 0;//начало
	var angleRot = (360 / 12);//изменение угла
	var angeHour = (360 / 12);//цена деления часа
	var angeTime = (360 / 60);//цена деления секунды и минуты
	var radius = (clockRadius * 0.8); //расстояние от центра часо до центров зеленых цифр
	var radiusNumbs = clockRadius * 0.3;//радиус зеленых цифр
	var widthHour = clockRadius * 0.45;//часовая стрелка
	var hightHour = clockRadius * 0.04;//часовая стрелка
	var widthMinute = clockRadius * 0.7;//минутная стрелка
	var hightMinute = clockRadius * 0.05;//минутная стрелка
	var widthSecond = clockRadius * 0.75;//секундная стрелка
	var hightSecond = clockRadius * 0.01;//секундная стрелка
	var currTimeStr = "";

	for (var i = 1; i <= 12; i++) {
		var clockNum = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
		angleStart += angleRot;
		var angle = parseFloat(angleStart) / 180 * Math.PI;// угол расположения зеленых цифр
		var clockNumX = clockRadius + radius * Math.sin(angle);
		var clockNumY = clockRadius - radius * Math.cos(angle);
		clockNum.setAttribute("fill", "green");
		clockNum.setAttribute("r", clockRadius * 0.16);
		clockNum.setAttribute("cx", clockNumX);
		clockNum.setAttribute("cy", clockNumY);
		svg.appendChild(clockNum);

		var numtext = document.createElementNS("http://www.w3.org/2000/svg", 'text');
		if (i > 9) {
			numtext.setAttribute("x", clockNumX - clockRadius * 0.09);
		}
		else {
			numtext.setAttribute("x", clockNumX - clockRadius * 0.02);
		}
		numtext.setAttribute("y", clockNumY + clockRadius * 0.06);
		numtext.setAttribute("font-size", clockRadius * 0.16);
		numtext.textContent = i;
		svg.appendChild(numtext);
	}
	var hourArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	hourArrow.setAttribute("x1", clockRadius);
	hourArrow.setAttribute("y1", clockRadius);
	hourArrow.setAttribute("x2", clockRadius);
	hourArrow.setAttribute("y2", clockRadius / 2);
	hourArrow.setAttribute("stroke-width", clockRadius / 25);
	hourArrow.setAttribute("stroke-linecap", 'round');
	hourArrow.setAttribute("stroke", 'black');
	svg.appendChild(hourArrow);

	var minuteArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	minuteArrow.setAttribute("x1", clockRadius);
	minuteArrow.setAttribute("y1", clockRadius);
	minuteArrow.setAttribute("x2", clockRadius);
	minuteArrow.setAttribute("y2", clockRadius / 3);
	minuteArrow.setAttribute("stroke-width", clockRadius / 30);
	minuteArrow.setAttribute("stroke-linecap", 'round');
	minuteArrow.setAttribute("stroke", 'black');
	svg.appendChild(minuteArrow);

	var secondArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	secondArrow.setAttribute("x1", clockRadius);
	secondArrow.setAttribute("y1", clockRadius);
	secondArrow.setAttribute("x2", clockRadius);
	secondArrow.setAttribute("y2", clockRadius / 3);
	secondArrow.setAttribute("stroke-width", clockRadius / 70);
	secondArrow.setAttribute("stroke-linecap", 'round');
	secondArrow.setAttribute("stroke", 'black');
	svg.appendChild(secondArrow);

	var timeNum = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	timeNum.setAttribute("x", clockRadius * 0.7);
	timeNum.setAttribute("y", clockRadius * 0.6);
	timeNum.setAttribute("font-size", clockRadius * 0.16);
	svg.appendChild(timeNum);

	function updateTime() {
		var currTime = new Date();

		var second = currTime.getSeconds();
		var minute = currTime.getMinutes();
		var hour = currTime.getHours();
		hour = hour < 12 ? hour : hour - 12;


		secondArrow.setAttribute('transform', "rotate(" + second * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
		minuteArrow.setAttribute('transform', "rotate(" + minute * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
		hourArrow.setAttribute('transform', "rotate(" + hour * angeHour + ',' + clockRadius + ',' + clockRadius + ")");

		currTimeStr = formatDateTime(currTime);
		timeNum.innerHTML = currTimeStr;

		console.log('Текущее время - ' + currTimeStr);
	}
	setInterval(updateTime, 1000);
	updateTime();
}

function formatDateTime(dt) {
	var year = dt.getFullYear();
	var month = dt.getMonth() + 1;
	var day = dt.getDate();
	var hours = dt.getHours();
	var minutes = dt.getMinutes();
	var seconds = dt.getSeconds();
	return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
}

// дополняет строку val слева нулями до длины Len
function str0l(val, len) {
	var strVal = val.toString();
	while (strVal.length < len)
		strVal = '0' + strVal;
	return strVal;
}
