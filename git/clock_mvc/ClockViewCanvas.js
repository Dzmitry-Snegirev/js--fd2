"use strict"

function ClockViewCanvas() {
    var myModel = null;
    var myField = null;
    var cvs;
    var clockRadius;
    var second;
    var minute;
    var hour;

    this.start = function(model, field) {
        myModel = model;
        myField = field;

        // город + часовой пояс
        myField.innerHTML += model.place + ' (GMT' + model.offset + ')';

        clockRadius = myField.offsetWidth / 2;
        cvs = document.createElement('canvas');
        cvs.setAttribute("width", clockRadius * 2);
        cvs.setAttribute("height", clockRadius * 2);
        myField.appendChild(cvs);
    }

    this.update = function() {
        var context = cvs.getContext('2d');
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(clockRadius, clockRadius, clockRadius, 0, Math.PI * 2, false);
        context.fill();

        var angleStart = 0; //начало
        var angleRot = (360 / 12); //изменение угла
        var radius = (clockRadius * 0.8); //расстояние от центра часо до центров зеленых цифр


        for (var i = 1; i <= 12; i++) {
            angleStart += angleRot;
            var angle = parseFloat(angleStart) / 180 * Math.PI; // угол расположения зеленых цифр
            var clockNumX = clockRadius + radius * Math.sin(angle);
            var clockNumY = clockRadius - radius * Math.cos(angle);

            context.fillStyle = 'green';
            context.beginPath();
            context.arc(clockNumX, clockNumY, clockRadius * 0.16, 0, Math.PI * 2, false);
            context.fill();

            context.fillStyle = 'black';
            context.font = 'italic bold 28px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(i, clockNumX - clockRadius * 0.01, clockNumY + clockRadius * 0.02);
        }


        var contextSecond = cvs.getContext('2d');
        contextSecond.strokeStyle = 'black';
        contextSecond.lineCap = 'round';
        contextSecond.lineWidth = 2;
        contextSecond.beginPath();
        contextSecond.moveTo(clockRadius, clockRadius);
        contextSecond.lineTo((clockRadius + clockRadius * 0.75 * Math.sin(myModel.second / 60 * 2 * Math.PI)), (clockRadius - clockRadius * 0.75 * Math.cos(myModel.second / 60 * 2 * Math.PI)));
        contextSecond.stroke();

        var contexMinute = cvs.getContext('2d');
        contexMinute.strokeStyle = 'black';
        contexMinute.lineCap = 'round';
        contexMinute.lineWidth = 6;
        contexMinute.beginPath();
        contexMinute.moveTo(clockRadius, clockRadius);
        contexMinute.lineTo((clockRadius + clockRadius * 0.6 * Math.sin(myModel.minute / 60 * 2 * Math.PI)), (clockRadius - clockRadius * 0.6 * Math.cos(myModel.minute / 60 * 2 * Math.PI)));
        contexMinute.stroke();

        var contexHour = cvs.getContext('2d');
        contexHour.strokeStyle = 'black';
        contexHour.lineCap = 'round';
        contexHour.lineWidth = 10;
        contexHour.beginPath();
        contexHour.moveTo(clockRadius, clockRadius);
        contexHour.lineTo((clockRadius + clockRadius * 0.4 * Math.sin(myModel.hour / 12 * 2 * Math.PI + myModel.minute / 60 / 2)), (clockRadius - clockRadius * 0.4 * Math.cos(myModel.hour / 12 * 2 * Math.PI + myModel.minute / 60 / 2)));
        contexHour.stroke();
    }
}