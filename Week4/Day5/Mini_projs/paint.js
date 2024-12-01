

const gridColors = [
    "red", "orange", "yellow", 
    "green", "lime", "cyan", 
    "blue", "purple","maroon",
    "magenta", "pink", "brown", 
    "coral", "navy", "teal",
    "olive", "gold", "silver",
    "gray",  "black", "white"
]

let gridColorsElem = document.getElementById("pallet_container")
let cell
let brushColor = ""
//  create color palette and asign colors
for( let color in gridColors)
{
    
    cell = document.createElement("div")
    cell.style.backgroundColor = gridColors[color]
    cell.classList.add('color_cell')
    gridColorsElem.appendChild(cell)

}
// event for selectiing colors
let colorCell = document.getElementsByClassName("color_cell")
for (cell of colorCell)
{
    cell.style.borderRadius = '10px'
    
    cell.addEventListener("click",function()
        {
            brushColor = this.style.backgroundColor
            console.log(brushColor)
        })

        
    
}

// creating the canvas
let canvasElem = document.getElementById("canvas")
let canvasWidth= canvasElem.clientWidth
let canvasHeight = canvasElem.clientHeight

// creating the table
let canvasTable = document.createElement("table")// create and append  table to canvas
canvasTable.setAttribute("style","border-collapse: collapse; width: 100%; height: 100%;")
canvasElem.appendChild(canvasTable)

let canTabBody = document.createElement("tbody")// create and append tbody to table
canTabBody.style.backgroundColor = "white"
canvasTable.appendChild(canTabBody)

let mousedown =false
for( let row  =0 ; row < canvasHeight/10 ; row++)
{
    let canTRow = document.createElement("tr")
    
    for ( let col  = 0 ; col < canvasWidth/10 ; col++)
        {
            let canTData = document.createElement("td")
            

            canTData.style.width = "10px";
            canTData.style.height = "10px";
            canTData.setAttribute("style"," padding:0; margin:0; border-collapse: collapse")
            canTData.classList.add('canvas_cell')
           

            canTData.addEventListener("mousedown", function(event){
                mousedown = true
                event.target.style.backgroundColor = brushColor
                console.log("mousedown")
            })

            canTData.addEventListener("mouseup",() => {
                mousedown = false
                console.log("mouseup")
            })
           
            canTData.addEventListener("mouseenter", function(event) {
                if (mousedown) {
                    event.target.style.backgroundColor = brushColor; 
                    console.log("mouseover")
                }
            })
            canTRow.appendChild(canTData)

        }
        canTabBody.appendChild(canTRow)
}

document.addEventListener("mouseup",() => {
    mousedown = false
    console.log("global mouseup")
})

clrBtn = document.querySelector("button")
clrBtn.setAttribute('style', 'width: 100%; height: 100%; border-radius: 10px;')
let allCells = document.querySelectorAll(".canvas_cell")
clrBtn.addEventListener("click",function()
{
    for (let cell of allCells)
    {
        cell.style.backgroundColor="white"
        
    }
    console.log("canvas cleared")
})
