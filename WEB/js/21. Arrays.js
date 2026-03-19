// ARRAYS = a variable like structure that can hold more than 1 value.
//          Arrays are mutable(values can be changed)

let fooditems = ['potato','litchi','mango','apple','tomato'];

// let numOfItems = fooditems.length;
// let index = fooditems.indexOf('apple');
// console.log(numOfItems);
// console.log(index);

// ARRAY METHODS

// push()    - add to end            // change in original
// fooditems.push('chips');
// pop()     - delete at end         // change in original
// fooditems.pop();
// unshift() - add to start          // change in original
// fooditems.unshift('burger');
// shift()   - delete from start     // change in original
// fooditems.shift();

// concat(): join two arrays
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];
// let newarr = arr1.concat(arr2);     // change in copy

// toString() - convert array to string
// let marks = [90,91,92,93,94,95];
// console.log(marks.toString());

// slice() - cut some elements to store in new array  // change in copy
// console.log(marks.slice(2,4));
// console.log(marks);


// splice(startidx,delcount,newE...)   // change to original
// let counting = [1,2,3,4,5,6,7,8,9,10];
// counting.splice(2,4,101,102,103,104);
// console.log(counting);

// reverse() - reverses array          // change to original
// let numbers = [1,2,3,4,5];
// numbers.reverse();
// console.log(numbers);

// sort() - sorts the array
// let numbers = [5,2,3,1,4];
// numbers.sort();
// console.log(numbers);




// LOOPING OVER AN ARRAY

// for loop method
let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// shortcut method
for (const number of numbers) {
    console.log(number);
}