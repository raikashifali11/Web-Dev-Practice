// RANDOM PASSWORD GENERATOR

function passwordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "`~!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase? lowercaseChars: "";
    allowedChars += includeUpperCase? uppercaseChars: "";
    allowedChars += includeNumbers? numberChars: "";
    allowedChars += includeSymbols? specialChars: "";

    // console.log(allowedChars);
    if (length <= 0) {
        return 'Error:(Password length must be atleast 1)';
    }
    if (allowedChars.length <= 0) {
        return 'Error:(Atleast one set of characters must be selected)';
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = passwordGenerator(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);