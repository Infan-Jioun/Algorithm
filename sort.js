const numbers = [40, 50, 100, 25, 1, 5];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortedNumber = numbers.sort((a, b) => b - a)
console.log(sortedNumber);
//localeCompare() ভাষার locale-sensitive rules অনুসরণ করে — যেমন alphabet order, accent, uppercase/lowercase differences ইত্যাদি ঠিকভাবে ধরে।
const sortedFruits = fruits.sort((a, b) => a.localeCompare(b))
console.log(sortedFruits);
