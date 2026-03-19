// Element Selectors = Methods used to target and manipulate HTML elements 
//                     They allow you to select one or multiple HTML elements
//                     from the DOM.

// document.getElementById()          // ELEMENT OR NULL 
// document.getElementsByClassName()  // HTML COLLECTION   
// document.getElementsByTagName()    // HTML COLLECTION
// document.querySelector()           // ELEMENT OR NULL
// document.querySelectorAll()        // NODELIST

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// typecasting htmlcollection to array to use forEach function
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})

// querySelector returns first matching item only
// querySelectorAll has built in methods like forEach() etc.