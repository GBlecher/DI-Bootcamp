"use strict";
/*🌟 Exercise 1: Intersection Types*/
// interface Person  {
//   name: string;
//   age: number;
// };
// interface Address  {
//   street: string;
//   city: string;
// };
// type PersonWithAddress = Person & Address;
// const User: PersonWithAddress = {
//     name: "george",
//     age: 25,
//     street: "Somewhere",
//     city: "Nowhere",
// }
// _______________________________________________________________
/*🌟 Exercise 2: Type Guards with Union Types*/
// function describeValue(input: number | string): string{
//     if (typeof input === "string"){
//         return "This is a string"
//     }
//     return "This is a number"
// }
// console.log(describeValue("hello"));
// console.log(describeValue(123));
// _______________________________________________________________
/*🌟 Exercise 3: Type Casting*/
// let someValue: any
// someValue as string
// someValue = "This is a string"
// console.log(someValue);
// console.log(typeof(someValue));
// _______________________________________________________________
/*🌟 Exercise 4: Type Assertions with Union Types*/
// function getFirstElement( arr: number[] | string[] ){
//     if(typeof arr[0] === "number"){
//         return arr[0] as unknown as string
//     }
//     else return arr[0]
// }
// console.log(getFirstElement([1,2,3]));
// console.log(getFirstElement(["one","two", "three"]))
// _______________________________________________________________
/*🌟 Exercise 5: Generic Constraints*/
//  function logLength<T extends { length: number }>(input:T ): void{
//     console.log(input.length);
//  }
// logLength("Hello, World!");
// logLength([1, 2, 3, 4, 5]);
// logLength([])
// _______________________________________________________________
/*🌟 Exercise 6: Intersection Types and Type Guards*/
// interface Person {
//   name: string;
//   age: number;
// }
// interface Job {
//   position: string;
//   department: string;
// }
// type Employee = Person & Job;
// const Employee1: Employee = {
//   name: "Jerry",
//   age: 36,
//   position: "Manager",
//   department: "Accounting",
// };
// const Employee2: Employee = {
//     name: "Bob",
//     age: 23,
//     position: "Developer",
//     department: "Dev",
//   };
// function describeEmployee(employee: Employee): string {
//     if(employee.position === "Manager"){
//         return` ${employee.name} is a manager `
//     } else if(employee.position === "Developer"){
//         return` ${employee.name} is a developer `
//     }
//     return `${employee.name} is neither a developer nor manager`
// }
// console.log(describeEmployee(Employee1));
// console.log(describeEmployee(Employee2));
// _______________________________________________________________
/*🌟 Exercise 7: Type Assertions and Generic Constraints*/
function formatInput(input) {
    return input.toString();
}
const num = 42;
const bool = true;
const obj = { name: "Alice", age: 30 };
console.log(formatInput(num));
console.log(formatInput(bool));
console.log(formatInput(obj));
