let a = [2, 78, 6, 84, 6]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// })

// let object = {
//     a : 1,
//     b : 2,
//     c : 3
// }

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
//     console.log(element)
    
// }

for (const value of a){
    console.log(value)
}