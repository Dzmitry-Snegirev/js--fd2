"use strict"

function ClockViewSVG() {

    var myModel = null;
    var myField = null;
    var secondArrow;
    var minuteArrow;
    var hourArrow;
    var angeTime;
    var angeHour;
    var clockRadius;

    this.start = function(model, field) {
        myModel = model;
        myField = field;
        clockRadius = myField.offsetWidth / 2;

        // город + часовой пояс
        myField.innerHTML += model.place + ' (GMT' + model.offset + ')';

        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svg.setAttribute("width", clockRadius * 2);
        svg.setAttribute("height", clockRadius * 2);
        myField.append(svg);

        var clock = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        clock.setAttribute("fill", "yellow");
        clock.setAttribute("r", clockRadius);
        clock.setAttribute("cx", clockRadius);
        clock.setAttribute("cy", clockRadius);
        svg.appendChild(clock);


        var angleStart = 0; //начало
        var angleRot = (360 / 12); //изменение угла
        angeHour = (360 / 12); //цена деления часа
        angeTime = (360 / 60); //цена деления секунды и минуты
        var radius = (clockRadius * 0.8); //расстоянfие от центра часо до центров зеленых цифр
        var radiusNumbs = clockRadius * 0.3; //радиус зеленых цифр
        var widthHour = clockRadius * 0.45; //часовая стрелка
        var hightHour = clockRadius * 0.04; //часовая стрелка
        var widthMinute = clockRadius * 0.7; //минутная стрелка
        var hightMinute = clockRadius * 0.05; //минутная стрелка
        var widthSecond = clockRadius * 0.75; //секундная стрелка
        var hightSecond = clockRadius * 0.01; //секундная стрелка


        for (var i = 1; i <= 12; i++) {
            var clockNum = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
            angleStart += angleRot;
            var angle = parseFloat(angleStart) / 180 * Math.PI; // угол расположения зеленых цифр
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
            } else {
                numtext.setAttribute("x", clockNumX - clockRadius * 0.02);
            }
            numtext.setAttribute("y", clockNumY + clockRadius * 0.06);
            numtext.setAttribute("font-size", clockRadius * 0.16);
            numtext.textContent = i;
            svg.appendChild(numtext);
        }
        hourArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        hourArrow.setAttribute("x1", clockRadius);
        hourArrow.setAttribute("y1", clockRadius);
        hourArrow.setAttribute("x2", clockRadius);
        hourArrow.setAttribute("y2", clockRadius / 2);
        hourArrow.setAttribute("stroke-width", clockRadius / 25);
        hourArrow.setAttribute("stroke-linecap", 'round');
        hourArrow.setAttribute("stroke", 'black');
        svg.appendChild(hourArrow);

        minuteArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        minuteArrow.setAttribute("x1", clockRadius);
        minuteArrow.setAttribute("y1", clockRadius);
        minuteArrow.setAttribute("x2", clockRadius);
        minuteArrow.setAttribute("y2", clockRadius / 3);
        minuteArrow.setAttribute("stroke-width", clockRadius / 30);
        minuteArrow.setAttribute("stroke-linecap", 'round');
        minuteArrow.setAttribute("stroke", 'black');
        svg.appendChild(minuteArrow);

        secondArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        secondArrow.setAttribute("x1", clockRadius);
        secondArrow.setAttribute("y1", clockRadius);
        secondArrow.setAttribute("x2", clockRadius);
        secondArrow.setAttribute("y2", clockRadius / 3);
        secondArrow.setAttribute("stroke-width", clockRadius / 70);
        secondArrow.setAttribute("stroke-linecap", 'round');
        secondArrow.setAttribute("stroke", 'black');
        svg.appendChild(secondArrow);

    }

    this.update = function() {
        secondArrow.setAttribute('transform', "rotate(" + myModel.second * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
        minuteArrow.setAttribute('transform', "rotate(" + myModel.minute * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
        hourArrow.setAttribute('transform', "rotate(" + myModel.hour * angeHour + ',' + clockRadius + ',' + clockRadius + ")");
    }

}