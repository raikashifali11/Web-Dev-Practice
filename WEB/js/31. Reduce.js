// .reduce() = reduce the element of an array to a single value

// const prices = [5,10,15,20,25,30];

// const total = prices.reduce(sum);
// console.log(total);

// function sum(previous, next){
//     return previous + next;
// }

let marks = [98,80,75,40,90,45,95];
let maxScore = marks.reduce(maxMarks);
console.log(maxScore);


function maxMarks(previous,next){
    return Math.max(previous,next);
}
const factorial = counting.reduce((res,curr) => {
    return res*curr;
});

