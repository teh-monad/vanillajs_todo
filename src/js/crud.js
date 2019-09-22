import {todos} from './items.js';

function getItem(argument) {
	// body...
}

export function addItem() {
	var item = {
		id: todos.length + 1,
		value: document.forms["form"]["todo"].value,
		done: true
	}
	var oldTodos = todos
	todos.unshift(item);
	console.log(todos);
	alert("Added");
}

function removeItem(argument) {
	// body...
}

function updateItem(argument) {
	// body...
}