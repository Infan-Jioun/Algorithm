// Stateless and Statefull
// JavaScript er funtion hosse stateless
// Object golo hosse statefull


// 🧠 Lexical Environment কী?

// Lexical Environment হলো এমন একটা জায়গা (মেমরি + রেফারেন্স সিস্টেম)
// যেখানে JavaScript variables এবং functions সংরক্ষণ করে এবং তাদের scope ট্র্যাক করে।

// অর্থাৎ, যখন তুমি কোনো function লেখো, তখন সেই function-এর নিজস্ব “environment” তৈরি হয়,
// যেখানে তার local variables, inner functions, আর outer environment-এর রেফারেন্স রাখা থাকে।
// Stateless
// const counter = (amount) => {
//    let count = 0;
//    count = count + amount
//    return count
// }
// console.log(counter(3));
// console.log(counter(2));

// Statefull
const counter = {
    count: 0,
    add(amount) {
        this.count = this.count + amount;
    },
    print() {
        console.log(this.count);
    }
}
counter.add(2);
counter.add(3);