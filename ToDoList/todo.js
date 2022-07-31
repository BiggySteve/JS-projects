let button = document.getElementById("add");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.getElementsByTagName("li");
let close = document.getElementsByClassName("close");
//function for add
function inputLength() {
    return input.value.length;
}
//function for enter
function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list[i].appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//create new list item after clicking add
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
//create new list item after pressing enter
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === 'Enter') {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



//add checked symbol when clicking item
ul.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);
//create close button and append it to each list item
var i;
for (i = 0; i < list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}
//make close delete current item
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
