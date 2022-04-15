"use strict"
function addClock() {
	var form = document.forms.FPos;
	var clock = document.createElement('div');
	clock.className = "clock_style";
	document.body.append(clock);
	var clockRadius = parseFloat(form.elements.Radius.value) / 2;
	var clockX = clockRadius;//центр
	var clockY = clockRadius;//центр
	clock.style.width = 2 * clockRadius + 'px';
	clock.style.height = 2 * clockRadius + 'px';

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
		var clockNum = document.createElement('div');
		clockNum.innerHTML = i;
		clockNum.className = "clockNum_style";
		clock.appendChild(clockNum);
		angleStart += angleRot;
		var angle = parseFloat(angleStart) / 180 * Math.PI;// угол расположения зеленых цифр
		var clockNumX = clockX + radius * Math.sin(angle);
		var clockNumY = clockY - radius * Math.cos(angle);
		clockNum.style.width = radiusNumbs + 'px';
		clockNum.style.height = radiusNumbs + 'px';
		clockNum.style.lineHeight = radiusNumbs + 'px';
		clockNum.style.fontSize = radiusNumbs * 0.6 + 'px';
		clockNum.style.left = Math.round(clockNumX - clockNum.offsetWidth / 2) + 'px';
		clockNum.style.top = Math.round(clockNumY - clockNum.offsetHeight / 2) + 'px';
	}


	var hourArrow = document.createElement('div');
	hourArrow.className = "hourArrow_style";
	var hourArrowX = clockRadius;//центр
	var hourArrowY = clockRadius;
	hourArrow.style.width = widthHour + 'px';
	hourArrow.style.height = hightHour + 'px';
	hourArrow.style.top = clockRadius * 0.96 + 'px';
	hourArrow.style.left = clockRadius * 0.6 + 'px';
	hourArrow.style.transformOrigin = clockRadius * 0.4 + "px";

	var minuteArrow = document.createElement('div');
	minuteArrow.className = "minuteArrow_style";
	var minuteArrowX = clockRadius;//центр
	var minuteArrowY = clockRadius;
	minuteArrow.style.width = widthMinute + 'px';
	minuteArrow.style.height = hightMinute + 'px';
	minuteArrow.style.top = clockRadius * 0.99 + 'px';
	minuteArrow.style.left = clockRadius * 0.45 + 'px';
	minuteArrow.style.transformOrigin = clockRadius * 0.55 + "px";

	var secondArrow = document.createElement('div');
	secondArrow.className = "secondArrow_style";
	var secondArrowX = clockRadius;//центр
	var secondArrowY = clockRadius;
	secondArrow.style.width = widthSecond + 'px';
	secondArrow.style.height = hightSecond + 'px';
	secondArrow.style.top = clockRadius * 1.01 + 'px';
	secondArrow.style.left = clockRadius * 0.3 + 'px';
	secondArrow.style.transformOrigin = clockRadius * 0.7 + "px";

	var timeNum = document.createElement('div');
	timeNum.className = "timeNum_style";
	var timeNumX = clockRadius;//центр
	var timeNumY = clockRadius;
	timeNum.style.top = clockRadius * 0.4 + 'px';
	timeNum.style.left = clockRadius * 0.7 + 'px';
	timeNum.style.fontSize = clockRadius * 0.2 + 'px';

	clock.appendChild(secondArrow);
	clock.appendChild(minuteArrow);
	clock.appendChild(hourArrow);
	clock.appendChild(timeNum);

	function updateTime() {
		var currTime = new Date();

		var second = currTime.getSeconds();
		var minute = currTime.getMinutes();
		var hour = currTime.getHours();
		hour = hour < 12 ? hour : hour - 12;

		secondArrow.style.transform = "rotate(" + (second + 15) * angeTime + "deg)";
		minuteArrow.style.transform = "rotate(" + (minute + 15) * angeTime + "deg)";
		hourArrow.style.transform = "rotate(" + (hour + 3) * angeHour + "deg)";

		currTimeStr = formatDateTime(currTime);
		timeNum.innerHTML = currTimeStr;

		console.log('Текущее время - ' + currTimeStr);
	}

	setInterval(updateTime, 1000);
	updateTime();
}


// форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
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
