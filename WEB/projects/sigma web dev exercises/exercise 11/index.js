//Methods for calculatin factorial
let a = 6;
// first method
function factorial(number) {
    let arr = Array.from(Array(number+1).keys());
    let result = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(result)
}
factorial(a)
// second method
function factFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac*index;
    }
    return fac;
}
console.log(factFor(a));