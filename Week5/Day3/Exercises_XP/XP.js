/*🌟 Exercise 1 : Location*/
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// output>> `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`

/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 2: Display Student Info*/

// Instructions
function displayStudentInfo(objUser){
    const {first,last} =objUser
    return `'Your full name is ${first} ${last}`
 }
 
 console.log( displayStudentInfo({first: 'Elie', last:'Schoppik'}))
 
 /*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 3: User & id*/
 
// Instructions
// Using this object 

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// 1.
const users = { user1: 18273, user2: 92833, user3: 90315 }
usersArr = Object.entries(users)
// 2.
modUsersArr = Object.entries(users).map(([user, id]) => [user, id*2])

/*___________________________________________________________________________________________________________________________*/
/*Exercise 4 : Person class*/

// >>> object

/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 5 : Dog class*/

// >>> Number 2


/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 6 : Challenges*/

// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}


// 1.
// >>> false
// >>> false


2

// >>>4
// >>>4
// >>>5

class Animal 
{
    constructor(name,type,color)
    {
        this.name = name
        this.type = type
        this.color = color
    }
}


class Mammal extends Animal 
{
    sound(animalSound) 
    {
        return `THis is a ${this.name}, a ${this.color} ${this.type}, and it makes the sound : ${animalSound}`
    }
}

const farmerCow = new Mammal("Hefer", "cow", "red")
console.log(farmerCow.sound('MoOooshiach Now!!'))