// let obj = {
//     a: 1,
//     b: "aman"
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// Object.setPrototypeOf(rabbit, animal)
// // rabbit.__proto__ = animal 

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }
    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        ("Khood raha hoon")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    roars() {
        console.log("Roars")
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Sher")
console.log(l)