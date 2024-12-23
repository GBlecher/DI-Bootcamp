import React, { useState } from 'react';

const Events = () =>{
    const[inputValue,setInputValue] = useState('')
    const[isToggleOn ,setToggleSwitch] = useState(true)
    const clickMe= ()=>{
        alert("I  was clicked")
    }
    const handleKeyDown = (event) =>{
        if(event.key==='Enter'){
            alert(`The Enter key was pressed, your input is: ${inputValue}`)
           
        }
    }

    return(
        <>
            <button onClick={clickMe}>Click Me!!!</button>
            <input 
                type="text"
                value={inputValue}
                onChange={(event)=> setInputValue(event.target.value)}
                placeholder="Press the ENTER key!"
                onKeyDown={handleKeyDown}
            /><br/>
            
            <button onClick={()=> setToggleSwitch(!isToggleOn)}>
            {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </>
    )
}

export default Events