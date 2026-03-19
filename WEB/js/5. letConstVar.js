// var keyword:
//             - Function Scope/Global Scope
//             - Hoisting
//             - Can Be Redeclared

//let keyword
//             - Block Scope
//             - No Hoisting
//             - Cannot Be Redeclared

// const keyword
//             - Block Scope
//             - No Reassignment
//             - Must Be Initialized

const pi = 3.14;
// we cannot update or redeclare const variable
const student = {
    fullname : "kashif",
    age : 20,
    isPass : true,
    cgpa : 3.37,
};
console.log(student);

console.log(student.fullname);
console.log(student.age);
console.log(student["cgpa"]);
 
//changes in object
student.age = student.age + 1;
console.log(student.age);


//Example
const product = {
    title: "Parker Jotter Standard",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);
let password = "raikashif" + 123; // possible
console.log(password);


