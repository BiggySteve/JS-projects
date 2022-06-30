
window.onload = function()  {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = name;

    // setTimeout(reblur, 3000, image) don't need this anymore //
}

function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}