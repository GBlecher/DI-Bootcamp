

/* 🌟 Exercise 1 : Find the numbers divisible by 23*/

// function displayNumbersDivisible(divisor)
// {
//     var sum = 0
//     for (let i = 0; i<=500; i++)
//     {
//         if (i % divisor === 0 )
//         {
//             sum += i
//             console.log(i)
//         }
//     }
//     console.log(sum)
// } 

// divisor = prompt("Choose a divisor: ")
// displayNumbersDivisible(divisor)
/*_____________________________________________________________________________________________________*/


/* 🌟 Exercise 2 : Shopping List*/

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// shoppingList = ['banana', 'orange','apple']


// function myBill()
// {
//     let totalPrice = 0
//     let outOfStockPrices= []
//     for ( let item of shoppingList )
//     {
    
//         if ( item in stock && stock[item]> 0 )
//         {
//             totalPrice += prices[item]
//             stock[item] -= 1
//         }
//         else
//        {
//         outOfStockPrices.push(`${item} is out of stock, its price is ${prices[item]}`)
        
//        }
//     }
//     console.log(outOfStockPrices.join('\n'));
//    return totalPrice
// }
// const total = myBill()

// console.log(`Total of basket is : ${total}`)
// console.log(stock)

/*_____________________________________________________________________________________________________*/
/* 🌟 Exercise 4 : Vacations Costs*/
// 
// 1.
// function hotelCost()
// {
//     while (true)
//         {
//             try
//                 {
//                     const numNights = prompt(" how many nights would you like to stay?")

//                     if (numNights <= 0 || isNaN(numNights))
//                     {
//                         throw("must enter valid number")
//                     }
//                     else
//                     {
//                         let cost = 140 * numNights
//                         return cost
//                     }
//                 }
//             catch
//             {
//                 continue
//             }   
//         }
// }





// // 2.
// function planeRideCost()
// {
    
//     while (true)
//                 {
//                     try
//                         {
//                             const destination = prompt("Enter destination:")
        
//                             if (destination <= 0 || !isNaN(destination))
//                             {
//                                 throw("must enter valid number")
//                             }
//                             else
//                             {
//                                 var price
//                                 if(destination.toLowerCase() == 'london') 
//                                 {
//                                     price = 183
//                                     return price
//                                 }else if(destination.toLowerCase() == 'paris')
//                                 {        
//                                     price = 220
//                                     return price
//                                 }else
//                                 {
//                                     price = 300
//                                     return price
//                                 }

                                    
//                             }
                            
//                         }
//                     catch
//                     {
//                         continue
//                     }   
//                 }
// }


// // 3.

// function rentalCarCost()
// {
//     while (true)
//         {
//             try
//                 {
//                     const numDays = prompt(" how many days would you like to rent the car?")

//                     if (numDays <= 0 || isNaN(numDays))
//                     {
//                         throw("must enter valid number")
//                     }
//                     else
//                     {
//                         let cost = 40 * numDays
//                         if (numDays < 10)
//                         {
//                             return cost
//                         }
//                         else 
//                         {
//                             cost = 0.95 * cost
//                             return cost
//                         }
//                     }
//                 }
//             catch
//             {
//                 continue
//             }   
//         }
// }





// function totalVacationCost()
// {
//     let hotelPrice = hotelCost()
//     let carPrice = rentalCarCost()
//     let desPrice =planeRideCost()
//     return `The car cost: $${carPrice}, the hotel cost: $${hotelPrice}, the plane tickets cost: $${desPrice}`
// }

// totalprice = totalVacationCost()
// console.log(totalprice)

/*_____________________________________________________________________________________________________*/


/* 🌟 Exercise 5 : Users*/


// // 2._______________>>
// // 2.1 
// let elem = document.getElementById("container")
// console.log(elem)

// //2.2
const elem2 = document.querySelectorAll("li")
 for ( let item of elem2 )
 {
    if (item.textContent === "Pete")
    {
        item.textContent = "Richard"
    }
 }

// // 2.3
// const secUl = document.getElementsByTagName("ul")[1]
// const SecIl = secUl.getElementsByTagName("li")[1]
// secUl.removeChild(SecIl)

// // 2.4
// ulELems = document.getElementsByTagName("ul")
// for( elem of ulELems)
// {
//     liElem = elem.querySelector("li")
//     liElem.textContent = "Gilan"
// }


// // 3._______________>>
// 3.1
// const ulELems = document.getElementsByTagName("ul")
// for( let elem of ulELems)
// {
//     elem.classList.add("student_list")
//     console.log(elem)
// }
// // 3.2
// firstUl = document.getElementsByTagName("ul")
// firstUl[0].classList.add("university")
// firstUl[0].classList.add("attendance")
// console.log(firstUl[0])

// // 4._______________>>
// 4.1
let elem4 = document.getElementById("container")
elem4.setAttribute('style', "background-color:blue; padding: 100px")

// 4.2
let ulELems = document.getElementsByTagName("ul")
for( let elem of ulELems)
{
    let liElem = elem.querySelectorAll("li")
    for (let elem of liElem)
    {
        if( elem.textContent == "Dan")
        {
            elem.style.display = 'none'
        }
    } 
}

// 4.3

for( elem of ulELems)
{
    let liElem = elem.querySelectorAll("li")
    for (let elem of liElem)
    {
        if( elem.textContent == "Richard")
        {
            elem.style.border = "5px solid black"
        }
    } 
}

// 4.4
bodyElem = document.getElementsByTagName("body")[0]
bodyElem.style.fontSize = "20px"
/*_____________________________________________________________________________________________________*/




