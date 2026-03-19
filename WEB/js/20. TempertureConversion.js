// TEMPERATURE CONVERSION PROGRAM

let textbox = document.getElementById("textBox");
let CtoF = document.getElementById("CtoF");
let FtoC = document.getElementById("FtoC");
let result = document.getElementById("result");
let temp;

function convert(){
    if (CtoF.checked) {
        temp = Number(textbox.value);
        temp = (9/5 * temp) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (FtoC.checked) {
        temp = Number(textbox.value);
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit"
    }
}