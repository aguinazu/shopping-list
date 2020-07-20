
var id = "";
// var deleteButton = document.getElementById(id);

// Indica que boton se esta presionando
// function reply_click(clicked_id) {
//       var id = clicked_id;
// }

function SomeDeleteRowFunction(x) {
    // event.target will be the input element.
    id = x;
    var td = event.target.parentNode; 
    console.log(td);
    var tr = td.parentNode; // the row to be removed
    tr.removeChild(td);


}

//  Funcion que elimina la fila correspondiente al boton borrar precionado

function deleteRow () {
    console.log("clisk");
    deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement);
}


// deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement)