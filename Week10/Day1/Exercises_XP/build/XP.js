"use strict";
/* 🌟 Exercise 1: Hello, World! Program */
// const str: string = "Hello, World!"
// console.log(str);
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    return 'Hello, there!';
}
console.log(greet());
console.log(greet('Alice'));
