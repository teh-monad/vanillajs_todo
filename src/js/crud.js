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
	alert("Added");
	callback();
}

export function removeItem(id, callback) {
	var id = id.split(" | "); 
	console.log(id[2]);
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	todos.splice(todos.findIndex(item => item.id == id[0]-1), 1);
//	todos.pop();
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Deleted");
	callback();
}

export function updateItem(id, callback) {
	var id = id.split(" | ").toString(); 
	var res = (id == "undone") ? id.replace("undone", "true") : id.replace("done", "false")
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	//var res = id.replace("undone", "done");
	//id to foreach
	todos.forEach(function(record) {
	    if (record.done == true ) {
	        record.done = false;
	    } else {
	        record.done = true;	    	
	    }
	});
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Updated");
	callback();		
}