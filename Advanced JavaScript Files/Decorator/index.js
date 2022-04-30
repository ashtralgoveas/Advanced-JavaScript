// Check output in the browser's console
//Example 1
//Using closure to log how many times a function is called

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {
    let count = 0;
    return (...args) => {
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);

console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));

//Example 2
let rectangleArea = (length, width) => {
    return length * width;
}

// A decorator that counts the parameters
const countParams = (fn) => {
    return (...params) => {
        console.log('countParams')
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

// A decorator that requires integers
const requireIntegers = (fn) => {
    const name = fn.name;
    return (name, ...params) => {
        console.log('requireIntegers')
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params for ${name} must be integers`);
            }
        });
        return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

// console.log(rectangleArea(20, 30, "Dave")) //caught 1st by integers error
// console.log(rectangleArea(20, 30, 40)); //number of parameters error
// console.log(rectangleArea(20, 30));

//Example 3
//Decorating an async API call function
//Time data requests during development
let requestData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err) {
        console.error(err);
    }
}


const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

myTestFunction();