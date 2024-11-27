function generateStory()
{
    let noun = document.getElementById("noun").value
    let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value
    let verb = document.getElementById("verb").value
    let place = document.getElementById("place").value

    if(!noun || !adjective || !person || !verb || !place)
    {    
        alert("All fields must be filled!")
        return
    }
    let story = `Once upon a time in ${place}, there was a ${adjective} ${noun} who loved to ${verb}. One day, ${person} joined in on the fun!`

    document.getElementById("story").textContent = story
}


submitElem = document.getElementById("libform")
submitElem.addEventListener("submit",function(event)
{
    event.preventDefault()
    generateStory()
})


