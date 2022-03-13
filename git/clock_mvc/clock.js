"use strict"

function Clock(place, offset) {
    var self = this;
    var myView;
    self.start = function(view) {
        myView = view;
    }
    self.second = null;
    self.minute = null;
    self.hour = null;
    self.place = place; // название города
    self.offset = offset; //изменение часового пояса
    if (offset == 0) {
        self.offset = '';
    } else if (offset > 0) {
        self.offset = '+' + offset;
    }
    //изменение стрелки , время
    self.rotation = function() {
            var date = new Date;
            date.setHours(date.getUTCHours() + offset);
            self.second = date.getSeconds();
            self.minute = date.getMinutes();
            if (date.getHours() < 12) {
                self.hour = date.getHours();
            } else {
                self.hour = (date.getHours() - 12);
            }
            if (myView) {
                myView.update();
            }
        }
        //индификатор таймера
    var timer = null;
    self.onClock = function() {
        timer = setInterval(self.rotation, 1000);
    }
    self.offClock = function() {
        clearInterval(timer);
    }

};