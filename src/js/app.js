import {addItem, removeItem, updateItem} from './crud.js';

/*
add Promises;
add localstorage api; //?
input tag for editing;
some refactoring;
 */

var STORAGE_KEY = "es_todos",
	TITLE = "VanillaJS TODO",
	del = document.getElementsByClassName("delete"),
	update = document.getElementsByClassName("update"),
	form = document.getElementById("form");

const removeElements = (elms) => elms.forEach(el => el.remove());

function render(){ //div for logs;
	removeElements( document.querySelectorAll(".ulli") );
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	todos.forEach((item) => {
		let div = document.createElement('div');
		var btn = (item.done) ? "<button type=\"button\" class=\"btn update done onerow\">done</button>"
							  : "<button type=\"button\" class=\"btn update undone onerow\">undone</button>";
		div.innerHTML =  btn +
					  "<button type=\"button\" class=\"btn delete onerow\">delete</button>" +
					  "<p class=\"onerow\">" + item.id + " | " + item.value + " | " + item.done +"</p>";
		document.querySelector('.app').appendChild(div).className = "ulli"; 
	})
}

form.onsubmit = function() {
	addItem(render);
};

document.addEventListener("DOMContentLoaded", render());

Array.from(del).forEach(function(element) {
  element.addEventListener("click", function(e){
  	var id = e.target.firstChild.parentNode.nextElementSibling.firstChild.data
	removeItem(id, render);
	render() 
	}); 
});

Array.from(update).forEach(function(element) {
  element.addEventListener("click", function(e){
  	//?
  	var id = e.target.parentElement.textContent
	updateItem(id, render);
	render()
	}); 
});

export {render, STORAGE_KEY}