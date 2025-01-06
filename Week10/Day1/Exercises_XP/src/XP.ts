/* 🌟 Exercise 1: Hello, World! Program */
// const str: string = "Hello, World!"
// console.log(str);

// ___________________________________________________________________
/* 🌟 Exercise 2: Type Annotations */

// type age = number
// type name = string
// const userAge: age = 8
// const userName: name = 'john'

// console.log(typeof(userAge));
// console.log(typeof(userName));

// ___________________________________________________________________
/* 🌟 Exercise 3: Union Types */

// let id: number |string
// id = 423
// console.log(id);
// id = "hello"
// console.log(id);

// ___________________________________________________________________
/* 🌟 Exercise 4: Control Flow */

// function numSign(num: number) {
//   if (num > 0) return "Positive";
//   else if (num < 0) return "Negative";
//   else if (num === 0) return "Zero";
// }
// console.log(numSign(1));
// console.log(numSign(0));
// console.log(numSign(-1));

// ___________________________________________________________________
/* 🌟 Exercise 5: Tuple Types*/

// function getDetails(name:string, age: number){
//     return [name,age,`Hello, ${name}! You are ${age} years old.`]
// }

// const details = getDetails("Alice", 25);
// console.log(details);

// ___________________________________________________________________
/* 🌟 Exercise 6: Object Type Annotations*/

// type Person = {
//   name: string;
//   age: number;
// };

// function createPerson(name: string, age: number): Person {
//   return {
//     name: name,
//     age: age,
//   };
// }

// const person1 = createPerson('Sarah', 34)
// console.log(person1)

// ___________________________________________________________________
/* 🌟 Exercise 7: Type Assertions*/
