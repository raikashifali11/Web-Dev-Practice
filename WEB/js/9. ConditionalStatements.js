// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

let age = 36;
if(age>18){
    console.log('You can vote');  
}
else{
    console.log('You cannot vote'); 
}

// Ternary operator:
//   - Shortcut method for writing if-else statements
//   - USE ternary operator for one line of code
//   - Helps to assign a variable based on condition
//   - varible = condition? CodeIfTrue: CodeIfFalse;

let result = age>=18? 'adult': 'not adult';
console.log(result);


// SWITCH = can be an efficient replacement to many if-else statements
//   - break is used to break out of the switch

const day = 7;
switch(day){
    case 1:
        console.log('Today is monday');
        break;
    case 2:
        console.log('Today is tuesday');
        break;
    case 3:
        console.log('Today is wednesday');
        break;
    case 4:
        console.log('Today is thursday');
        break;
    case 5:
        console.log('Today is friday');
        break;
    case 6:
        console.log('Today is saturday');
        break;
    case 7:
        console.log('Today is sunday');
        break;
    default:
        console.log(`${day} is not a day`);
        break;     
}