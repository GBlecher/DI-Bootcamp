/*🌟 Exercise 1 : Comparison*/
// function compareToTen(num)
// {
//     return new Promise((resolve, reject) => {
//         if (num <= 10)
//         {
//             resolve(" num is less or equal to 10")
//         }else
//         {
//             reject(" num is greater than 10")
//         }
//     })
// }

// compareToTen(8)
// .then(result => console.log(result))
// .catch(error => console.log(error))
// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))


/*___________________________________________________________________________________________________*/
/*🌟 Exercise 2 : Promises*/
// let timedPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 4000);
// }).then(result => console.log(result))
// .catch(error => console.log(error) )


/*___________________________________________________________________________________________________*/
/*🌟 Exercise 3 : Resolve & Reject*/


resolvedPromise = Promise.resolve(3)
.then(result => console.log(`Resolved with ${result}`))


rejectedPromise = Promise.reject("Boo!")
.catch(error => console.log(`Rejected with ${error}`))