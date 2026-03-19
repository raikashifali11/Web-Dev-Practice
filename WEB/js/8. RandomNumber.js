// RANDOM NUMBER GENERATOR

// FORMULA:
// randomNumber = Math.random()*(max-min) + min

// TO REMOVE DECIMAL:
// Math.floor(randomNumber)


let min = 1;
let max = 11;

// let randomNumber = Math.floor(Math.random()*(max-min))+min;
// let randomNumber = Math.floor(Math.random()*(11-1))+1;
let randomNumber = Math.floor(Math.random()*(10))+1;
console.log(randomNumber);
