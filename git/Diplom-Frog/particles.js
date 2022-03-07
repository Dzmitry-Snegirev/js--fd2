class Particle { //класс для описания частиц пыли и кругов на воде
	constructor(x, y) {
		this.x = x + 25;//центр лягушки
		this.y = y + 25;//центр лягушки
		this.radius = Math.random() * 20 + 1;
		this.opacity = 1;
		this.directionX = Math.random() * 1 - 0.5;
		this.directionY = Math.random() * 1 - 0.5;
	}
	draw() {
		ctx3.fillStyle = 'rgba(150,150,150,' + this.opacity + ')';
		ctx3.beginPath();
		ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx3.fill();
		ctx3.closePath();
	}
	update() {
		this.x += this.directionX;
		this.y += this.directionY;

		if (this.opacity > 0.1) {
			this.opacity -= 0.9
		}
		if (this.radius > 0.15) {
			this.radius -= 0.14;
		}
	}
	drawRipple() {
		ctx3.strokeStyle = 'rgba(255,255,255,' + this.opacity + ')';
		ctx3.beginPath();
		ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx3.stroke();
		ctx3.closePath();
	}
	ripple() {//водные круги
		if (this.radius < 50) {
			this.radius += 0.5;
			this.x -= 0.03;
			this.y -= 0.03;
		}
		if (this.opacity > 0) {
			this.opacity -= 0.02;
		}
	}
}

function handleParticles() {
	//дорожная пыль
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update();
		particlesArray[i].draw();
	}
	if (particlesArray.length > maxParticles) {
		for (let i = 0; i < 30; i++) {
			particlesArray.pop();
		}
	}
	if ((keys[37] || keys[38] || keys[39] || keys[40]) && frogger.y > 250 && particlesArray.length < maxParticles + 10) {//создаем пылинки
		for (let i = 0; i < 10; i++) {
			particlesArray.unshift(new Particle(frogger.x, frogger.y));
		}
	}
}
//водые круги
function handleRipples() {
	for (let i = 0; i < ripleArray.length; i++) {
		ripleArray[i].ripple();
		ripleArray[i].drawRipple();
	}
	if (ripleArray.length > 20) {
		for (let i = 0; i < 5; i++) {
			ripleArray.pop();
		}
	}
	if ((keys[37] || keys[38] || keys[39] || keys[40]) && frogger.y < 250 && frogger.y > 100) {
		for (let i = 0; i < 20; i++) {
			ripleArray.unshift(new Particle(frogger.x, frogger.y));
		}
	}
}
