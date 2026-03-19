// ARROW FUNCTIONS = a concise way to write function expressions
//                   good for simple functions that you use only once 
//                   (parameters) => {some code}

// const hello = () => console.log("hello");
// console.log(hello);
// hello();

// setTimeout(() => {
//     console.log('hello');
// }, 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const even = numbers.filter((element) => element%2 === 0);
const odd = numbers.filter((element) => element%2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator+element);

console.log(total);