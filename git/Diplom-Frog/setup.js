const canvas = document.getElementById("canvas1");
var ctx1 = canvas.getContext('2d');
canvas1.width = 700;
canvas1.height = 700;

const canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext('2d');
canvas2width = 700;
canvas2.height = 700;

const canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext('2d');
canvas3.width = 700;
canvas3.height = 700;

const canvas4 = document.getElementById("canvas4");
var ctx4 = canvas4.getContext('2d');
canvas4.width = 700;
canvas4.height = 700;

const canvas5 = document.getElementById("canvas5");
var ctx5 = canvas5.getContext('2d');
canvas5.width = 700;
canvas5.height = 700;

//глобальные переменные 
const grid = 80;//ячека сетки , величина прыжка лягушки
let keys = [];
let score = 0;// счет игры
let callCount = 0;
let frame = 0;
let gamespeed = 1;

const particlesArray = [];
const maxParticles = 300;
const ripleArray = [];
const carsArray = [];
const logsArray = [];
