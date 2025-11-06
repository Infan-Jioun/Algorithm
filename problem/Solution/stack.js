export default class Stack {
    constructor() {
        this.items = []
    } 
    // o(n)
    push(value) {
        this.items.push(value)
    }
    
}