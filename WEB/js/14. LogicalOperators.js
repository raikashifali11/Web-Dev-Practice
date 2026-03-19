// LOGICAL OPERATORS = used to combine or manipulate boolean values
//                     (true or false)

// AND = && - True if both conditions are true
// OR  = || - True if one of the both conditions is true
// NOT = !  - Reverse condition(true into false and false into true)

let temperature = 10;

// if (temperature >= 0 && temperature <= 37) {
//     console.log("Weather is GOOD.");
// }else{
//     console.log("Weather is BAD.");
// }

// if (temperature <= 0 || temperature >= 37) {
//     console.log("Weather is BAD.");
// }else{
//     console.log("Weather is GOOD.");
// }

let isPlaying = false;

if (!isPlaying) {
    console.log("Song is OFF!");
}else{
    console.log("Song is ON!");
}