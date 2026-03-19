// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order,
//          not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);
// let numbers = [1,2,3,4,5,6,7,8,9,10,11];
// numbers.sort();
// numbers.sort((a,b) => a-b);
// numbers.sort((a,b) => b-a);
// console.log(numbers);

const fruits = [
    {name: "orange", color: "orange", calories: 45},
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 105},
    {name: "mango", color: "yellow", calories: 90},
    {name: "peach", color: "green", calories: 70}
];

// fruits.sort((a,b) => a.calories - b.calories);
fruits.sort((a,b) => a.name.localeCompare(b.name));

console.log(fruits);