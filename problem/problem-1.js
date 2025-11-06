// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

// create new a dataCache
const dataCache = new Map();
const expensiveTask = (id) => {
    console.log(`Run the id : ${id}`);
    return {
        id: id, Data: `Some data for id : ${id} `, tempstamp: new Date().getTime()
    }
}
const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("Cache HiT The id ", id);
        return dataCache.get(id);
    }
    console.log("Cache miss for id ", id);


    const data = expensiveTask(id)
    dataCache.set(id, data)
    return data

}
console.log(dataCache);
console.log(getData(123));
console.log(dataCache);