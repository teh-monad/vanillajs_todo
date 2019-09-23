import {addItem} from './crud.js';
//import {todos} from './items.js';

/*
add Promises;
add localstorage api;
input tag for editing;
 */

export var STORAGE_KEY = "es_todos"
var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
var TITLE = "VanillaJS TODO";

export function render(todos){
	todos.forEach((item) => {
		let div = document.createElement('div');
		var btn = (item.done) ? "<button type=\"button\" class=\"btn done onerow\">done</button>"
							  : "<button type=\"button\" class=\"btn undone onerow\">undone</button>";
		div.innerHTML =  btn +
					  "<button type=\"button\" class=\"btn delete onerow\">delete</button>" +
					  "<pclass=\"onerow\">" + item.id + " | " + item.value + " | " + item.done +"</p>";
		document.querySelector('.app').appendChild(div).className = "ulli"; 
	})
}

document.getElementById("form").onsubmit = function() {
	addItem(render);
};
document.addEventListener("DOMContentLoaded", render(todos));