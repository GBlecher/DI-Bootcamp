import { useState, useEffect } from "react"
const Color =()=> {
    const [favoriteColor ,setFavoriteColor ] = useState('red')
    useEffect(() => {
        alert('useEffect Reached')
      }, []);

      const changeColor = () =>{
        setFavoriteColor('blue')
      }
    return(
        <div>
             <h1>My Favorite Color Is {favoriteColor}</h1>
             <button onClick={changeColor}>Change to blue</button>
        </div>
       
    )
}
export default Color