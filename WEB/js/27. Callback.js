// CALLBACK = a function that is passed as an arguement to
//            another function

//            used to handle asynchronous operations
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            Hey, When you're done, call this next.

// hello(goodbye);
// goodbye();

// function hello(callback){
//     setTimeout(() => {
//         console.log('hello');  
//         callback();
//     }, 3000);
// }

// function goodbye(){
//     console.log('goodbye');
// }

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayResult(result){
    console.log(result);
}

sum(displayResult,4,6)