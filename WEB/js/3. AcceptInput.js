// How to accept user input

// 1. EASY WAY         = window prompt
// 2. PROFESSIONAL WAY = HTML Textbox

// let username = prompt("What is your name? ")
// console.log(username);

let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("input").value;
    document.getElementById("heading").textContent = `Welcome ${username}`
    document.getElementById("input").value = "";
}