// METHOD CHAINING = calling one method after another in
//                   one continuous line of code

let username = prompt("Enter your username: ");

// ----- NO METHOD CHAINING -----

// username = username.trim();
// let firstLetter = username.charAt(0);
// firstLetter = firstLetter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = firstLetter + extraChars;
// console.log(username);

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);