import {render, STORAGE_KEY} from './app.js';

function getItem(argument) {
	return 0;
}

function addItem(callback) { //check for same values;
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
		lnth = todos.length,
		last_id = lnth ? Object.entries(todos[0])[0][1] : 0 ,
	    item = {
		id: last_id + 1,
		value: document.forms["form"]["todo"].value,
		done: false
	},
	    oldTodos = todos

	todos.unshift(item);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	callback();
}

function removeItem(id, callback) {
	var id = id.split(" | "),
	    todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

	todos.splice(todos.findIndex(item => item.id == id[0]), 1);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	callback();
}

function updateItem(id, callback) {
	var id = id.split(" | "),
		regex = /\d+/g,
	    matches = id[0].match(regex).toString();
	    todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	
	todos.forEach(function(record) {
	    if (record.id == matches) {
	    	if(record.done == true){
	        	record.done = false;	    		
	    	} 
	    	else {
	        record.done = true;	    	
	    	}
	    }
	});
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	callback();		
}

export {addItem, removeItem, updateItem}