// callback Hell = Situation in Javascript where callbacks are nested
//                 within other callbacks to the degree where the code
//                 is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid callBack Hells


function task1(callBack){
    setTimeout(() => {
        console.log("Task 1 complete");
        callBack();
    }, 2000);
}
function task2(callBack){
    setTimeout(() => {
        console.log("Task 2 complete");
        callBack();
    }, 1000);
}
function task3(callBack){
    setTimeout(() => {
        console.log("Task 3 complete");
        callBack();
    }, 3000);
}
function task4(callBack){
    setTimeout(() => {
        console.log("Task 4 complete");
        callBack();
    }, 1500);
}

// task1();
// task2();
// task3();
// task4();
task1(() => {
  task2(() => {
    task3(() => {
        task4(() => {
            console.log("All tasks complete");
        });
    })
  })
})


// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log('data',dataId); 
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);   
// }
// getData(1,()=>{
//         console.log('getting data 2...');
//     getData(2,()=>{
//         console.log('getting data 3...');
//         getData(3,()=>{
//             console.log('getting data 4...');
//             getData(4);
//         });
//     });
// });