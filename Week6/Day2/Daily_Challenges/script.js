const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const form = document.getElementById("gif_form")
const gifContainer = document.getElementById("gif_container")
const delAllBtn = document.getElementById("delete_all")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    let category = document.getElementById("gif_cat").value
    let gifURL = await fetchRandomGif(category)

    if (gifURL) {
        displayGif(gifURL)
    }
})

async function fetchRandomGif(category) {
    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}&rating=g`)
    
        if(response.ok){
            const data = await response.json()
            return data.data.images.original.url
        }else{
            throw new Error(response.status)
        }
    }
    catch (error){
        console.log(error)
    }
    
    
}

function displayGif(gifUrl) {
    const gifDiv = document.createElement("div")
    const gifImg = document.createElement("img")
    const delBtn = document.createElement("button")

    gifImg.src = gifUrl
    delBtn.textContent = 'DELETE GIF'

    delBtn.addEventListener("click", () => {
        gifDiv.remove()
    })

    gifDiv.appendChild(gifImg)
    gifDiv.appendChild(delBtn)
    gifContainer.appendChild(gifDiv)
}

delAllBtn.addEventListener("click", ()=> {
    gifContainer.remove()
})