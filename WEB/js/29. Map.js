// .map() = accepts a callback and applies that function to 
//          each element of an array, then return a new array

// let numbers = [1,2,3,4,5];
// let sqauredNumbers = numbers.map(square);

// console.log(numbers);
// console.log(sqauredNumbers);

// function square(element){
//     return Math.pow(element,2);
// }


// let students = ["rai","kashif","ali","bilal","hammad"];
// let studentsUpper = students.map(upperCase);
// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }

// ["2023-3-23","2024-6-30","2021-11-19"]  --> ["23/3/2023","30/6/2024","19/11/2021"]

// let dates = ["2023-3-23","2024-6-30","2021-11-19"];
// let formattedDates = dates.map(formatDatesFunction);
// console.log(formattedDates);

// function formatDatesFunction(element){
//     let parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }