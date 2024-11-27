/*🌟 Exercise 1: Timer*/

// PART I

// setTimeout(function()
// {
//     alert("Hello World")
// },2000)

// PART II
// setTimeout(function()
// {
//     newParagraph = document.createElement("p")
//     newParagraph.textContent = "Hello World"
//     divElem = document.getElementById("container")
//     divElem.appendChild(newParagraph)
// },2000)

// PART III

// intervalId = setInterval(function()
// {
//     let newParagraph = document.createElement("p")
//     newParagraph.textContent = "Hello World"
//     divElem = document.getElementById("container")
//     divElem.appendChild(newParagraph)
// },2000)

// 
// let clearBtn = document.getElementById("clear")
// clearBtn .addEventListener("click", function() {
//     clearInterval(intervalId)
// })


// 4.
// paragraphCount=0
// intervalId = setInterval(function()
// {   
//     if (paragraphCount < 5)
//     {    
//         let newParagraph = document.createElement("p")
//         newParagraph.textContent = "Hello World"
//         divElem = document.getElementById("container")
//         divElem.appendChild(newParagraph)
//         paragraphCount++
//     } else
//     {
//         clearInterval(intervalId)
//     }
// },2000)
/*_____________________________________________________________________________________________________________ */


/*🌟 Exercise 2 : Move the box*/


function myMove()
{
    let  elem = document.getElementById("animate")
    let animateWidth = elem.offsetWidth
    let containerWidth = document.getElementById("container").clientWidth
    let position = 0

    intervalId = setInterval(function(){
    if (position >= containerWidth - animateWidth)
    {
        clearInterval(intervalId)   
    } else
    {
        position ++
        elem.style.left = position + "px"
    }
    },1)

}






