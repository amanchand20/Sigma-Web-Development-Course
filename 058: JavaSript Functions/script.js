function nice(name) {
    console.log("Hello " + name + " I am absolute")
    console.log("Hello " + name + " I am 30 years old")
    console.log("Hello " + name + " I live in Norway")
}

// nice("Aman")
// nice("Anshu")

// console.log("my name is aman chand")
// console.log("i am 30 yrs old")
// console.log("i live anywhere in world")

function sum(a, b, c=4) {
    // console.log(a + b);
    console.log(a, b, c)
    return a + b + c
}

// sum(3, 5)

result1 = sum (3)
result2 = sum (4, 8)
result3 = sum (3, 6, 1)

console.log("The sum of number is: ", result1);
console.log("The sum of number is: ", result2);
console.log("The sum of number is: ", result3);

const func1 = (x)=>{
    console.log("I'm an arrow function", x)
}

func1(96)
func1(52)
func1(73)