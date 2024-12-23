
import { useState } from "react";
const Phone = () =>{
const[brand,setbrand]=useState('Samsung')
const[model,setModel]=useState('Galaxy S20')
const[color,setColor]=useState('black')
const[year,setYear]=useState('2020')

const changeColor = ()=> {
    setColor('blue')
}
return(
    <div>
    <h2>My Phone is a {brand}</h2>
    <p> It is a {color} {model}from {year}</p>
    <button onClick={changeColor}>Change color</button>
    </div>
)


}

export default Phone