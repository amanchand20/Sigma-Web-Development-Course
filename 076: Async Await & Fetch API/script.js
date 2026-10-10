// async function getData() {
//     // Simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // Simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.json()
    return data;
}

async function main() {
    console.log("Loading Data")
    console.log("Do Something Else")
    console.log("Load Data")

    let data = await getData()

    console.log(data)
    console.log("Process Data")
    console.log("Task 2")
}

main()

// data.then((v) => {
// console.log(data)
// console.log("Process Data")
// console.log("Task 2")
// })