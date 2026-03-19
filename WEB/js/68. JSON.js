// JSON = (Javascript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3] OR [{},{}]

//        JSON.stringify() = converts a JS object to a JSON string 
//        JSON.parse()     = converts a JSON string to a JS object

let products = {
    name: 'car',
    'delivery-time': '1 month',
    rating: {
      stars: 4.5,
      count: 30,
    },
  }
console.log(products);
// convert object to JSON
let jsonObject = JSON.stringify(products);
console.log(jsonObject);
// convert JSON to object
let object = JSON.parse(jsonObject);
console.log(object);
// Note: JSON cannot holds functions inside it, while objects can

// const names = ["Rai","Kashif","Ali"];
// const jsonNames = JSON.stringify(names);
// console.log(jsonNames);

// const jsonPerson = `{
//     "name": "Kashif",
//     "age": 21,
//     "isEmployed": true,
//     "Hobies": ["gaming","reading","coding"]
// }`;
// const parsedNames = JSON.parse(jsonNames);
// const parsedPerson = JSON.parse(jsonPerson);
// console.log(parsedNames);
// console.log(parsedPerson);


// Fetch json file
// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value))
//     .catch(error => console.error(error))