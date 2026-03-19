// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "I like coding";
newH1.id = "myH1";
newH1.style.color = "tomato"
newH1.style.textAlign = "center"

// STEP 3 APPEND ELEMENT TO DOM
// box.prepend(newElement); // add at start of node
// box.append(newElement);  // add at end of node
// box.before(newElement);  // adds before of node
// box.after(newElement);   // adds after of node

// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1,box2)

// STEP 4 REMOVE HTML ELEMENT
// let box1 = document.querySelector('#box1');
// box1.remove();
// document.body.removeChild(newH1); // Access parent to remove child