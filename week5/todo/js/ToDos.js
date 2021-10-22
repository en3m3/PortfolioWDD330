import Modal from "./modal.js";

export class Todo {
    constructor(container = "todo", props) {
        this.version = '1.0.0';
        this.errors = [];
        this.taskList = [];
        this.container = document.getElementById(container);
        this.colorScheme = props['colorScheme'];
        this.height = props['height'] || '500px';
        this.width = props['width'] || '400px';  
        this.myModal = newTask();
        console.log(this.myModal);
        this.addTask = function(props){
            let task = new Task({
                title: "First Task",
                content: "you must make a first task",
            });
            this.taskList.add(task);
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
            createTaskModal({

            }) 
        }

        function newTask() {
            let taskModal = new TaskModal({
                id: Date.now(),
                title: "Add New Task",
                content: "",
                completed: false,
                inputs: [{
                    type: "text",
                    id: "taskTitle",
                    name: "taskTitle",
                    value: " ",
                    placeholder: "Enter Task's Title",                   
                },{
                    type: "text",
                    id: "taskDescription",
                    name: "taskDescription",
                    value: " ",
                    placeholder: "Enter Task's Descriptiption",                  
                },{
                    type: "checkbox",
                    id: "taskComplete",
                    name: "taskComplete",
                    value: false,
                    placeholder: "Completed?",                  
                }],
                footer: " ",
            });
            return taskModal;
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

class TaskModal extends Modal {

}