//создане препятсвий
class Obstacle {
	constructor(x, y, width, height, speed, type) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.type = type;
		this.frameX = 0;
		this.frameY = 0;
		this.randomise = Math.floor(Math.random() * 30 + 30);
		this.carType = Math.floor(Math.random() * numberOfCars);
	}
	//рисуем препятсвия
	draw() {
		if (this.type === "turtle") {//анимация черепахи , переключение кадров
			if (frame % 10 === 0) {
				if (this.frameX >= 1) this.frameX = 0;
				else this.frameX++;
			}
			ctx1.drawImage(turtle, this.frameX * 70, this.frameX * 70, 70, 70, this.x, this.y, this.width, this.height)
		}
		else if (this.type === "log") {
			ctx1.drawImage(log, this.x, this.y, this.width, this.height)
		}
		else {
			//	ctx2.fillRect(this.x, this.y, this.width, this.height)
			ctx2.drawImage(cars, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
		}
	}
	update() {
		this.x += this.speed * gameSpeed;
		if (this.speed > 0) {
			if (this.x > canvas.width + this.width) {
				this.x = 0 - this.width;
				this.carType = Math.floor(Math.random() * numberOfCars);//случайный выбор авто
			}
		}
		else {//движение в обратную сторону
			this.frameX = 1;
			if (this.x < 0 - this.width) {
				this.x = canvas.width + this.width;
				this.carType = Math.floor(Math.random() * numberOfCars);
			}
		}

	}
}
function initObstacles() { //создание элементов препятсвий
	//линия 1 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i * 350;//ширина элемента преграды(машины)   
		carsArray.push(new Obstacle(x, canvas.height - grid * 2.7 - 20, grid * 2, grid, 1, "car"))
	}
	//линия 2 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i * 300;//ширина элемента преграды(машины)   
		carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, -5, "car"))
	}
	//линия 3 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i * 400;//ширина элемента преграды(машины)  
		carsArray.push(new Obstacle(x, canvas.height - grid * 5.3 - 20, grid * 2, grid, 2, "car"))
	}
	//линия 4 с препятсвиями (река)
	for (let i = 0; i < 2; i++) {
		let x = i * 400;//ширина элемента преграды(бревна)   
		logsArray.push(new Obstacle(x, canvas.height - grid * 6.9 - 20, grid * 2, grid, -2, "log"))
	}
	//линия 5 с препятсвиями (река)
	for (let i = 0; i < 3; i++) {
		let x = i * 180;//ширина элемента преграды(черепахи)   
		logsArray.push(new Obstacle(x, canvas.height - grid * 7.9 - 20, grid, grid, 1, "turtle"))
	}
}
initObstacles();

function handleObstacles() {//отображение препятсвий
	for (let i = 0; i < carsArray.length; i++) {
		carsArray[i].update();
		carsArray[i].draw();
	}
	for (let i = 0; i < logsArray.length; i++) {
		logsArray[i].update();
		logsArray[i].draw();
	}
	//столкновение с машиной

	for (let i = 0; i < carsArray.length; i++) {
		if (collision(frogger, carsArray[i])) {
			ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50);
			vibro(true);
			resetGame();
			audiofrog.play();
		}
	}

	//столкновение с бревнами/черепахами 
	if (frogger.y < 250 && frogger.y > 100) {
		safe = false;

		for (let i = 0; i < logsArray.length; i++) {
			if (collision(frogger, logsArray[i])) {
				frogger.x += logsArray[i].speed;
				safe = true;
			}
		}
		if (!safe) {
			for (let i = 0; i < 30; i++) {
				ripleArray.unshift(new Particle(frogger.x, frogger.y));
			}
			vibro(true);
			audiofrog.play();
			resetGame();
		}
	}
}