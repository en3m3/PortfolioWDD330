
import * as Todo from './ToDos.js';

(function(global){
    var todoObj = new Todo.Todo('todo',{
        height: 100,
        width: 300,
        colorScheme: 'dark',
    });
    
    console.log(todoObj);
})(this);