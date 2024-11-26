// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?


const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];
const planetColors = [
    "gray",       
    "yellow",     
    "blue",       
    "red",        
    "orange",     
    "gold",       
    "lightblue",  
    "darkblue"    
];


var element
var planetList = document.getElementsByClassName("listPlanets")[0]
for (planet in planets)
{
    element=document.createElement("div")
    element.textContent = planets[planet]
    element.className = "planet"
    element.style.backgroundColor = planetColors[planet]
    planetList.appendChild(element)
    console.log(element)
}






