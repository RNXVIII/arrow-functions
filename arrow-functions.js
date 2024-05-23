/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b){

//     return a+b;
// }

// let sum = addTwoNumbers(5, 3);
// console.logz(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) =>{

    return a+b;
}

let sum = addTwoNumbers(5, 3);
console.logz(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a,b) => a+b;
// const addTwoNumbers2 = (a,b) => (a+b); also valid
let sum2 = addTwoNumbers2(6,4);
console.log(sum2);

// Implicit Returns
const saySomething = message =>  console.log(message);
saySomething("hello!!!");

const sayHello = () => console.log('hello');
sayHello()
// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
       this is multiple lines
    </p>`
)

console.log(returnMultipleLines());