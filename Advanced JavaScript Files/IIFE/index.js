// Check output in the browser's console

(function myIIFE(num = 0)
{
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('finished!');

})();

// global
// 1)Does not pollute global object namespace
const x = "whatever";
const helloWorld = () => "Hello World!";

(() => {
    const x = "iife whatever!";
    const helloWorld = () => "Hello IIFE!";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

// 2)Private variables and methods from closure

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits(s)`);
    return () => { counter++; credits(counter);}
})();

increment();
increment();
// credits(3);

// 3)Module Pattern

const Score = (() => {
    let count = 0;
    return {
        current: () => { return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());

// Revealing Pattern is a variation of Module Pattern

const Game = (() => {
    let count = 0;
    const current = () => { return `Game score is ${count}.`};
    const increment = () => {count++};
    const reset = () => {count = 0};

    return {
        current: current,
        increment: increment,
        reset: reset
    }
})();

Game.increment();
console.log(Game.current());

// Injecting a namespace object

((namespace) => {
    namespace.count = 0;
    namespace.current = function() { return `App count is ${this.count}.`}
    namespace.increment = function() { this.count++ }
    namespace.reset = function() { this.count = 0};
})(window.App = window.App || {});

App.increment();
console.log(App.current());
