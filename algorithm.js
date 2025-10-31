// Stephen you want to measure the execution time of a block of code in JavaScript, you can use the `performance.now()` method to get high-resolution timestamps before and after the code execution. Here's an example of how to do this:
// Method -1 
// const startTime = performance.now()
// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }
// const endTime = performance.now()
// console.log(`Execution time: ${endTime - startTime} milliseconds`);

// Method -2
// console.time("Task");
// for(let i = 0; i < 3000; i++){
//   console.log(i);
// }
// console.timeEnd("Task");

// Method -3 push data
// const firstArray = [];
// const secondArray = [];
// for (let i = 0; i < 40000; i++) {
//     if (i < 10000) {
//         firstArray.push(i)

//     }
//     secondArray.push(i)

// }
// console.log("FirstArray", firstArray.length)
// console.log("SecondArray", secondArray.length);