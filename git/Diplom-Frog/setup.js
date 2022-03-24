const canvas = document.getElementById("canvas1");
var ctx1 = canvas.getContext('2d');
canvas1.width = 800;
canvas1.height = 800;

const canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext('2d');
canvas2.width = 800;
canvas2.height = 800;

const canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext('2d');
canvas3.width = 800;
canvas3.height = 800;

const canvas4 = document.getElementById("canvas4");
var ctx4 = canvas4.getContext('2d');
canvas4.width = 800;
canvas4.height = 800;

const canvas5 = document.getElementById("canvas5");
var ctx5 = canvas5.getContext('2d');
canvas5.width = 800;
canvas5.height = 800;

//глобальные переменные 
const grid = 80;//ячека сетки , величина прыжка лягушки
let keys = [];
let score = 0;// счет игры
let attempts = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;

const particlesArray = [];
const maxParticles = 300;
const ripleArray = [];
const carsArray = [];//массив машин
const logsArray = [];//массив бревен и черепах

//ОСНОВНОЙ ФОН
const background_lvl2 = new Image();
background_lvl2.src = "image/background_lvl2.png";
//трава
const grass = new Image();
grass.src = "image/grass.png";
//взрыв
const collisions = new Image();
collisions.src = "image/collisions.png";
//черепахи
const turtle = new Image();
turtle.src = "image/turtles.png";

//бревна
const log = new Image();
log.src = "image/log.png";

//машины
const cars = new Image();
cars.src = "image/cars.png";
let numberOfCars = 3;

//лягушка
const froggerSprite = new Image();
froggerSprite.src = "image/frog_spritesheet.png";
