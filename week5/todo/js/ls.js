export function getData() {
    if(localStorage.length > 0) {
        let taskArray = {};
        localStorage.tasks.forEach(task => {
            taskArray["task"]["id"] = task["id"];
            taskArray["task"]["title"] = task["title"];
            taskArray["task"]["description"] = task["description"];
            taskArray["task"]["complete"] = task["complete"];
        });
    } else {
        return [];
    }
} 

export function storeTask(task) {
    localStorage.tasks[task];
}

export default getData;