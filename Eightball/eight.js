let answers = [
    "Seems unlikely.",
    "Not a chance.",
    "In your dreams.",
    "Absolutely.",
    "Maybe.",
    "It is inevitable.",
    "Ask me later.",
    "Ask me again.",
    "Chances seem good.",
    "Signs point to yes.",
    "Yes.",
    "Hell yes.",
    "I think yes.",
    "Signs point to not very likely.",
    "No.",
    "Nope.",
    "Hell no.",
    "When hell freezes over.",
    "Don\'t count on it.",
    "Is the earth flat?",
    "Is the pope Catholic?",
    "Maybe next year.",
    "You are asking the wrong questions"
]

let displayAnswer = function() {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    let element = document.getElementById("circle");
    element.style.display = "inline-block";
    element.style.backgroundColor = "blue";
    element.style.color = "white";
    element.innerHTML = "<br><br>" + answer;
}