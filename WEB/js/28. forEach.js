// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)

//             array.forEach(callback)
//             element, index, array are provided

// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);


// function double(element, index, array){
//     array[index] = element*2;
// }
// triple 
// square
// function display(element){
//     console.log(element);
// }


let fruits = ["apple","banana","mango",]

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase (element, index, array){
    array[index] = element.toUpperCase();
}
// lowercase
// capitalize
function display(element){
    console.log(element);
}