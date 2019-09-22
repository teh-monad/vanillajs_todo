import {addItem} from './crud.js';
import {todos} from './items.js';

/*
add Promises;
add localstorage api;
input tag for editing;
 */

console.log(todos);

var TITLE = "VanillaJS TODO";

todos.forEach((item) => {
	let div = document.createElement('div');
	var btn = (item.done) ? "<button type=\"button\" class=\"btn done onerow\">done</button>"
						  : "<button type=\"button\" class=\"btn undone onerow\">undone</button>";
	div.innerHTML =  btn +
				  "<button type=\"button\" class=\"btn delete onerow\">delete</button>" +
				  "<pclass=\"onerow\">" + item.id + " | " + item.value + " | " + item.done +"</p>";
	document.querySelector('.app').appendChild(div).className = "ulli"; 
})

document.getElementById("form").onsubmit = function() {addItem()};
