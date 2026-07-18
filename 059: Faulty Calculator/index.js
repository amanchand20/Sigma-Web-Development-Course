const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let operator = prompt("Enter an operator(+, -, *, /): ");

let random = Math.random();

if (random < 0.1) {
    if (operator === "+") {
        console.log(a - b);
    }
    else if (operator === "-") {
        console.log(a / b);
    }
    else if (operator === "*") {
        console.log(a + b);
    }
    else if (operator === "/") {
        console.log(a ** b);
    }
} else {
    if (operator === "+") {
        console.log(a + b);
    }
    else if (operator === "-") {
        console.log(a - b);
    }
    else if (operator === "*") {
        console.log(a * b);
    }
    else if (operator === "/") {
        console.log(a / b);
    }
}