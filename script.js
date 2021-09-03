var formElement = document.getElementById("form-id");

var inputElement = document.getElementById("inputBox");

 var todoList = document.getElementById("todo-list");

function addItem(itemName){

    var divElement = document.createElement("div");
    divElement.className = "todo-card"
    var paraElement = document.createElement("P");
    paraElement.className = "para";
    var updateElement = document.createElement("input");
    updateElement.className = "para-side extra";
    updateElement.placeholder = "type here to update...";
    var submitElement = document.createElement("button");
    submitElement.className = "para-side";
    submitElement.innerText = "update";
    submitElement.addEventListener("click", function(){
       
        if(updateElement.value != ""){
            paraElement.innerText = updateElement.value;
            updateElement.value = "";
        }else{
            alert(" Please Enter Some Input to Update")
        }
    })
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash-o";
    deleteIcon.onclick = function(){
        divElement.remove()
    }
    paraElement.innerText = itemName;
    updateElement.innerText = itemName;
    divElement.appendChild(paraElement)
    divElement.appendChild(updateElement)
    divElement.appendChild(submitElement)
    divElement.appendChild(deleteIcon)
    todoList.appendChild(divElement)
    console.log(itemName)
}


formElement.addEventListener("submit", function(e){
    e.preventDefault()
    if(inputElement.value != ""){
    addItem(inputElement.value)
    inputElement.value = " ";
} else {
    alert(" Please Enter Some Input")
}
})