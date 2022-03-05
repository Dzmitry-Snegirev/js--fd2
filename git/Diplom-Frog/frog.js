class Frogger {
	constructor() { //описание лягушки
		this.spriteWidht = 250;
		this.spriteHeight = 250;
		this.width = this.spriteWidht / 5;
		this.height = this.spriteHeight / 5;
		this.x = canvas.width / 2 - this.width / 2;
		this.y = canvas.height - this.height - 40;
		this.moving = false;
		this.frameX = 0;
		this.frameY = 0;
	}
	update() {
		//console.log("update");
		if (keys[38]) {// прыжок вверх
			if (this.moving === false) {
				this.y -= grid;
				this.moving = true;
			}
		}
		if (keys[40]) {// прыжок вниз
			if (this.moving === false && this.y < canvas.height - this.height * 2) {
				this.y += grid;
				this.moving = true;
			}
		}
		if (keys[37]) {// прыжок влево
			if (this.moving === false && this.x > this.width) {
				this.x -= grid;
				this.moving = true;
			}
		}
		if (keys[39]) {// прыжок вправо
			if (this.moving === false && this.x < canvas.width - this.width * 2) {
				this.x += grid;
				this.moving = true;
			}
		}
	}
	draw() {
		ctx3.fillStyle = "green";
		ctx3.fillRect(this.x, this.y, this.width, this.height);
	}
	jump() {
		//console.log("jump");
	}
}
const frogger = new Frogger();