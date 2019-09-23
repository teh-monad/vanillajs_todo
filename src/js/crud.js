//import {todos} from './items.js';
import {render, STORAGE_KEY} from './app.js';

function getItem(argument) {
	// body...
}

export function addItem(callback) {
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	var item = {
		id: todos.length + 1,
		value: document.forms["form"]["todo"].value,
		done: false
	}
	var oldTodos = todos
	todos.unshift(item);
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	callback(todos);
	alert("Added");
}

function removeItem(argument) {
	// body...
}

function updateItem(argument) {
	// body...
}