let random = Math.random()

let a = prompt("Enter 1st Number: ")
let c = prompt("Enter Operations: ")
let b = prompt("Enter 2nd Number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {

    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)

}

else {

    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)

}