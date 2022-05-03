// Check output in the browser's console

let myArray = [];

console.log(myArray.length);

console.log(myArray.length ? true : false);

// myArray = undefined;

// console.log(myArray.length ? true : false);

myArray = undefined;

console.log(myArray && myArray.length ? true : false);


myArray = [{ "id" : 1}];

console.log(myArray?.[0].id ? true : false);

console.log(myArray?.[0].name ? true : false);

console.log(myArray?.[0].id ?? "No id property");

console.log(myArray?.[0].name ?? "No name property");


myArray = "Ashtral";

console.count(myArray && myArray.length ? true : false);

console.log(myArray?.length ? true : false);

console.log(Array.isArray(myArray));

myArray = [{ "id" : 1}];
console.log(Array.isArray(myArray) && myArray.length ? true : false);


console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false);