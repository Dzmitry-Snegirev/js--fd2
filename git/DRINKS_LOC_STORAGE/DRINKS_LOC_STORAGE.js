"use strict"
class LockStorageClass {

	constructor(elem) {
		this.elem = elem;
		var store = localStorage.getItem(elem);
		if (store) {
			this.hash = JSON.parse(store);
		}
		else {
			this.hash = {};
		}
	}
	addValue(key, value) {
		this.hash[key] = value;
		localStorage[this.elem] = JSON.stringify(this.hash);
	}
	getValue(key) {
		return this.hash[key]
	}
	deleteValue(key) {
		if (key in this.hash) {
			delete this.hash[key];
			localStorage[this.elem] = JSON.stringify(this.hash);
			return true;
		}
		else {
			return false;
		}
	}
	getKeys() {
		var arr = [];
		for (var key in this.hash) {
			arr.push(key);
		}
		return arr;
	}
}
var drinkStorage = new LockStorageClass('drink');
function giveinfoDrink() {
	document.getElementById("put");
	let name = prompt("Введите название напитка").toLowerCase();
	var alc_drink = confirm("Даный напиток алкогольный ,если да нажмите 'ok' ,если нет отмена");
	let alc = (alc_drink) ? "да" : "нет";
	let recept = prompt("Введите рецепт данного напитка").toLowerCase();
	let info = { "Алкогольный": alc, "Рецепт приготовления": recept }
	drinkStorage.addValue(name, info);
}
function getinfo() {
	let result = "";
	document.getElementById("get");
	let nameDrink = prompt("Введите название напитка").toLowerCase();
	let drink = drinkStorage.getValue(nameDrink);
	if (drink) {
		result = `Напиток: ${nameDrink} 
Алкогольный: ${drink['Алкогольный']}
Рецепт приготовления:  ${drink['Рецепт приготовления']}`
	}
	else {
		result = "Данный напиток отсуствует"
	}
	return console.log(result);
}
function delDrink() {
	document.getElementById("del");
	let nameDrink = prompt("Введите название напитка");
	let result = drinkStorage.deleteValue(nameDrink);
	if (result) {
		console.log("Данный напиток удален");
	}
	else {
		console.log("Данный напиток отсуствует");
	}
}
function allDrink() {
	document.getElementById("all");
	var result = drinkStorage.getKeys();
	return console.log(result);
}

var foodStorage = new LockStorageClass('food');
function giveinfoMenu_item() {
	document.getElementById("putfood");
	let nameFood = prompt("Введите название блюда").toLowerCase();
	var foodVeg = confirm("Данное блюдо вегетарианское ,если да нажмите 'ok' ,если нет отмена");
	let food = (foodVeg) ? "да" : "нет";
	let receptFood = prompt("Введите рецепт данного блюда").toLowerCase();
	let infoFood = { "Вегетарианское": food, "Рецепт приготовления": receptFood }
	foodStorage.addValue(nameFood, infoFood);
}
function getinfoMenu_item() {
	let resultFood = "";
	document.getElementById("getfood");
	let nameFoodFind = prompt("Введите название блюда").toLowerCase();
	let foodItem = foodStorage.getValue(nameFoodFind);
	if (foodItem) {
		resultFood = `Блюдо: ${nameFoodFind} 
Вегетарианское: ${foodItem['Вегетарианское']}
Рецепт приготовления:  ${foodItem['Рецепт приготовления']}`
	}
	else {
		resultFood = "Данное блюдо отсуствует"
	}
	return console.log(resultFood);
}
function delMenu_item() {
	document.getElementById("delfood");
	let nameFood = prompt("Введите название блюда");
	let resultFood = foodStorage.deleteValue(nameFood);
	if (resultFood) {
		console.log("Данное блюдо удалено");
	}
	else {
		console.log("Данное блюдо отсуствует");
	}
}
function allMenu_item() {
	document.getElementById("allfood");
	var resultFood = foodStorage.getKeys();
	return console.log(resultFood);
}