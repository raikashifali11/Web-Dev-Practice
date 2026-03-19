// STRING METHODS = allow you to manipulate and work with text (strings)

// let username = "Kashif Ali";

// charAt() - returns character at the given index
// console.log(username.charAt(0));
// console.log(username.charAt(1));


// indexOf() - returns index of first occurance of the character
// lastIndexOf() - returns index of last occurance of the character
// console.log(username.indexOf("a"));
// console.log(username.lastIndexOf("a"));


// length - returns size of string
// console.log(username.length);


// trim() - removes white spaces from start and end of string
// username = username.trim();
// console.log(username);


//toUpperCase()
// console.log(username.toUpperCase());
//toLowerCase()
// console.log(username.toLowerCase());


// repeat()
// username = username.repeat(4);
// console.log(username);


//startsWith() - returns boolean(true or false)
// let result = username.startsWith(" ");
// console.log(result);


//endsWith() - returns boolean(true or false)
// let result = username.endsWith("i");
// console.log(result);


//includes() - returns boolean(true or false)
// let result = username.includes("K");
// console.log(result);


// replace()
// replaceAll()
// let phoneNumber = "92-327-8578272";
// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);


// padStart()
// padEnd()
// let number = "9";
// number = number.padStart(2,"0");
// number = number.padEnd(2,"$");
// console.log(number);


// str1.concat(str2) - join two strings
// let firstName = "Rai Kashif";
// let lastName = " Ali";
// let fullName = firstName.concat(lastName);
// console.log(fullName);

// EXERCISE

let userName = prompt("Enter fullname: ")
userName = '@' + userName + userName.length;
console.log(userName);