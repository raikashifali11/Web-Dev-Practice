// function declaration = define a reusable block of code
//                        that performs a specific code

// function expressions = a way to define functions as
//                        values or variables
// Benefits 
//        1. Callbacks in asynchronous operations
//        2. Higher Order functions
//        3. Closures
//        4. Event Listeners

// In JS, it is legal to pass an entire function as an arguement
//        which treated as a value

// const hello = function(){
//     console.log("hello");
// }
// hello();

// setTimeout(hello, 3000);

let numbers = [1,2,3,4,5];
let sqauredNumbers = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(sqauredNumbers);


