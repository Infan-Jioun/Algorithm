
// Map হলো JavaScript-এর built-in collection যা key -> value জোড়া রাখে।

// Map-এ কোনো টাইপের key থাকতে পারে (string, number, object, function ইত্যাদি)।

// এটি insertion order বজায় রাখে।
const course1 = { name: "programing hero" }
const course2 = { name: "programing hero level 2" }
const map = new Map();
map.set(course1, { name: "Level1" }, { deuration: "6m" })
map.set(course2, { name: "Level2" }, { deuration: "6m" })
// map.set(false, "programing hero infan")
//map.clear();// clear map data
// map.delete(course2);// deleted data

// console.log(map);
console.log(map.size);// element length 
console.log(map.has(course1)); // check this element 
// forEach() হলো array method, যেটা array-এর প্রতিটা element এর জন্য একটা function চালায়।
// অর্থাৎ — তুমি একটা callback function দাও, আর এটা array-এর প্রতিটি item-এ সেটি execute করে।
// map.forEach((value, key) => console.log("Key: ", key, "Value: ", value));
map.forEach((value, key) => (key.name = "Title " + key.name))
map.forEach((value, key) => (value.name = "shohoz " + value.name))


console.log(map);
// Iterator মানে হলো এমন একটা object, যেটা থেকে তুমি একটা একটা করে মান (value) নিতে পারো — যতক্ষণ না সব শেষ হয়।
// console.log(map.keys()); 
//  console.log([...map.keys()]);  // object to Array convert
// console.log(map.values()); 

// 
for (let key of map.keys()) {
    key.name = "Title " + key.name
}
//Map এর ভিতরের key-value pair গুলো iterable আকারে পাওয়া যাচ্ছে।
const courses  = [["programing hero ", "Level1" ] , ["Next Level" , "Level2"]]
const map2 = new Map(courses);

console.log(map2.entries());