/* Create a business name generator by combining list of adjective and shop names and another word

Adjective:
Crazy
Amazing 
Fire

Shop Name: 
Engine 
Foods 
Garments

Another Word:
Bros
Limited
Hub

*/

let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();

let adjective;
let shopName;
let anotherWord;

if (rand1 > 0.33) {
    adjective = "Crazy";
} else if (rand1 > 0.66) {
    adjective = "Amazing"
} else {
    adjective = "Fire"
}

if (rand2 > 0.33) {
    shopName = "Engine";
} else if (rand2 > 0.66) {
    shopName = "Foods"
} else {
    shopName = "Garments"
}

if (rand3 > 0.33) {
    anotherWord = "Bros";
} else if (rand3 > 0.66) {
    anotherWord = "Limited"
} else {
    anotherWord = "Hub"
}

console.log(adjective + " " + shopName + " " + anotherWord);