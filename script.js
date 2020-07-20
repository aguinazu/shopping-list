var input = document.querySelector("input");
var enterButton = document.getElementById("enter");
var list = document.getElementById("list");

input.addEventListener("input", newValue);

newItem = ""

function newValue(e) {
   newItem = e.target.value;
}


enterButton.addEventListener("click", addItem);
document.addEventListener("keypress", logKey);


function addItem() {
    if (newItem === "") {
        return;
    } else {
        var newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(newItem));
        list.appendChild(newLi);
        newItem = "";
        input.value = "";
    }
}

function logKey(d) {
    key = `${d.code}`;
    if (key === "Enter") {
        addItem();
    }
}
