// DOM Navigation = The process of navigating through the 
//                  structure of an HTML document using JS.

// document.firstElementChild
// document.lastElementChild
// document.nextElementSibling
// document.previousElementSibling
// document.parentElement
// document.children


// ----------- first,last Element Child  ------------
// const elements = document.getElementById("vegetables");
// const firstElement = elements.firstElementChild;
// const lastElement = elements.lastElementChild;
// firstElement.style.backgroundColor = "yellow";
// lastElement.style.backgroundColor = "yellow";



// ------------ next, previous Element sibling --------
// const element = document.getElementById("banana");
// const nextSibling = element.nextElementSibling;
// const previousSibling = element.previousElementSibling;
// nextSibling.style.backgroundColor = "yellow";
// previousSibling.style.backgroundColor = "yellow";


// ------------ parent element -------------
// const element = document.getElementById("banana");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";


// ------------ children -------------
// const element = document.getElementById("fruits");
// const children = element.children;
// children[3].style.backgroundColor = "yellow";