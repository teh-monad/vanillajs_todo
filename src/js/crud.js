//import {todos} from './items.js';
import {render, STORAGE_KEY} from './app.js';

function getItem(argument) {
	// body...
}

export function addItem(id, callback) {
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	var item = {
		id: id + 1,
		value: document.forms["form"]["todo"].value,
		done: false
	}
	var oldTodos = todos
	todos.unshift(item);
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Added");
	callback();
}

export function removeItem(id, callback) {
	var id = id.split(" | "); 
	console.log(id[0]);
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	todos.splice(todos.findIndex(item => item.id.id == id[0]), 1);
//	todos.pop();
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Deleted");
	callback();
}

function updateItem(argument) {
	// body...
}