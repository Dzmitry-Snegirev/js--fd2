'use strict'
// Нью-Йорк
var model1 = new Clock('Нью-Йорк', -5);
var view1 = new ClockViewDOM();
var controller1 = new ClockControllerButtons();

var container1 = document.getElementById('clock1');
model1.start(view1);
view1.start(model1, container1);
controller1.start(model1, container1);

model1.rotation();
model1.onClock();

//Лондон
var model2 = new Clock('Лондон', 0);
var view2 = new ClockViewDOM();
var controller2 = new ClockControllerButtons();

var container2 = document.getElementById('clock2');
model2.start(view2);
view2.start(model2, container2);
controller2.start(model2, container2);

model2.rotation();
model2.onClock();

//Берлин
var model3 = new Clock('Берлин', +1);
var view3 = new ClockViewSVG();
var controller3 = new ClockControllerButtons();

var container3 = document.getElementById('clock3');
model3.start(view3);
view3.start(model3, container3);
controller3.start(model3, container3);

model3.rotation();
model3.onClock();

//Минск
var model4 = new Clock('Минск', +3);
var view4 = new ClockViewSVG();
var controller4 = new ClockControllerButtons();

var container4 = document.getElementById('clock4');
model4.start(view4);
view4.start(model4, container4);
controller4.start(model4, container4);

model4.rotation();
model4.onClock();

//Токио
var model5 = new Clock('Токио', +9);
var view5 = new ClockViewCanvas();
var controller5 = new ClockControllerButtons();

var container5 = document.getElementById('clock5');
model5.start(view5);
view5.start(model5, container5);
controller5.start(model5, container5);

model5.rotation();
model5.onClock();

//Владивоток
var model6 = new Clock('Владивосток', +10);
var view6 = new ClockViewCanvas();
var controller6 = new ClockControllerButtons();

var container6 = document.getElementById('clock6');
model6.start(view6);
view6.start(model6, container6);
controller6.start(model6, container6);

model6.rotation();
model6.onClock();