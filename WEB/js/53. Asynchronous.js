// synchronous = Executes line by line consectively in a sequential
//               manner. Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently 
//                wihthout waiting. Doesn't block the execution flow and allows
//                the program to continue.
//                (I/O Operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

function f1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}

function f2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
f1(f2);