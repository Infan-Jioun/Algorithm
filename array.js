// nested Array flast 
// ১. flat() কী করে?

// Array.prototype.flat() হচ্ছে array flattening method।
// মানে — nested array (array এর ভিতরে array) কে একটা single level array বানায়।
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]]
// console.log(arr)
//Infinity দিলে — যত গভীর nested array-ই থাকুক না কেন,
// সব লেভেল খুলে একদম single flat array বানাবে।
const flatArray = arr.flat(Infinity)
console.log(flatArray);


const tagsFormPosts = [
    ["javaScript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"]

]
const filterPosts = [...new Set(tagsFormPosts.flat())]
// console.log(filterPosts);

// some 
//some() হলো JavaScript এর একটা array method
//এটা check করে array-এর কমপক্ষে একটা element কি নির্দিষ্ট condition পূরণ করছে কিনা।

//যদি একটা elementও condition পূরণ করে → true return করে

///যদি কোনোটাই না করে → false return করে
const numbers = [1, 2, 3, 4, 5];
const hasEventNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEventNumber);