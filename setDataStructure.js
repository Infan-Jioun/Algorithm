//Set Defination
// Set is a collection of data unique elements, where order doesn't matter and duplicate are not allowed
//একটা মান একবার যোগ করলে, একই মান আবার দিলে সেটা ignore করে দেয়।
// set moloto use hoie view count like count er somi etc
//Set এবং Array আলাদা data structure —
// set.add() হলো Set object - এর একটা built -in method,
//     যেটা দিয়ে তুমি Set - এর মধ্যে নতুন element যোগ করতে পারো।
//Array.from() মূলত কোনো iterable বা array-like object কে সাধারণ array তে রূপান্তর করে।
// set.forEach(callback) is a method of Set that executes a provided function once for each value in the Set in the insertion order.

// set.forEach(callback) হলো Set - এর একটি method যা Set - এর প্রতিটি element - এর জন্য একবার করে একটি function execute করে।
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
// const arr = ["laptop", "mobile", "mouse"];
// const set = new Set(arr);
// console.log(set.has("laptop"));
// console.log(set.has("keyboard"));

// example 5 (delete)
// set.delete(value) হলো Set-এর একটি method যা Set-এর মধ্যে থেকে নির্দিষ্ট value মুছে ফেলে, যদি তা থাকে।

// Value মুছে গেলে → true

// Value না থাকলে → false
// const arr = ["laptop", "mobile", "mouse"];
// const set = new Set(arr);
// console.log(set.delete("laptop"));
// console.log(set);
// Braute Force
const arr = ["laptop", "mobile", "mouse"];
const removeDupArr = (arr) => {
    const newArr = [];   // forEach হলো JavaScript array-এর একটি method যা প্রতিটি element-এর জন্য একটি function execute করে।
    arr.forEach((element) => {
        //includes() হলো JavaScript array method যা চেক করে কোনো value array-এ আছে কিনা।
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    })
    return newArr
}
console.log(removeDupArr(arr));
// set implemation
const removeDup = (arr) => {
    const set = new Set(arr)
    return Array.from(set)

}
console.log(removeDup(arr));