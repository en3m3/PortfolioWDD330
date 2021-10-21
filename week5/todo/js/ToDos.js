import Modal from "./Modal.js";

export class Todo {
    constructor(container = "todo", props) {
        this.version = '1.0.0';
        this.errors = [];
        this.taskList = [];
        this.container = document.getElementById(container);
        this.colorScheme = props['colorScheme'];
        this.height = props['height'] || '500px';
        this.width = props['width'] || '400px';  
        const myModal = new Modal({
            
        });
        this.addTask = function(props){
            let newTask = new Task({
                title: "First Task",
                content: "you must make a first task",
            });
            this.taskList.add(newTask);
        }

        this.buildTodoBox = function(props) {
 
        }

        this.removeTask = function(taskId) {

        }

        this.sortTaskList = function() {

        }

        this.toggleTask = function(taskId) {
            taskList.forEach(task => {
                if(task.id === taskId) {
                    task.completed = !task.completed;
                }
                
            });
        }

        this.loadTasks = function(dataSource) {

        }

        this.editTask = function(taskId) {
            createTaskModal() 
        }



        this.setColorScheme = function() {
            switch(this.colorScheme) {
                case 'light':

                break;
                case 'dark':

                break;
                default:

                break;
            }
        }  
    }
}

export class Task {
    constructor(props) {
        this.id = new Date.now();
        this.title = props.title || "";
        this.content = props.content || "";
        this.completed = props.completed || false; 
    }
}