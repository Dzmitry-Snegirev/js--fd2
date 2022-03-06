const canvas = document.getElementById("canvas1");
var ctx1 = canvas.getContext('2d');
canvas1.width = 700;
canvas1.height = 700;

const canvas2 = document.getElementById("canvas2");
var ctx2 = canvas.getContext('2d');
canvas2.width = 700;
canvas2.height = 700;

const canvas3 = document.getElementById("canvas3");
var ctx3 = canvas.getContext('2d');
canvas3.width = 700;
canvas3.height = 700;

const canvas4 = document.getElementById("canvas4");
var ctx4 = canvas.getContext('2d');
canvas4.width = 700;
canvas4.height = 700;

const canvas5 = document.getElementById("canvas5");
var ctx5 = canvas.getContext('2d');
canvas5.width = 700;
canvas5.height = 700;

//глобальные переменные 
const grid = 80;//ячека сетки , величина прыжка лягушки
let keys = [];
let score = 0;// счет игры
let callCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray = [];
const maxParticles = 300;
const ripleArray = [];
const carsArray = [];//массив машин
const logsArray = [];//массив бревен и черепах
 
//ОСНОВНОЙ ФОН
 const background_lvl2=new Image();
 background_lvl2.src="image/background_lvl2.png";
  
 const grass=new Image();
 grass.src="image/grass.png";
