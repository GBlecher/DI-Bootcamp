/* 🌟 Exercise 6 : Change the navbar*/


{/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */}

// 2.
// divElem = document.getElementById("navBar")
// divElem.setAttribute( "id", "socialNetworkNavigation")
// console.log(divElem)

// 3.
let ulELems =  document.getElementsByTagName("ul")
let liElem =document.createElement("li")
liElem.textContent = "Logout"
ulELems[0].appendChild(liElem)

 // 4.
 let firstElem = ulELems[0].firstElementChild
 let lastElem = ulELems[0].lastElementChild

 console.log(firstElem.textContent)
 console.log(lastElem.textContent)
// 4.Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
//  Display the text of each link. (Hint: use the textContent property).
