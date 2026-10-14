let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this input is invalid. Please Use Numbers")
}

let sum = parseInt(a) + parseInt(b);

function main() {

    let x = 3;

    try {
        console.log("The sum is ", sum * x)
        return true
    } 
    catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    finally {
        console.log("Sab complete hogaya bhai")
    }
}

let c = main()