// /* 🌟 Exercise 1 : Change the article*/


// // 1.
// let heading1 = document.getElementsByTagName("h1")[0]
// console.log(heading1)
// // 2.
// let article1 = document.getElementsByTagName("article")[0] 
// let lastP = article1.lastElementChild
// article1.removeChild(lastP)

// // 3.
// let heading2 = document.getElementsByTagName("h2")[0]
// heading2.addEventListener("click", RespondClick)

// function RespondClick()
// {
//     heading2.style.backgroundColor = "red"
// }

// // 4.
// let heading3 = document.getElementsByTagName("h3")[0]
// heading3.addEventListener("click", DisapearClick)

// function DisapearClick()
// {
//     heading3.style.display = "none"
// }

// // 5.
// let allP = document.getElementsByTagName("p")
// let button1 = document.getElementsByTagName("button")[0]
// button1.addEventListener("click", MakeBold)
// function MakeBold()
// {
//     for(p of allP)
//     {
//         p.style.fontWeight = "bold"
//     }
// }

// // 6.
// heading1.addEventListener("mouseover", RespondMouseOver1)
// let randompix  = Math.floor(Math.random() * 100) + 1;

// function RespondMouseOver1()
// {
//     heading1.style.fontSize = randompix + "px"

// }
// // 7.
// allP[1].addEventListener("mouseover", RespondMouseOver2)
// console.log(allP[1])
// function RespondMouseOver2()
// {
//     allP[1].innerText.style.animation = "fadeOut 2s forwards"

// }

/* _____________________________________________________________________________________________*/
/* 🌟 Exercise 2 : Work with forms */



// // 1.
// let formElem = document.querySelector("form")
// console.log(formElem)

// // 2.
// fNameElem = document.getElementById("fname")
// lNameElem = document.getElementById("lname")
// console.log(fNameElem)
// console.log(lNameElem)
// // 3.
// inputElem1 = document.getElementsByName("firstname")[0]
// inputElem2 = document.getElementsByName("lastname")[0]
// console.log(inputElem1)
// console.log(inputElem2)

// // 4.

// formElem.addEventListener("submit", function (event) {
//     event.preventDefault()

//     let fName = formElem.firstname.value
//     let lName = formElem.lastname.value

//     if (fName === "" || lName === "") {
//         alert("All fields must be filled!")
//     } else {
//         console.log("Form submitted!")
//         console.log("first name:", fName)
//         console.log("last name:", lName)
//     }
//     let ulElem = document.getElementsByClassName("usersAnswer")[0]

//     let liFName = document.createElement("li")
//     liFName.textContent = ` ${fName}`
//     ulElem.appendChild(liFName)

//     let LiLName = document.createElement("li")
//     LiLName.textContent = ` ${lName}`
//     ulElem.appendChild(LiLName)
// })
/*__________________________________________________________________________________________________________________________*/


/* 🌟 Exercise 3 : Transform the sentence */
{/* <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
    <strong>end</strong> you <strong>will</strong> be great Developers!
    <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p> */}

// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems
let paragraph = document.querySelector("p")
function getBoldItems() {
    
    allBoldItems = paragraph.querySelectorAll("strong")
    
}

function highlight() {
       
    for (let item of allBoldItems) 
        { 
            item.style.color = "blue" 
        }

}

function returnItemsToDefault() {

   
    
    for (let item of allBoldItems) 
        { 
            item.style.color = "" 
        }

}

getBoldItems()

paragraph.addEventListener("mouseover", highlight)
paragraph.addEventListener("mouseout", returnItemsToDefault)
