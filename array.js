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
    ["javaScript" , "react", "css"],
    ["node", "express"],
    ["css" , "html", "react"]

]
const filterPosts  =  [...new Set(tagsFormPosts.flat())]
console.log(filterPosts);