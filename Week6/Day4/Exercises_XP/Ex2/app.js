import { people } from "./data.js";

function avgAge() {
    let sum = 0
    people.forEach(person => {
        sum += person.age
    })
    const count = people.length

    return count> 0? sum/count : 0
}
console.log(`Average age: ${avgAge()}`);
