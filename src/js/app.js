import * as f from './crud.js';
import {todos} from './items.js';

/*

 */
console.log(todos);

var TITLE = "VanillaJS TODO";

todos.forEach((item) => {
    let p = document.createElement('p');
    p.innerHTML = "<p>" + item.id + item.value + item.done +"</p>";
    document.querySelector('.app').appendChild(p); 
});