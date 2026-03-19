// LOOPS

// while loop = repeat some code WHILE some condition is true
// let username = '';
// while (username === '' || username === null) {
//     username = prompt("Enter your name: ");
// }
// console.log(`Hello ${username}`);


// do-while loop = do some code then check the condition is true
// let username;
// do{
//     username = prompt("Enter your name: ");
// }while(username === '' || username === null)
// console.log(`Hello ${username}`);


// For loop = repeat some code a LIMITED amount of times 

// continue = to continue/skip that iteration
// break    = to break the entire loop

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// console.log('Loop terminates');

// for-of loop
let array = [23,34,2,4,3,24,4,3];
for(let value of array){
    console.log(value);
}
let str = 'Rai kashif ali';
for(let char of str){
    console.log(char);
}
//for-in loop
let student = {
    fullname : "kashif",
    age : 20,
    isPass : true,
    cgpa : 3.37,
};
for(let key in student){
    console.log('key =',key, 'value =',student[key]); 
}

// EXERCISE

// let loggedIn = false;
// let username;
// let password;
// while (!loggedIn) {
//     username = prompt("Enter your username: ");
//     password = prompt("Enter your password: ");

//     if (username === "admin" && password === "123") {
//         loggedIn = true;
//         console.log("You are logged In!");
//     }
//     else{
//         console.log("Invalid username or password!");
//     }
// }