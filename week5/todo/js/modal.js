

export default class Modal {
    constructor(props) {
        const modal = this.buildModal(props);
        document.body.appendChild(modal);
        this.loadStyles();
        this.show();        
    }

    loadStyles = function(props) {
        var link = document.createElement( "link" );
        link.href = "./css/modal.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "all";

        document.getElementsByTagName( "head" )[0].appendChild( link );
    }

    buildModal = function(props) {
        const body = document.createElement("div");
        body.classList.add("modal-container");
        body.insertBefore(this.addShadow(),body.firstChild);
        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalBody.appendChild(this.addHeading(props));
        modalBody.appendChild(this.addBody(props));
        modalBody.appendChild(this.addFooter(props));
        body.appendChild(modalBody);
        return body;
    }

    addHeading = function(props) {
        const headingNode = document.createElement("h1");
        headingNode.textContent = "Modal Title" || props["title"];
        return headingNode;   
    };

    addBody = function(props) {
        var i = 0;
        const bodyNode = document.createElement("p");   
        const form = document.createElement("form");
        const inputTaskTitle = this.createInputField({
            type:"text",
            id: "taskTitle",
            name: "taskTitle",
            value: " " || props["value"][i],
            placeholder: " " || props["name"][i],
        });
        i++;
        const inputTaskBody = this.createInputField({
            type:"text",
            id: "taskBody",
            name: "taskBody",
            value: " " || props["value"][i],
        });
        i++;
        const inputTaskComplete = this.createInputField({
            type:"checkbox",
            id: "taskComplete",
            name: "taskComplete",
            value: true || props["value"][i],
        });     
        const submitButton = document.createElement("button");
        submitButton.type = "submit"; 
        submitButton.innerHTML = "Submit";       

        form.appendChild(inputTaskTitle);
        form.appendChild(inputTaskBody);
        form.appendChild(inputTaskComplete);
        form.appendChild(submitButton);
        bodyNode.appendChild(form);
        return bodyNode;
    };

    createInputField = function(props) {
        const inputField = document.createElement("input");
        const inputFieldLabel = document.createElement("label");
        inputFieldLabel.for = props["id"] || "id";
        inputFieldLabel.innerHTML = props["name"] || "Name";
        inputField.type = props["type"] || "text";
        inputField.id = props["id"] || "id";
        inputField.name = props["name"] || "Name";
        inputField.value = props["value"] || " ";
        inputField.placeholder = props["name"] || "Name";
        return inputField;
    }

    addFooter = function() {
        const footerNode = document.createElement("p");
        footerNode.textContent = "Modal Footer" || props["footer"];
        return footerNode; 
    };
    addShadow = function() {
        const shadow = document.createElement("div");
        shadow.classList.add("shadow");
        return shadow;       
    };
    show = function() {};
    destroy = function() {};


}