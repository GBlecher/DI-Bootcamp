/*🌟 Exercise 1 : Colors*/

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let index = 1
// for( color in colors)
// {
//     console.log(`${index}# choice is ${colors[color]}`)
//     index ++
// }

// const containsViolet = colors.some(color => color === "Violet" )? console.log("Yeah"): console.log("No...")

/*________________________________________________________________________________________________________________________________________________*/
/*🌟 Exercise 2 : Colors #2*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
let suffix = ""

colors.forEach((color, index) => {
    index == 0? suffix = ordinal[1]: 
    index == 1? suffix = ordinal[2]:
    index == 2? suffix = ordinal[3]:  
    suffix = ordinal[0]
    console.log(`${index +1}${suffix} choice is ${color}`)
    
})

/*________________________________________________________________________________________________________________________________________________*/
/*🌟 Exercise 3 : Analyzing*/

// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ------2------
// const country = "USA";
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// 1.
['bread', "carrot", "potato", 'chicken', "apple", "orange"]
// 2.
['U', 'S', 'A']
/*________________________________________________________________________________________________________________________________________________*/
/*🌟 Exercise 4 : Employees*/
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let newArr= users.map( user => `Hello ${user.firstName}`)

console.log(newArr);

let fullStackResidents = users.filter(user => user.role === 'Full Stack Resident')
let lastNAmeArr = fullStackResidents.map(fullStackResidents => fullStackResidents.lastName )
console.log(lastNAmeArr);

/*________________________________________________________________________________________________________________________________________________*/
/*🌟 Exercise 5 : Star Wars*/


 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

epicString = epic.reduce((acc, val)=>
{
    return acc + " " + val
})

/*________________________________________________________________________________________________________________________________________________*/
/*🌟 Exercise 6 : Employees #2*/

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

passed = students.filter(students => students.isPassed === true )
console.log(passed);

passed.forEach((student,index)=>
{
    console.log (`“Good job ${student.name}, you passed the course in ${student.course} `)
} )