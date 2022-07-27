let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement(); 
     }
}

button.addEventListener("click", addListAfterClick);
   

input.addEventListener("keypress", addListAfterKeypress);


for(var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", liClick);
}
function liClick() {
    this.classList.toggle("done");
}
