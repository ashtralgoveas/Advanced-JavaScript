// Check output in the browser's console

//Pure function - part of functional programming paradigm

//Why use Pure Functions ?
// Clean code, easy to test, easy to debugger, decoupled and independent, could be added tp utility functions

//Rules for Pure Functions:
// 1)Same I/P ALWAYS gives same O/P
// 2)no side effects
// -------------------------------------------------------------------------------


// 1)Same I/P ALWAYS gives same O/P

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Ashtral", "Goveas"));

// We can replace the function with the output
// This is called "referential transparency"


// A pure function should have at least one parameter.
// Otherwise, it is the same as a constant because they can only work with their input.

const firstName = () => "Ashtral";

// const firstName = "Ashtral";

// 2) No side effects:
// Means accessing the scope outside the function makes the function impure
const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

// Pure Functions cannot : 
// Access a database, API, file system, storage, etc.
// Modify the DOM
// Or even log to the console

// Impure Functions are clearly neccessary
// but they are harder to test and debug

// Furthermore, no input state can be modified
// That is, no data should be mutated
// Consider all input data to be immutable

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

// Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);

// Refactored Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

// Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);


// Common Higher Order Functions are Pure Functions:

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive);

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);

console.log(oneToFive);