

export default class Modal {
    constructor(props) {
        const modal = this.buildModal(props);
        this.obj = document.body.appendChild(modal);
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
        const headingNode = document.createElement("div");
        headingNode.classList.add("modal-header");
        const titleNode = document.createElement("h1");
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.id = "closeButton";
        closeButton.textContent = "X";
        closeButton.addEventListener("click", this.destroy());
        titleNode.textContent = props["title"] || "Modal Title";
        headingNode.appendChild(closeButton);
        headingNode.appendChild(titleNode);
        return headingNode;   
    };

    addBody = function(props) {
        let inputArray = new Array();
        const bodyNode = document.createElement("p");   
        const form = document.createElement("form");
        if(props["inputs"]) {
            let inputs = props["inputs"].forEach(inputField => {
                let input = this.createInputField({
                    type: inputField["type"] || "text",
                    id: inputField["name"] || "taskTitle",
                    name: inputField["name"] || "taskTitle",
                    value: inputField["value"] || " ",
                    placeholder: props["placeholder"] || " ",
                });   
                let row = document.createElement("div");
                row.classList.add("row");
                let label = document.createElement("label");
                label.innerHTML = inputField["placeholder"];
                row.appendChild(label);
                row.appendChild(input);    
                form.appendChild(row);  
            });
        } else {
            let inputs = " ";
        }
        const submitButton = document.createElement("button");
        submitButton.type = "submit"; 
        submitButton.innerHTML = "Submit";       

        // form.appendChild(inputTaskTitle);
        // form.appendChild(inputTaskBody);
        // form.appendChild(inputTaskComplete);
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

    addFooter = function(props) {
        const footerNode = document.createElement("p");
        footerNode.textContent = props["footer"] || "Modal Footer";
        return footerNode; 
    };
    addShadow = function() {
        const shadow = document.createElement("div");
        shadow.classList.add("shadow");
        return shadow;       
    };
    show = function() {};
    destroy = function() {
        // this.modal.remove();
    };

}