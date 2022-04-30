// Check output in the browser's console

// console.log(x);
// let x = 5;   ReferenceError: Cannot access 'x' before initialization

// stepOne();

// function stepOne() {
//     console.log('step one');
// }

// stepOne();
const stepOne = () => {
    console.log('step one');   
    // Uncaught SyntaxError: Identifier 'stepOne' has already been declared
}

stepOne();


const initApp = () => {
    console.log(stepOne);
    stepOne1();
}

// initApp();

document.addEventListener("DOMContentLoaded", initApp);

const stepOne1 = () => {
    console.log('step one1');
}