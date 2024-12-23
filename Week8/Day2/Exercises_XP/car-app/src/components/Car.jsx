import React, { useState } from "react"
import Garage from "./Garage"
const Car = ({carInfo}) =>{
    const [color,setColor] = useState('red')
    const changeColor = (newColor)=>{
        setColor(newColor)
    }
    return(
        <div>
        <h1>
            This car is a {color} {carInfo.model}
        </h1>
        <button onClick={()=>changeColor('red')}>Red</button>
        <button onClick={()=>changeColor('blue')}>Blue</button>
        <button onClick={()=>changeColor('green')}>Green</button>
        <button onClick={()=>changeColor('yellow')}>Yellow</button>
        <Garage size="small" />
        </div>
    )
}

export default Car