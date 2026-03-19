// Errors = An object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection

// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS


// RESOLVE THE ERRORS
// try{}     = Encloses code that might potentially cause an error
// catch{}   = Catch and handle any thrown errors from try{}
// finally{} = (optional) Always executes. Used mostly for clean up
//             ex. close files, close connections, release resources

try {
    console.log('hello');
    console.log(x);
    
} catch (error) {
    console.error(error);
}finally{
    //close files
    //close connections
    //release resources
    console.log("This always executes.");
}
console.log('You have reached the end');