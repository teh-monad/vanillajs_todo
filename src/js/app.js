import {addItem, removeItem} from './crud.js';
//import {todos} from './items.js';

/*
add Promises;
add localstorage api;
input tag for editing;
 */

export var STORAGE_KEY = "es_todos"
var TITLE = "VanillaJS TODO";

const removeElements = (elms) => elms.forEach(el => el.remove());
var classname = document.getElementsByClassName("delete");

export function render(){
	removeElements( document.querySelectorAll(".ulli") );
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	todos.forEach((item) => {
		let div = document.createElement('div');
		var btn = (item.done) ? "<button type=\"button\" class=\"btn done onerow\">done</button>"
							  : "<button type=\"button\" class=\"btn undone onerow\">undone</button>";
		div.innerHTML =  btn +
					  "<button type=\"button\" class=\"btn delete onerow\">delete</button>" +
					  "<p class=\"onerow\">" + item.id + " | " + item.value + " | " + item.done +"</p>";
		document.querySelector('.app').appendChild(div).className = "ulli"; 
	})
}

document.getElementById("form").onsubmit = function() {
	var id = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]').length;
	addItem(id ,render);
};

document.addEventListener("DOMContentLoaded", render());
Array.from(classname).forEach(function(element) {
  element.addEventListener("click", function(e){
  	//?
  	var id = e.target.firstChild.parentNode.nextElementSibling.firstChild.data
	removeItem(id, render);
	location.reload(); 
	}); 
});