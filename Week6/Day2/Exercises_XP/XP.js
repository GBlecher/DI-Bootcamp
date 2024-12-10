/*🌟 Exercise 1 : Giphy API*/

// const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

// fetch(apiUrl)
// .then(response => {
//     if (response.ok){
//         return response.json()
//     } else{
//         throw new Error(response.status)
//     }
// })
// .then(data => {console.log(data)})
// .catch(error => {console.log(error)})

/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 2 : Giphy API*/
// const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
// const keyword = "sun"
// const limit = 10
// const offset = 2
// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${keyword}&limit=${limit}&offset=${offset}&rating=g&api_key=${api_key}`

// fetch(apiUrl)
// .then(response => {
//     if (response.ok){
//         return response.json()
//     } else{
//         throw new Error(response.status)
//     }
// })
// .then(data => {console.log(data)})
// .catch(error => {console.log(error)})

/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 3 : Async function*/

// async function fetchStarship() {
//     const apiUrl = "https://www.swapi.tech/api/starships/9/"
//     try{
//         const response = await fetch(apiUrl)
//         if (response.ok){
//             let objectStarWars = await response.json()
//             console.log(objectStarWars.result)
//         }else{
//             throw new Error(response.status)
//         }     
//     }catch (error)
//     {
//         console.log(error)
//     }
// }


// fetchStarship()
/*___________________________________________________________________________________________________________________________*/
/*🌟 Exercise 4: Analyze*/

// >> calling
// >> *wait 2 seconds*
// >> resolved