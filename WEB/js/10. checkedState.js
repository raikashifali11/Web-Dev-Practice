// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

let myCheckbox = document.getElementById("myCheckbox");
let visabtn = document.getElementById("visabtn");
let masterCard = document.getElementById("masterCardbtn");
let payPal = document.getElementById("payPalbtn");
let submit = document.getElementById("submitbtn");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if (myCheckbox.checked) {
        subResult.textContent = "You are subscribed!";
    }else{
        subResult.textContent = "You are NOT subscribed!";
    }

    if (visabtn.checked) {
        paymentResult.textContent = "You are paying with Visa Card.";
    }
    else if (masterCard.checked) {
        paymentResult.textContent = "You are paying with MasterCard!";
    }
    else if (payPal.checked) {
        paymentResult.textContent = "You are paying with Paypal!";
    }
    else{
        paymentResult.textContent = "You must select a payment type";
    }
}