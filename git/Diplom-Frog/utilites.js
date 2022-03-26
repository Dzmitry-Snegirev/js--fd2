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

//обработчики
window.addEventListener("keydown", function(EO) {
    EO = EO || window.event;
    keys = [];
    keys[EO.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }

});

window.addEventListener("keyup", function(EO) {
    EO = EO || window.event;
    delete keys[EO.keyCode];
    frogger.moving = false;
    frogger.frameX = 0;
});
//увеличение скорости игры,счет
function scored() {
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
//проверка на пересечение лягушки и препятсвий 
function collision(first, second) {
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y);
};

function resetGame() {
    frogger.x = canvas.width / 2 - frogger.width / 2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    attempts++;
    gameSpeed = 1;
}