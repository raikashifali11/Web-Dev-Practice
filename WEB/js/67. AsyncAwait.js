// Async/Await
// Async = makes a function return a promise
// Await = makes an async function wait for a promise

//         Allows you write asynchronous code in a synchronous manner
//         Async doesn't have resolve or reject parameters
//         Everything after Await is placed in an event queue

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataId); 
            resolve("success");
        }, 2000);
    });
}
(async function getAlldata(){           //IIFE
    console.log('getting data 1 ....');
    await getData(1);
    console.log('getting data 2 ....');
    await getData(2);
    console.log('getting data 3 ....');
    await getData(3);
    console.log('getting data 4 ....');
    await getData(4);
    console.log('getting data 5 ....');
    await getData(5);
})();



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

async function doChores() {
    try {
        const awokeUpResult = await awokeUp();
        console.log(awokeUpResult);
    
        const eatResult = await eat();
        console.log(eatResult);
    
        const writeCodeResult = await writeCode();
        console.log(writeCodeResult);
    
        console.log("All tasks finished");
        
    } catch (error) {
        console.error(error);
    }

}
doChores();