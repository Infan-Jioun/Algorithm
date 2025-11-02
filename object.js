// What is Notaition 
//In JavaScript notaition meanns the way we access on define properties inside an object.  There are main notaions used for working with object properties
// Two Types Notation
// 1. Dot Notaition    .
// 2. Bracket Notaotion  []

// Dot Notaition 
// Usage: যখন property নামটি simple ও নির্দিষ্ট হয়(স্পেস বা special character ছাড়া)।
const person = {
    name: "Infan",
    age: 21
}
console.log(person.name);

// Bracket Notaition
// Usage: যখন property নাম dynamic, variable এ থাকে, বা স্পেস / special character থাকে।
const people = {
    "full name": "Infan Jioun Rahman",
    age: 21
}
console.log(people["full name"]);
//  bolean use
// const course1 = { name: "programing hero" }
// const course2 = { name: "nextlevel" }
// const obj = [];
// obj.nextLevel = { courseId: "Level2" }
// obj[true] = { courseId: "Level1" }
// console.log(obj);

const course1 = { name: "programing hero" }
const course2 = { name: "nextlevel" }
const obj = [];
obj.nextLevel = { courseId: "Level2" }
obj[course1] = { courseId: "Level1" }
console.log(obj["[object Object]"]);


