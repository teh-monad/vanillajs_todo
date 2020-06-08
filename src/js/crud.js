import {render, STORAGE_KEY} from './app.js';

/*
function getItem(argument) {
	return 0;
}
*/

/*

const todo = {
	todos : JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
	lnth : todos.length,
	id : id.split(" | "),
	last_id: lnth ? Object.entries(todos[0])[0][1] : 0,
	regex = /\d+/g,

	back: function(){
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		render();
    	location.reload();
	},

	addItem : function(){
		var item = { id: last_id + 1, value: document.forms.form.todo.value, done: false
		todos.unshift(item);
		//back
	},

	removeItem : function(id){
		todos.splice(todos.findIndex(item => item.id == id[0]), 1);
		//back
	},

	updateItem : function(id){
		todos.forEach(function(record) {
	    	record.id == matches ? record.done == true ? record.done = false : record.done = true : 0;
		});
		//back
	}, 

}

*/

/*
export var todos = [
{
	id: 1,
	value: "Take a coffee",
	done: true
},
{
	id: 2,
	value: "Take a meds",
	done: true

},
{
	id: 3,
	value: "Take a break",
	done: false
}
]
*/

var addItem = (render) => { //check for same values;
	var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
		lnth = todos.length,
		last_id = lnth ? Object.entries(todos[0])[0][1] : 0 ,
	    item = {
		id: last_id + 1,
		value: document.forms.form.todo.value,
		done: false
	},
	oldTodos = todos;

	todos.unshift(item);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	render();
}

var removeItem = (id, render) => {
	var id = id.split(" | "),
	    todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

	todos.splice(todos.findIndex(item => item.id == id[0]), 1);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	render();
	location.reload();
}

var updateItem = (id, render) => {
	var id = id.split(" | "),
		 regex = /\d+/g,
         matches = id[0].match(regex).toString(),
	     todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	
	todos.forEach(function(record) {
    	record.id == matches ? record.done == true ? record.done = false : record.done = true : 0;
	});

	localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	render();
	location.reload();		
}

export {addItem, removeItem, updateItem};
