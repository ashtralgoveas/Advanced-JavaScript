// Check output in the browser's console
const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

const buildSammy = ingred1 => ingred2 => ingred3 =>
`${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("turkey")("cheese")("bread");
console.log(mySammy);


const multiply = (x,y) => x * y;
const curriedMultiply = x => y => x * y;

console.log(multiply(2,3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));


const updateElement = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElement('header');
updateHeaderText('Hello There!');


const addCustomer = fn => (...args) => {
    console.log('saving customer info...');
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`);
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);

completeOrder = (addCustomer(completeOrder));
completeOrder("1000");


const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    }
}

const total = (x, y, z) => x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));