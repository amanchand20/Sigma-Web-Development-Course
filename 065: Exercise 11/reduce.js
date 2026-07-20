// Write down a program to calculate the factorial of number using reduce and using for loops

// Reduce 


let n = 5;

let arr = Array.from({ length: n }, (_, i) => i + 1);

let factorial = arr.reduce((acc, curr) => acc * curr, 1);

console.log(factorial);


// Loops

// let n = 5;
// let factorial = 1;

// for(let i=1; i<=n; i++){
//     factorial *= i;
// }

// console.log(factorial);