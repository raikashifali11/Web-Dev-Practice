// EVENT LISTENERS = Listen for specific events
//                   to create interactive web pages
// EVENTS = click, mouseover, mouseout, keydown, keyup, pageload
//                   .addEventListener(event, callback)
//                   .addEventListener(event, arrow function)

// let btn1 = document.querySelector('#btn1');
// let a = 5;
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     a++;
//     console.log('a =',a);
// };

// const box = document.getElementById("box");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.style.color = "white";
//     event.target.textContent = "Clicked";
// }

// box.addEventListener("click",changeColor)




// ------ KEY EVENTS = Key up and key down ------

// document.addEventListener("keydown", (event) =>{
//     console.log(`Key down: ${event.key}`);
// });

// document.addEventListener("keyup", (event) =>{
//     console.log(`Key up: ${event.key}`);
// });

// const boxText = document.getElementById("text");

// document.addEventListener("keydown",(event) =>{
//     boxText.style.backgroundColor = "tomato";
//     boxText.textContent = "😗";
// })
// document.addEventListener("keyup",(event) =>{
//     boxText.style.backgroundColor = "lightgreen";
//     boxText.textContent = "😊";
// })



//  --------- EXERCISE ------------
const myBox = document.getElementById("box");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",(event) =>{

    event.preventDefault();
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})