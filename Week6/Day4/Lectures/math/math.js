/**
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */




const multi = (a, b) => {
    return a * b
}
const divide = (a, b) => {
    if (b != 0) {
        return a / b
    }else {
        throw new Error("Cant devide by 0");
        
    }
}
const add = (a, b) => {
    return a + b
}
const sub = (a, b) => {
    return a - b
}

// console.log(multi(2,3));
// console.log(divide(2,3));
// console.log(add(2,3));
// console.log(sub(2,3));

module.exports = {
    multi,
    divide,
    add,
    sub
}