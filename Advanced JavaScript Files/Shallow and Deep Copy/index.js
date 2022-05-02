// Check output in the browser's console

//Javascript Data Types

//Primitive vs Structural

// Primitive - undefined, Boolean, Number, String, BigInt, Symbol

// Structural :
// 1) Object : (new) Object, Array, Mao, Set, WeakMap, Date
// 2) Function

// Value vs Reference
//Primitives pass values:
let x = 2;
let y = 2;
y += 1;
console.log(y);
console.log(x);

//Structural types use references:
let xArray = [1,2,3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);


//Mutable vs Immutable

//Primitives are immutable
let myName = "Ashtral";
myName[0] = "W";
console.log(myName);

//Reassignment is not same as mutable
myName = "Lorien"
console.log(myName);

//Structues contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);

//Pure Functions require us to avoid mutating the data.

//Impure function that mutates the data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
}
const scoreArr = [44, 23, 12];
console.log(addToScoreHistory(scoreArr, 14));

// Shallow copy vs Deep copy (clones)

// Shallow Copy

//With the spread operator

const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray);
console.log(yArray === zArray);

// With Object.assign();
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log(tArray);

//if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);

//nested structural data types still have a reference!
// Array.from() and slice() create shallow copies, too.


// Object.freeze()
const scoreObj = {
    "first" : 44,
    "second": 12,
    "third": {"a": 1, "b": 2}
}

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj); //Still uses shallow copy

// inorder to avoid this use deep copy

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

// Instaed of using a library, here is a Vanilla JS function

const deepClone = (obj) => {
    if(typeof obj !== "object" || obj === null) return obj;
    //Create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        const value = obj[key];
        //recursive call
        newObject[key] = deepClone(value);
    }
    return newObject;
}

const newScoreArray = deepClone(scoreArr);
console.log(newScoreArray);
console.log(newScoreArray === scoreArr);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);


//Pure Function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArr, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArr);