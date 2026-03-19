// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// SWAP the value of two variables

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a,b);

// SWAP two elements in an array
// const colors = ["red","blue","white","orange"];
// [colors[0],colors[3]] = [colors[3],colors[0]];
// console.log(colors);

// Assign Array Elements to variables
// const colors = ["red","blue","white","orange","green","purple","gold"];
// const [firstcolor, secondcolor,...remainingColors] = colors;
// console.log(firstcolor);
// console.log(secondcolor);
// console.log(remainingColors);


// EXTRACT values from the objects
// const person1 = {
//     firstname: "Rai Kashif",
//     lastname: "Ali",
//     age: 21,
//     isEmplyoed: true,
// }
// const {firstname,lastname,age,isEmplyoed} = person1;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(isEmplyoed);

// DESTRUCTURE IN FUNCTION PARAMETERS
// function displayPerson({firstname,lastname,age,isEmplyoed}){
//     console.log(`Name: ${firstname} ${lastname}`);
//     console.log(`Age: ${age}`);
//     console.log(`Job Status: ${isEmplyoed?"Employed":"Not Employed"}`);
// }

// const person1 = {
//     firstname: "Rai Kashif",
//     lastname: "Ali",
//     age: 21,
//     isEmplyoed: false,
// }

// displayPerson(person1);