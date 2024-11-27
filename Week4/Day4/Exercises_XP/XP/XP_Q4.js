// 🌟 Exercice 4 : Volume of a sphere



let formElem = document.querySelector("form")
console.log(formElem)



formElem.addEventListener("submit", function (event) {
    event.preventDefault()

    
    let radiusVal = formElem.radius.value
    let volumeVal = (4/3) * (radiusVal**3)*Math.PI

    formElem.volume.value  = volumeVal
})