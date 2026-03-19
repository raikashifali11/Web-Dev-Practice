// classlist = Element property in Javascript used to interact
//             with an element's list of classes (CSS Classes)
//             Allows you to make reusable classes for many 
//             elements across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover",(e) => {
//     e.target.classList.toggle("hover");
// }
// )
// myButton.addEventListener("mouseout",(e) => {
//     e.target.classList.toggle("hover");
// }
// )
myButton.addEventListener("click",(e) => {

    if (e.target.classList.contains("enabled")) {
        e.target.classList.replace("enabled","disabled")
    } else {
        e.target.classList.replace("disabled","enabled")  
    }

    
}
)