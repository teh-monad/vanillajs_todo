//import {todos} from './items.js';
import {render, STORAGE_KEY} from './app.js';

const removeEmptyOrNull = (obj) => {
	Object.keys(obj).forEach((k, value) => (obj[value] == null) && delete obj[value]);
  return obj;
}

function getItem(argument) {
	// body...
}

function addItem(callback) {
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
	    item = {
		id: todos.length + 1,
		value: document.forms["form"]["todo"].value,
		done: false
	},
	    oldTodos = todos

	todos.unshift(item);
	console.log(todos);
	var todos = localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Added");
	callback();
}

function removeItem(id, callback) {
	var id = id.split(" | "),
	    todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

	todos.splice(todos.findIndex(item => item.id == id[0]-1), 1);
	console.log(id[2]);
 	todos = removeEmptyOrNull(todos)
 	//todos.length = todos.length + 1 // add null object based on length
	console.log(todos);
	//Object.keys(todos).forEach((k, value) => (todos[value] == null) && delete todos[value]);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	alert("Deleted");
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
	alert("Updated");
	callback();		
}

export {addItem, removeItem, updateItem}