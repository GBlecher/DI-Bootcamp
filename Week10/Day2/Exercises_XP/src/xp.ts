/*🌟 Exercise 1: Class with Access Modifiers */

// class Employee {
//     constructor(
//         private name: string,
//         private salary: number,
//         public position: string,
//         protected department: string
//     ) {}

//     public getEmployeeInfo(): string {
//         return `Name: ${this.name}, Position: ${this.position}`;
//     }
// }

// const employee = new Employee('John Doe', 50000, 'Developer', 'IT');
// console.log(employee.getEmployeeInfo());
// _______________________________________________________________________________________________________________
/*🌟 Exercise 2: Readonly Properties in a Class */

// class Product  {
//     constructor(
//         readonly  id : string,
//         public name: string,
//         public price: number,

//     ) {}
//     getProductInfo(): string {
//         return`Name: ${this.name}, Price: ${this.price}`
//     }
// }

// const product = new Product("101", "Apple", 5)
// console.log(product.getProductInfo());

// _______________________________________________________________________________________________________________
/*🌟 Exercise 3: Class Inheritance */

// class Animal{
//     constructor(
//         public name:string
//     ){}
//     public makeSound(sound:string):string{
//         return " some generic animal sound"
//     }
// }

// class Dog extends Animal{
//     public makeSound(): string {
//         return "bark"
//     }
// }
// const myDog = new Dog("Buddy");
// console.log(myDog.makeSound());

// _______________________________________________________________________________________________________________
/*🌟 Exercise 4: Static Properties and Methods */

// class Calculator {
//   static add(a: number, b: number): number {
//     return a + b;
//   }
//   static subtract(a: number, b: number): number {
//     return a - b;
//   }
// }

// console.log(Calculator.add(1,3));
// console.log(Calculator.subtract(1,3))

// _______________________________________________________________________________________________________________
/*🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties*/


interface User {
    readonly id : number;
    name: string;
    email:string;


}

interface PremiumUser  extends User{
    membershipLevel?: string
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
      console.log('Membership Level: Not specified');
    }
  }

  const premiumUser: PremiumUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    membershipLevel: 'Gold'
  };
  
  printUserDetails(premiumUser);