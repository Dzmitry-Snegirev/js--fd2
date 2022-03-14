"use strict"

function ClockControllerButtons() {
	var myModel = null;
	var myField = null;

	this.start = function (model, field) {
		myModel = model;
		myField = field;

		var start = myField.querySelector('.start');
		start.addEventListener('click', this.startClock);
		var stop = myField.querySelector('.stop');
		stop.addEventListener('click', this.stopClock);
	}
	this.startClock = function () {
		myModel.onClock();
	}
	this.stopClock = function () {
		myModel.offClock();
	}

}

