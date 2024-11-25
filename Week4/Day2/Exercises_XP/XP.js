// // 🌟 Exercise 1 : List of people
// const people = ["Greg", "Mary", "Devon", "James"];

// // >>>PART I<<<
// // 1.
// people.shift()
// // console.log(people)

// // 2.
// people.splice(3,1,"Jason")
// // console.log(people)

// // 3.
// people.push("Gilan")
// // console.log(people)

// // 4.
// // console.log("Index of Mary: " + people.indexOf("Mary"))

// // 5.
// copyOfPeople = people.slice(1,-1)
// // console.log(copyOfPeople)

// // 6.
// // console.log("Index of Foo: " + people.indexOf('Foo'))
// // >> it is -1 because foo is not asubstring

// // 7.
// length = people.length
// last = people[length-1]
// // console.log(last)
// // >> because our count starts at 0 the last avalue in the array is length(of array) -1


// // >>>PART II<<<

// // 1.
// // for(person of people)
// // {
// //     console.log(person + "\n")
// // }

// // 2.
// // for(let i = 0; i < people.length; i++ )
// // {
// //     if (people[i] === "Devon")
// //     {
// //         console.log(people[i]  + "\n")
// //         break
// //     }else
// //     {
// //         console.log(people[i]  + "\n")
// //         continue

// //     }
// // }
/*_____________________________________________________________________________________________________________________________________________________*/

// // 🌟 Exercise 2 : Your favorite colors

// // 1.
// colors = ["Red","Yellow","Green","Blue", "Orange"]

// // 2.
// // for(let color in colors)
// // {
// //     console.log(`My #${Number(color)+1} choice is ${colors[color]} `)
// // }
// // 3.
// suffix = [ "st", "nd", "rd", "th", "th"]
// for(let color in colors)
//     {
//         console.log(`My ${Number(color)+1}${suffix[color]} choice is ${colors[color]} `)
//     }
/*_____________________________________________________________________________________________________________________________________________________*/
// // 🌟 Exercise 3 : Repeat the question
// // 1.
// console.log(typeof(userChoice))

// // 2.
// do
// {
//     userChoice = prompt("Enter a number",0)
// }
// while(userChoice < 10)
/*_____________________________________________________________________________________________________________________________________________________*/

// // 🌟 Exercise 4 : Building Management
// // Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // 2.
// // console.log(building.numberOfFloors)

// // 3.
// // console.log("There are", building.numberOfAptByFloor.firstFloor, "apartments on the 1st floor and",
// //      building.numberOfAptByFloor.thirdFloor, " apartments on the 3rd floor." );

// // 4.
// // console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`)

// // 5.
// if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1])
// {
//     building.numberOfRoomsAndRent.dan[1] = 1200
//     console.log(`dan's rent is ${building.numberOfRoomsAndRent.dan[1]}`)
// }else
// {
//     console.log("The sum of there rent is less than dan's")
// }
/*_____________________________________________________________________________________________________________________________________________________*/

// // 🌟 Exercise 5 : Family

// // 1.
// family = {
//     lastName: "Johnson",
//     members: 3,
//     names: ["Alice", "Bob", "Charlie"]
// };
// // 2.
// for (i in family)
// {
//     console.log(i)
// }

// // 3.
// for (let i in family)
// {
//     console.log(family[i])
// }
// /*_____________________________________________________________________________________________________________________________________________________*/

// // Exercise 6 : Rudolf


// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }
// string = ""

// for (let i in details)
// {
//     string += i + " " + details[i] + " "
// }

// console.log(string)

/*_____________________________________________________________________________________________________________________________________________________*/

// Exercise 7 : Secret Group
// Instructions

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let societyName = ""
nameARR=[]
for (  let index of names) 
    {
        nameARR.push(index[0])
    }

nameARR = nameARR.sort()
societyName = nameARR.join("")
console.log(societyName)
