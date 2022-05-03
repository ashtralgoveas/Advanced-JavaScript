// Check output in the browser's console
 const add2 = (x) => x+2;
 const subtract1 = (x) => x-1;
 const multiplyBy5 = (x) => x*5;

 const result = multiplyBy5(subtract1(add2(4)));
 console.log(result);

 const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev),val);
//  const compResult = compose(multiplyBy5, subtract1, add2)(4);
//  console.log(compResult);

//  const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev),val);

 const compResult = compose(multiplyBy5, subtract1, add2)(4);
 console.log(compResult);

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev),val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

const pipeResult2 = pipe (
    add2,
    subtract1,
    multiplyBy5
)(6);

console.log(pipeResult2);

const divideBy = (divisor, num) => num/divisor;

const pipeResult3 = pipe (
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult3);


const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2);

const pipeResult4 = pipe (
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4);



const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem similique dolores illum minima mollitia dicta vero corporis blanditiis consectetur quis, officiis, dolor placeat ut, quae deserunt vel rem perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore est amet accusamus, quasi vel. Accusantium sequi debitis magni exercitationem earum aut! Pariatur odit veniam iste sit officia neque harum?"

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
    splitOnSpace,
    count
);

console.log(wordCount(lorem));

const egbdf = "Every good boy does fine.";
console.log(wordCount(egbdf));


const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Ashtral";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase('');
const reverse = (string) => string.reverse('');

const fwd = pipe (
    splitOnSpace,
    join,
    lower
);

const rev = pipe (
    fwd,
    split,
    reverse,
    join
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));



const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj};

const incrementHome = (obj) => {
    obj.home += 1;
    return obj;
};

const homeScore = pipe(
    shallowClone,
    incrementHome
);

console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj);


let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
}

incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHomeB
);

console.log(homeScoreB(scoreObj));
console.log(scoreObj);



let incrementHomeC = (obj,cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1;
    return newObj;
};

const homeScoreC = pipe(
    x => incrementHomeC(x, shallowClone)
);

console.log(homeScoreC(scoreObj));
console.log(scoreObj);


