import Modal from "./modal.js";
import {getData, storeTask} from "./ls.js";

export class Todo {
    constructor(props) {
        this.version = '1.0.0';
        this.errors = [];
        this.taskList = [];
        this.container = document.getElementById(props["container"] || "todo");
        this.colorScheme = props['colorScheme'];
        this.height = props['height'] || '500px';
        this.width = props['width'] || '400px';  
        this.taskModal = new TaskModal();
        this.modal = this.taskModal.container;
        this.buildTodoBox();

    }

    buildTodoBox = function(props) {
        const todoManager = document.createElement("div");
        todoManager.id = "todoManager";
        todoManager.innerHTML = `<h2 class="todo-title">ToDo Manager</h2>`
        this.container.appendChild(todoManager);
        let taskArray = getData();
        if(taskArray.length > 0  ) {
            taskArray.forEach(task => {
                todoManager.appendChild(addTaskHTML(task));

            });
        }
        todoManager.appendChild(this.addControls());
        this.addControlEvents();

    }

    addTaskHTML = function(task) {
        let taskNode = document.createElement("div");
        taskNode.classList.add("todo-item");
        taskNode.innerHTML = `
        <div class="complete"><input type="checkbox" value="${task.complete}"></div>
        <div class="title">${task.title}</div><div class="description">${task.description}</div>
        <div class="editTask" data-id="${task.id}">E</div><div class="deleteTask" data-id="${task.id}">-</div>`;
        return taskNode;
    }

    addControls = function() {
        let taskNode = document.createElement("div");
        taskNode.classList.add("todo-controls");
        taskNode.innerHTML = `<div class="complete"></div><div id="clear">x</div><div id="addNew">+</div>`;

        return taskNode;
    }

    addControlEvents = function() {
        var that = this;
        document.getElementById("addNew").addEventListener("click",function(){
            that.taskModal.show();
            // this.newTask();
        });
        document.getElementById("clear").addEventListener("click",function(){
            that.empty();
        });
    }

    newTask = function() {

    }

    removeTask = function(taskId) {

    }

    sortTaskList = function() {

    }

    toggleTask = function(taskId) {
        taskList.forEach(task => {
            if(task.id === taskId) {
                task.complete = !task.complete;
            }
            
        });
    }

    loadTasks = function(dataSource) {

    }

    editTask = function(taskId) {
        createTaskModal({

        }) 
    }

    empty = function(){};



    setColorScheme = function() {
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

class TaskModal extends Modal {

}