//создане препятсвий
class Obstacle {
	constructor(x, y, width, height, speed, type) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.type = type;
	}
	draw() {
		ctx1.fillStyle = "blue";
		ctx1.fillRect(this.x, this.y, this.width, this.height)
	}
	update() { //
		this.x += this.speed + gameSpeed;
		if(this.speed>0){
			if(this.x>canvas.width+this.width){
				this.x=0-this.width;
			}
		}
		else{
			if(this.x<0-this.width){
				this.x=canvas.width+this.width;
			}
		}
		
	}
}
function initObstacles() { //создание элементов препятсвий
	//линия 1 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i*350 ;//ширина элемента преграды(машины)   
		carsArray.push(new Obstacle(x, canvas.height - grid * 2.4 - 20, grid*2 , grid, 1, "car"))
	}
	//линия 2 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i*300 ;//ширина элемента преграды(машины)   
		carsArray.push(new Obstacle(x, canvas.height - grid * 3.5 - 20, grid*2 , grid, -5, "car"))
	}
	//линия 3 с препятсвиями (дорога)
	for (let i = 0; i < 2; i++) {
		let x = i*400 ;//ширина элемента преграды(машины)  
		carsArray.push(new Obstacle(x, canvas.height - grid * 4.6 - 20, grid*2 , grid, 2, "car"))
	}
	//линия 4 с препятсвиями (река)
	for (let i = 0; i < 2; i++) {
		let x = i*400 ;//ширина элемента преграды(бревна)   
		logsArray.push(new Obstacle(x, canvas.height - grid * 5.9 - 20, grid*2 , grid, -2, "log"))
	}
	//линия 5 с препятсвиями (река)
	for (let i = 0; i < 3; i++) {
		let x = i*170 ;//ширина элемента преграды(черепахи)   
		logsArray.push(new Obstacle(x, canvas.height - grid * 6.7 - 20, grid , grid, 1, "turtle"))
	}
}
initObstacles();

function handleObstacles() {
	for (let i = 0; i < carsArray.length; i++) {
		carsArray[i].update();
		carsArray[i].draw();
	}
	for (let i = 0; i < logsArray.length; i++) {
		logsArray[i].update();
		logsArray[i].draw();
	}
}