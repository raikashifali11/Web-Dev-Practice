// Promise = An object that manages asynchronous operations.
//           Wrap a promise object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER
// 1. AWOKEUP
// 2. EAT
// 3. WRITECODE

function awokeUp(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isAwaken = true;
            if (isAwaken) {
                resolve("You have awaken.");
            } else {
                reject("You have not awaken.");
            }
         }, 500);
    })
}
function eat(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const iseaten = true;
            if (iseaten) {
                resolve("You have eaten.");
            } else {
                reject("You have not eaten.");
            }
         }, 2500);
    })
}
function writeCode(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWriteCode = true;
            if (isWriteCode) {
                resolve("You have write code.");
            } else {
                reject("You have not write code.");
            }
         }, 3500);
    })
}
awokeUp().then(value => {
    console.log(value);
    return eat();
}).then(value => {
    console.log(value);
    return writeCode();
}).then(value => {
    console.log(value);
    console.log("You have finished all tasks.");
}).catch(error => console.error(error))