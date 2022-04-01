function animate() {
	ctx1.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
	ctx3.clearRect(0, 0, canvas.width, canvas.height);
	ctx4.clearRect(0, 0, canvas.width, canvas.height);
	ctx5.clearRect(0, 0, canvas.width, canvas.height);
	handleRipples();
	ctx2.drawImage(background_lvl2, 0, 0);
	handleParticles();
	frogger.draw();
	frogger.update();
	handleObstacles();
	handleScoreBoard();
	ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
	frame++;
	requestAnimationFrame(animate);
};

animate();

//обработчики управления лягушкой
window.addEventListener("keydown", function (EO) {
	EO = EO || window.event;
	keys = [];
	keys[EO.keyCode] = true;
	if (keys[37] || keys[38] || keys[39] || keys[40]) {
		frogger.jump();
	}
});
window.addEventListener("keyup", function (EO) {
	EO = EO || window.event;
	delete keys[EO.keyCode];
	frogger.moving = false;
	frogger.frameX = 0;
});


//увеличение скорости игры,счет
function scored() {
	frogWin.play();
	score++;
	gameSpeed += 0.05;
	frogger.x = canvas.width / 2 - frogger.width / 2;
	frogger.y = canvas.height - frogger.height - 40;
};

function handleScoreBoard() {
	ctx4.fillstyle = "black";
	ctx4.font = "25px bolder Verdana ";
	ctx4.fillText("Счет", 295, 20);
	ctx4.font = "60px Verdana ";
	ctx4.fillText(score, 300, 70);
	ctx4.font = "15px Verdana ";
	ctx4.strokeText('Попытки: ' + attempts, 10, 175);
	ctx4.strokeText('Скорость игры: ' + gameSpeed.toFixed(1), 10, 195);
};
//проверка на пересечение лягушки и препятсвия 
function collision(first, second) {
	return !(first.x > second.x + second.width ||
		first.x + first.width < second.x ||
		first.y > second.y + second.height ||
		first.y + first.height < second.y);
};

function resetGame() {
	frogger.x = canvas.width / 2 - frogger.width / 2;
	frogger.y = canvas.height - frogger.height - 40;
	attempts--;
	if (attempts < 1) {
		var endgame = confirm("Вы проиграли, если хотите начать зановоб нажмите 'ок'");
		if (endgame) {
			attempts = 3;
			score = 0;
		}
		else {
			remeber();
		}
	}
	gameSpeed = 1;
}

//сохранение имя пользователя
function remeber() {
	var playerName = document.createElement('div');
	playerName.setAttribute('id', 'panelName');
	playerName.style.cssText = 'position: absolute; top:0; left:0; bottom:0; right:0; background-color: rgba(0,0,0,0.8); color: white; text-align: center; font-weight: bold; font-family: cursive; font-size: 40px; z-index: 100';
	pn.appendChild(playerName);
	var inputName = document.createElement('input');
	inputName.setAttribute('class', 'inputName');
	inputName.setAttribute('id', 'Player');
	inputName.setAttribute('type', 'text');
	inputName.style.cssText = 'background-color: white; font-weight: bold; font-style: italic; color: black;';
	playerName.innerHTML = ('КОНЕЦ ИГРЫ' + '<br>' + 'ВАШЕ ИМЯ:' + '<br>');
	playerName.appendChild(inputName);
	var buttonName = document.createElement('button');
	buttonName.style.cssText = 'background-color: black; font-weight: bold; color: white;border-radius: 6px;';
	buttonName.setAttribute('class', 'getNamePlayer');;
	buttonName.innerHTML = 'Запомнить';
	buttonName.setAttribute("onclick", "storeInfo()");
	playerName.appendChild(buttonName);
}

function delGame() {
	panelName.remove();
	score = 0;
	attempts = 3
}