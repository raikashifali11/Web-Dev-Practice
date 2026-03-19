// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            Nodelist won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButton");

// console.log(buttons); // NodeList
// buttons.forEach(button => {
//     button.addEventListener("click",(event) => {
//         event.target.style.backgroundColor = "red";
//     })
// })

// ADD AN ELEMENT TO NODE LIST
// const newButton = document.createElement("Button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButton";
// document.body.appendChild(newButton);
// console.log(buttons);
// buttons = document.querySelectorAll(".myButton");
// console.log(buttons);

// REMOVE AN ELEMENT FROM NODE LIST

buttons.forEach(button => {
    button.addEventListener("click",(event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    })
})
