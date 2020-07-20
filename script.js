
// 
var input = document.querySelector("input");
var enterButton = document.getElementById("enter");
var list = document.getElementById("list");

input.addEventListener("input", newValue);

newItem = "";

function newValue(e) {
   newItem = e.target.value;
};

// 
enterButton.addEventListener("click", addItem);
document.addEventListener("keypress", logKey);


// 
function newDeleteButton() {
    var newButtonLi = document.createElement("li");
        var newButton = document.createElement("button");
        newButton.appendChild(document.createTextNode("Borrar"));

        document.getElementById("button-list").appendChild(newButtonLi).appendChild(newButton);
};


// 
function addItem() {
    if (newItem === "") {
        return;
    } else {
        var newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(newItem));
        list.appendChild(newLi);
        newItem = "";
        input.value = "";

        newDeleteButton();

        var newItemId = document.querySelector("ul").children.length;

        document.querySelectorAll("ul")[1].children[newItemId-1].children[0].setAttribute("id", String(newItemId-1));
        document.querySelectorAll("ul")[1].children[newItemId-1].children[0].setAttribute("onClick", "reply_click(this.id)");

    };
};


// 
function logKey(d) {
    key = `${d.code}`;
    if (key === "Enter") {
        addItem();
    };
};
