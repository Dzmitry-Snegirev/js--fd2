function animate() {
	ctx3.clearRect(0, 0, canvas.width, canvas.height);
	frogger.draw();
	frogger.update();
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