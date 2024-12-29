import { useRef,useState } from "react"

const InputCounter =()=> {
const inputRef = useRef('')
const [charCount,setCharCount]= useState(0)

const handleInputChange = () =>{
 if (inputRef.current){
    setCharCount(inputRef.current.value.length)
 }
}


return(
    <>
    <div>
        <div>
        <h3>Counter: {charCount} </h3>
        </div>
        
        
        <input type="text" 
        ref={inputRef} 
        onInput={handleInputChange} 
        placeholder="type something..."/>
        
        
    </div>
    </>
)
}

export default InputCounter