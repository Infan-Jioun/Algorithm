//Set Defination
// Set is a collection of data unique elements, where order doesn't matter and duplicate are not allowed
//একটা মান একবার যোগ করলে, একই মান আবার দিলে সেটা ignore করে দেয়।
// set moloto use hoie view count like count er somi etc
//Set এবং Array আলাদা data structure —
// set.add() হলো Set object - এর একটা built -in method,
//     যেটা দিয়ে তুমি Set - এর মধ্যে নতুন element যোগ করতে পারো।
//Array.from() মূলত কোনো iterable বা array-like object কে সাধারণ array তে রূপান্তর করে।
// Example-1
// const set = new Set();
// set.add("infan"); // new elemrent add kore 
// set.add("jioun");
// set.add("rahman");
// console.log(set.size);
// // example-2
// const infan = { userName: "Infan" };
// const jioun = { userName: "Jioun" };
// const rahman = { userName: "Rahman" };

// const set = new Set();
// set.add("infan");
// set.add("jioun");
// console.log(set);

// Example-3
// const arr = ["laptop", "mobile", "mouse"];
// const set = new Set(arr);
// const test = Array.from(set); // Array.from() মূলত কোনো iterable বা array-like object কে সাধারণ array তে রূপান্তর করে।
// test.push("keyboard")
// console.log(test)

// example 4 (has)
// set.has(value) হলো Set-এর একটা method যা যাচাই করে কোনো value Set-এর মধ্যে আছে কিনা।
const arr = ["laptop", "mobile", "mouse"];
const set = new Set(arr);
console.log(set.has("laptop"));
console.log(set.has("keyboard"));

