function animate() {
	ctx3.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.drawImage(background_lvl2,0,0,canvas.width,canvas.height);
	frogger.draw();
	frogger.update();
	//handleObstacles();
	ctx4.drawImage(grass,0,0,canvas.width,canvas.height);
	requestAnimationFrame(animate);
}

animate();

//обрботчики
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
});
function scored() {
	score++;
	gameSpeed += 0.05;
	frogger.x = canvas.width / 2 - frogger.width / 2;
	frogger.y = canvas.height - frogger.height - 40;
}