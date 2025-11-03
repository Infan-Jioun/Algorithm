// Count subtotal

const cartItems = [
    { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
    { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];
// console.log(cartItems);
// Useing reduce 
// sum of numbers  method-1
const subtotal = cartItems.reduce((subtotal, product) => {
    return subtotal + product.price * product.quantity
}, 0)
console.log(subtotal);
// Find best scorer

const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];
const bestScorer = players.reduce((bestPlayer, player) => {
    if (bestPlayer.score > player.score) {
        return bestPlayer
    }
    return player;
}, players[0])
// console.log(bestScorer);
//The Common Pattern - Normalizing using lookup table

//* Generate a lookup table

//? Input
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];
const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;
    return table
}, {})
console.log(lookupTable);
//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }
// !const post = postsArray.find((post) => post.id === "p-101") (slow type)
// const post = lookupTable["p-101"] fast run 
// console.log(post);
// for...in লুপ object-এর key গুলা (property names) iterate করে।

for(let post in lookupTable){
  console.log(lookupTable[post]);
}

