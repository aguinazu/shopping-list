fullList = document.querySelectorAll("li");
fullListButton = []

function addDeleteButton() {
    for (var i=0; i<fullList.length; i++) {
        fullListButton.push(document.getElementById("item"+i));
    };
};

addDeleteButton();

var botonDelete = ""
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i++) {
    buttons[i].onclick = function(e) {
        id = this.id;
        console.log(i);
        botonDelete = document.getElementById(id);
        console.log(botonDelete);
    };
}