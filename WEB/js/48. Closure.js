// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: REACT, VUE, ANGULAR

// function outer(){
//     let message = "Hello!";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
// console.log(counter.count); //undefined
console.log(`The count is ${counter.getCount()}`);
