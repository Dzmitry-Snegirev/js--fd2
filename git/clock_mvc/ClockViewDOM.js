function ClockViewDOM() {

    var myModel = null;
    var myField = null;
    var secondArrow;
    var minuteArrow;
    var hourArrow;
    var angeTime;
    var angeHour;

    this.start = function(model, field) {
        myModel = model;
        myField = field;

        // город + часовой пояс
        myField.innerHTML += model.place + ' (GMT' + model.offset + ')';

        var clock = document.createElement('div');
        clock.className = "clock_style";
        myField.append(clock);

        var clockRadius = myField.offsetWidth / 2;

        var clockX = clockRadius; //центр
        var clockY = clockRadius; //центр
        clock.style.width = 2 * clockRadius + 'px';
        clock.style.height = 2 * clockRadius + 'px';

        var angleStart = 0; //начало
        var angleRot = (360 / 12); //изменение угла
        angeHour = (360 / 12); //цена деления часа
        angeTime = (360 / 60); //цена деления секунды и минуты
        var radius = (clockRadius * 0.8); //расстояние от центра часо до центров зеленых цифр
        var radiusNumbs = clockRadius * 0.3; //радиус зеленых цифр
        var widthHour = clockRadius * 0.45; //часовая стрелка
        var hightHour = clockRadius * 0.04; //часовая стрелка
        var widthMinute = clockRadius * 0.7; //минутная стрелка
        var hightMinute = clockRadius * 0.05; //минутная стрелка
        var widthSecond = clockRadius * 0.75; //секундная стрелка
        var hightSecond = clockRadius * 0.01; //секундная стрелка


        for (var i = 1; i <= 12; i++) {
            var clockNum = document.createElement('div');
            clockNum.innerHTML = i;
            clockNum.className = "clockNum_style";
            clock.appendChild(clockNum);
            angleStart += angleRot;
            var angle = parseFloat(angleStart) / 180 * Math.PI; // угол расположения зеленых цифр
            var clockNumX = clockX + radius * Math.sin(angle);
            var clockNumY = clockY - radius * Math.cos(angle);
            clockNum.style.width = radiusNumbs + 'px';
            clockNum.style.height = radiusNumbs + 'px';
            clockNum.style.lineHeight = radiusNumbs + 'px';
            clockNum.style.fontSize = radiusNumbs * 0.6 + 'px';
            clockNum.style.left = Math.round(clockNumX - clockNum.offsetWidth / 2) + 'px';
            clockNum.style.top = Math.round(clockNumY - clockNum.offsetHeight / 2) + 'px';
        }


        hourArrow = document.createElement('div');
        hourArrow.className = "hourArrow_style";
        var hourArrowX = clockRadius; //центр
        var hourArrowY = clockRadius;
        hourArrow.style.width = widthHour + 'px';
        hourArrow.style.height = hightHour + 'px';
        hourArrow.style.top = clockRadius * 0.96 + 'px';
        hourArrow.style.left = clockRadius * 0.6 + 'px';
        hourArrow.style.transformOrigin = clockRadius * 0.4 + "px";

        minuteArrow = document.createElement('div');
        minuteArrow.className = "minuteArrow_style";
        var minuteArrowX = clockRadius; //центр
        var minuteArrowY = clockRadius;
        minuteArrow.style.width = widthMinute + 'px';
        minuteArrow.style.height = hightMinute + 'px';
        minuteArrow.style.top = clockRadius * 0.99 + 'px';
        minuteArrow.style.left = clockRadius * 0.47 + 'px';
        minuteArrow.style.transformOrigin = clockRadius * 0.55 + "px";

        secondArrow = document.createElement('div');
        secondArrow.className = "secondArrow_style";
        var secondArrowX = clockRadius; //центр
        var secondArrowY = clockRadius;
        secondArrow.style.width = widthSecond + 'px';
        secondArrow.style.height = hightSecond + 'px';
        secondArrow.style.top = clockRadius * 1.01 + 'px';
        secondArrow.style.left = clockRadius * 0.3 + 'px';
        secondArrow.style.transformOrigin = clockRadius * 0.7 + "px";

        var timeNum = document.createElement('div');
        timeNum.className = "timeNum_style";
        var timeNumX = clockRadius; //центр
        var timeNumY = clockRadius;
        timeNum.style.top = clockRadius * 0.4 + 'px';
        timeNum.style.left = clockRadius * 0.7 + 'px';
        timeNum.style.fontSize = clockRadius * 0.2 + 'px';

        clock.appendChild(secondArrow);
        clock.appendChild(minuteArrow);
        clock.appendChild(hourArrow);
        clock.appendChild(timeNum);
    }

    this.update = function() {
        secondArrow.style.transform = "rotate(" + (myModel.second + 15) * angeTime + "deg)";
        minuteArrow.style.transform = "rotate(" + (myModel.minute + 15) * angeTime + "deg)";
        hourArrow.style.transform = "rotate(" + (myModel.hour + 3) * angeHour + "deg)";
    }
}