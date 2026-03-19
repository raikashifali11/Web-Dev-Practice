const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "mango", color: "yellow", calories: 90},
    {name: "peach", color: "green", calories: 70}
];
// fruits.push({name: "cherry", color: "red", calories: 30})
// fruits.pop();
// fruits.splice(2,2);
// console.log(fruits);

// ------ forEach() ------

// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.color));

// ------ map() ------
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

// ------ filter() ------
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);
// low cal fruits

// ------ reduce() ------
const maxCalfruit = fruits.reduce((max,fruit) => 
                                  fruit.calories > max.calories? fruit:max);
const minCalfruit = fruits.reduce((min,fruit) => 
                                  fruit.calories < min.calories? fruit:min);
console.log(maxCalfruit);
console.log(minCalfruit);

