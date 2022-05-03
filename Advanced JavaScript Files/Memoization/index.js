// Check output in the browser's console

const initApp = async () => {
    // const multiplyBy10 = memoizedMultiplyBy10();
    // console.log(multiplyBy10(10));
    // console.log(multiplyBy10(10));
    // console.log(multiplyBy10(10));
    // console.log(multiplyBy10(5));
    // console.log(multiplyBy10(5));
    // const memoizedMultiplyBy10 = memoize(multiplyBy10);
    // console.log(memoizedMultiplyBy10(10));
    // console.log(memoizedMultiplyBy10(10));
    // console.log(memoizedMultiplyBy10(10));
    // console.log(memoizedMultiplyBy10(5));
    // console.log(memoizedMultiplyBy10(5));
    // const memoizedAdd3 = memoize(add3);
    // console.log(memoizedAdd3(10, 1, 2));
    // console.log(memoizedAdd3(10, 1, 2));
    // console.log(memoizedAdd3(10, 1, 2));
    // console.log(memoizedAdd3(5, 4, 3));
    // console.log(memoizedAdd3(5, 4, 3));
    // const memoizedAddMany = memoize(addMany);
    // console.log(memoizedAddMany(1, 2, 3, 4, 5));
    // console.log(memoizedAddMany(1, 2, 3, 4, 5));
    // console.log(memoizedAddMany(1, 2, 3, 4, 5));
    // console.log(memoizedAddMany(6, 7, 8, 9, 10));
    // console.log(memoizedAddMany(6, 7, 8, 9, 10));
    const memoizedFib = memoize(fib);
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
    // console.log(fib(40));
    // console.log(fib(40));
    // console.log(fib(40));
}

document.addEventListener('DOMContentLoaded', initApp);

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
}

const multiplyBy10 = (num) => {
    return num * 10;
}

const add3 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

const addMany = (...args) => {
    return args.reduce((acc, num) => acc + num);
}

const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const memoizedMultiplyBy10 = () => {
    const cache = {};

    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num];
        }
        const result = num * 10;
        cache[num] = result;
        return result;
    }
}