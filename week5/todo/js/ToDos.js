export function Todo(container, props) {
        this.version = '1.0.0';
        this.errors = [];
        this.taskList = [];
        this.container = document.getElementById(container);
        this.colorScheme = props['colorScheme'];
        this.height = props['height'] || '500px';
        this.width = props['width'] || '400px';  

        this.addTask = function(props){
            let newTask = new Task;
            this.taskList.add(newTask);
        }

        this.buildTodoBox = function(props) {
 
        }

        this.removeTask = function(taskId) {

        }

        this.sortTaskList = function() {

        }

        this.completeTask = function(taskId) {

        }

        this.loadTasks = function(dataSource) {

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
        
        
}; 

function Task(props) {
    this.id = new Date.now();
    this.content = props.content || "";
    this.completed = props.completed || false;
    
}