// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a function after an
//                amount of time(miliseconds)
//                Times are approximate(varies based on the workload of the 
//                Javascript runtime env.)

//                setTimeout(callback,delay);

const timeoutId = setTimeout(() => {
    alert("hello");
    console.log("hello");
}, 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers
clearTimeout(timeoutId);