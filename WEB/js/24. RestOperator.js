// REST PARAMETERS = (..rest) allow a function work with a variable
//                   number of arguments by bundling them into array

//                   spread = expands an array into separate elements
//                   rest   = bundles separate elements into an array

let food1 = "egg";
let food2 = "bread";
let food3 = "milk";
let food4 = "yogurt";
let food5 = "Roti";

// function openfridge(...food){
//     console.log(...food);        // unpack array or separate elements
// }
// openfridge(food1,food3,food2,food5,food4);


// function getfood(...foods){
//     return foods;
// }
// let food = getfood(food1,food3,food2,food5,food4);
// console.log(food);

// function getSum(...numbers){
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result;
// }
// let total = getSum(1,2,3,4);
// console.log(`Your total is ${total}`);

// Make getAverage by own

let fullName = combineString("Rai","Kashif","Ali");

function combineString(...strings){
    return strings.join(" ");
}
console.log(fullName);