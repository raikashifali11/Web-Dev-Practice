// VARIABLE SCOPE = where a variable is recognized and accessible
//                  (local vs global)

// global variable = Any variable declared outside of function body or 
//                   any curly braces. It can be accessed anywhere.
// local variable  = Any variable declared inside of function body or any 
//                   curly braces. It can be accessed in that function only.

// local variable has more preference over global variable

let x = 3;
function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}
function2();