var task = {
    name: "",
    description: "",
    status: "",
};

class TaskList {
    constructor(containerId, ...args) {
        let options = args[0];
        this.container = document.getElementById(containerId);
        this.container.classList.add("tasklist-container");
        this.containerWidth = options["containerWidth"] || 500;
        if(this.containerWidth > visualViewport.width) {
            this.containerWidth = visualViewport.width;
        }
        this.title = options["length"] || 3;
        this.taskList = [];

    }

    addTask(taskName, taskDesc, taskStatus) {
        
    }
}