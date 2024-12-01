/*🌟 Exercise 1 : Scope */
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// prediction: a  == 3
// // // #1.1 - run in the console:
// funcOne()
// // #1.2 we will get a type error

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// // prediction: first a  == 0 then  a==5
// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // // #2.2 again we will get a type error

// // //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// prediction: a  == "hello"
// // // #3.1 - run in the console:
// funcFour()
// funcFive()

// // //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// prediction: a  == "test"
// // // #4.1 - run in the console:
// funcSix()
// // #4.2  we will get type error

// //#5
// prediction: first a  == 5 then  a==2
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 again we will get an type arror as const cannnot be reinitialised
/*______________________________________________________________________________________________________________________________________________ */
/*🌟 Exercise 2 : Ternary operator */



// const winBattle = () => true

// experiencePoints = winBattle() ? 10 : 1

// console.log(experiencePoints)

/*______________________________________________________________________________________________________________________________________________ */
/*🌟 Exercise 3 : Is it a string ? */

// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. 
// The function should return true or false
// Check out the example below to see the expected output
// Example:
// const isString = (value) => typeof  value ==="string"
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
//false

/*______________________________________________________________________________________________________________________________________________ */
/*🌟 Exercise 4 : Find the sum */
// const sum =  (a, b) => a + b;

// console.log(sum(2,3))

/*______________________________________________________________________________________________________________________________________________ */
/*🌟 Exercise 5 : Kg and grams*/



// 5.1
// function toGrams(kgValue)
// {
//     let gramValue = kgValue *1000
//     return gramValue
// }
// console.log(toGrams(3) + "g")
// 5.2
// toGrams = function(kgValue)
// {
//     letgramValue = kgValue *1000
//     return gramValue
// }
// console.log(toGrams(2) + "g")
// 5.3
// A function declaration is hoisted and can be called before its definition, 
// while a function expression is not hoisted and can only be called after it is defined.
// // 5.4
// const toGrams = (kgValue) => gramValue = kgValue *1000
// console.log(toGrams(6) + "g")

/*______________________________________________________________________________________________________________________________________________ */
/* 🌟 Exercise 6 : Fortune teller*/

// (function (numOfChildren,partnerName, location,  jobTitle )
// {
//     let message =`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`
//     document.body.innerHTML= message
// })(3,"Sarah", "Georgia",  "baker")

/*______________________________________________________________________________________________________________________________________________ */
/* 🌟 Exercise 7 : Welcome*/

// (function(userName)
// {
//     const navBar = document.getElementById("nav")
//     const userInfoDiv=document.createElement('div')
//     userInfoDiv.className = "user_info"
//     userInfoDiv.setAttribute("style"," display: flex; justify-content: start; padding: 10px; align-items: center;")
//     const profilePic = document.createElement("img")
//     profilePic.src = "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg"
//     profilePic.style.borderRadius = "50%";
//     profilePic.style.height = "80px"
//     profilePic.style.width = "80px"

//     const welcomeMessage = document.createTextNode(`Welcome, ${userName}!`)

//     userInfoDiv.appendChild(profilePic)
//     userInfoDiv.appendChild(welcomeMessage)
//     navBar.appendChild(userInfoDiv)
// })('John')

/*______________________________________________________________________________________________________________________________________________ */
/* 🌟 Exercise 8 : Juice Bar*/

// function makeJuice(drinkSize) {
//     const ingredients = []
//     // let ingredient1 = ''
//     // let ingredient2 = ''
//     // let ingredient3 = ''

//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         ingredients.push(ingredient1, ingredient2, ingredient3)
//         displayJuice(ingredient1, ingredient2, ingredient3)
//     }



//     function displayJuice(ingredient1, ingredient2, ingredient3) {
//         const message = `The client wants a ${drinkSize} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`
//         document.body.innerHTML = message
//         console.log(ingredients)
//     }

//     addIngredients("apple", "banana", "orange")
//     addIngredients("pear", "peach", "pineapple")
// }
// makeJuice('medium')

