// Check output in the browser's console

// iterator function
const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
}

countToTen();

// recursive functions have 2 parts:
// 1) the recursive call to the function 
// 2) at least one condition to exit

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
}

recurToTen();

// The Fibonacci Sequence

// Without Recursion:
const fibonacci = (num = 2, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

console.log(fibonacci(10));

// With Recursion:
const fib = (num = 2, array = [0, 1]) => {
    if (num < 2) return array.slice(0, array.length - 1);
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
}

console.log(fib(10));

// What number is in the nth position of the Fibonacci Sequence?

// Without Recursion:
const fibonacciPos = (pos) => {
    if (pos < 2) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}

console.log(fibonacciPos(8));

// With Recursion:
const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}

// Same function in one line
const fibPos1 = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

console.log(fibPos1(8));

// Real-Life Examples: 

// 1) Continuation Token from an API

const getAWSProductIdImages = async () => {

    // get the data with await fetch request

    if (data.IsTruncated) {
        //recursive
        return await getAWSProductIdImages(
            productId,
            s3, // connection to s3
            resultArray, // accumulator
            data.NextContinuationToken
        );
    }

    return resultArray;
}

// 2) A Parser:
// a company directory
// a file directory 
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistNames(artistsByGenre));