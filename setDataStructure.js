//Set Defination
// Set is a collection of data unique elements, where order doesn't matter and duplicate are not allowed
//একটা মান একবার যোগ করলে, একই মান আবার দিলে সেটা ignore করে দেয়।
// set moloto use hoie view count like count er somi etc
// Example-1
// const set = new Set();
// set.add("infan");
// set.add("jioun");
// set.add("rahman");
// console.log(set.size);
// example-2
const infan = { userName: "Infan" };
const jioun = {userName : "Jioun"};
const rahman = {userName : "Rahman"};

const set = new Set();
set.add("infan");
set.add("jioun");
console.log(set);