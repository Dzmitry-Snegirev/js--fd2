"use strict"
var score = document.createElement('div');
score.className = "score_style";
document.body.append(score);
var field = document.createElement('div');
field.className = "field_style";
document.body.append(field);
var leftBoard = document.createElement('div');
leftBoard.className = "leftBoard_style";
field.appendChild(leftBoard);
var rightBoard = document.createElement('div');
rightBoard.className = "rightBoard_style";
field.appendChild(rightBoard);
var ball = document.createElement('div');
ball.className = "ball_style";
field.appendChild(ball);


var speedBallX = 2.2;//скорость мяча по X
var speedBallY = 2.2;//скорость мяча по Y
var random;// вариант направления мяча
var m = 4;//max количество направлений мяча
var n = 1;//min количество направления мяча
var scoreLeft = 0;// очки левого игрока
var scoreRight = 0;// очки правого игрока
var leftY;// для направление движения ракеток
var rightY;//  для направление движения ракеток
var speedY = 3;//скорость ракеток


var ballTop = ball.offsetTop;
var ballLeft = ball.offsetLeft;

//направление ракеток
window.addEventListener('keydown', moveBoards, false);
window.addEventListener('keyup', stopBoards, false);

function moveBoards(EO) {
	EO = EO || window.event;

	if (EO.keyCode == '16') {
		leftY = -speedY;
	}
	if (EO.keyCode == '17') {
		leftY = speedY;
	}
	if (EO.keyCode == '38') {
		rightY = -speedY;
	}
	if (EO.keyCode == '40') {
		rightY = speedY;
	}
}
function stopBoards(EO) {
	EO = EO || window.event;
	if (EO.keyCode == '16') {
		leftY = 0;
	}
	if (EO.keyCode == '17') {
		leftY = 0;
	}
	if (EO.keyCode == '38') {
		rightY = 0;
	}
	if (EO.keyCode == '40') {
		rightY = 0;
	}
}

function start() {
	//мяч в центре, старт игры
	ball.style.left = ballLeft + 'px';
	ball.style.top = ballTop + 'px';
	random = Math.floor(Math.random() * (m - n + 1)) + n;
	requestAnimationFrame(tick);
}
function tick() {
	//движение ракеток, проверка входа за поле
	leftBoard.style.top = leftBoard.offsetTop + leftY + 'px';
	if (leftBoard.offsetTop < 0) {
		leftBoard.style.top = 0;
	} else if (leftBoard.offsetTop + leftBoard.offsetHeight > field.offsetHeight) {
		leftBoard.style.top = field.offsetHeight - leftBoard.offsetHeight + 'px';
	}

	rightBoard.style.top = rightBoard.offsetTop + rightY + 'px';
	if (rightBoard.offsetTop < 0) {
		rightBoard.style.top = 0;
	} else if (rightBoard.offsetTop + rightBoard.offsetHeight > field.offsetHeight) {
		rightBoard.style.top = field.offsetHeight - rightBoard.offsetHeight + 'px';
	}
	//случайный выбор движения мяча
	var ballPosX = ball.offsetLeft;
	var ballPosY = ball.offsetTop;
	if (random == 1) {
		ballPosX -= speedBallX;
		ballPosY += speedBallY;
	} else if (random == 2) {
		ballPosX -= speedBallX;
		ballPosY -= speedBallY;
	} else if (random == 3) {
		ballPosX += speedBallX;
		ballPosY -= speedBallY;
	} else if (random == 4) {
		ballPosX += speedBallX;
		ballPosY += speedBallY;
	}

	ball.style.top = ballPosY + 'px';
	//проверка выхода мяча по вертикали
	if (ballPosY + ball.offsetHeight > field.offsetHeight) {
		speedBallY = -speedBallY;
		ballPosY = field.offsetHeight - ball.offsetHeight;
	}
	if (ballPosY < 0) {
		speedBallY = -speedBallY;
		ballPosY = 0;
	}

	//проверка выхода мяча по горизонтали , счет игры
	ball.style.left = ballPosX + 'px';

	if (ballPosX + ball.offsetWidth > field.offsetWidth - rightBoard.offsetWidth && ballPosY + ball.offsetHeight > rightBoard.offsetTop && ballPosY + ball.offsetHeight < rightBoard.offsetTop + rightBoard.offsetHeight) {
		speedBallX = -speedBallX;
	} else if (ballPosX + ball.offsetWidth > field.offsetWidth) {
		ball.style.left = field.offsetWidth - ball.offsetWidth + 'px';

		scoreRight++;
		score.innerHTML = scoreLeft + ':' + scoreRight;
		return;
	}

	if (ballPosX < leftBoard.offsetWidth && ballPosY + ball.offsetHeight > leftBoard.offsetTop && ballPosY + ball.offsetHeight < leftBoard.offsetTop + leftBoard.offsetHeight) {
		speedBallX = -speedBallX;
	} else if (ballPosX < 0) {
		ball.style.left = 0 + 'px';

		scoreLeft++;
		score.innerHTML = scoreLeft + ':' + scoreRight;
		return;
	}
	requestAnimationFrame(tick);
}





