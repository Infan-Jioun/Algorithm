
// Map হলো JavaScript-এর built-in collection যা key -> value জোড়া রাখে।

// Map-এ কোনো টাইপের key থাকতে পারে (string, number, object, function ইত্যাদি)।

// এটি insertion order বজায় রাখে।
const course1 = "programing hero"
const course2 = "programing hero level 2"
const map = new Map();
map.set(course1, { name: "Level1" }, { deuration: "6m" })
map.set(course2, { name: "Level2" }, { deuration: "6m" })
map.set(false, "programing hero infan")
console.log(map);