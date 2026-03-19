let counter = 0;

let increaseBtn = document.getElementById("increasebtn");
let decreaseBtn = document.getElementById("decreasebtn");
let resetBtn = document.getElementById("resetbtn");
let counterLabel = document.getElementById("counter");


increaseBtn.onclick = function(){
    counter++;
    counterLabel.textContent = counter;
}
decreaseBtn.onclick = function(){
    counter--;
    counterLabel.textContent = counter;
}
resetBtn.onclick = function(){
    counter = 0;
    counterLabel.textContent = counter;
}
