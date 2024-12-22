import { Component } from 'react'

class UserFavoriteAnimal extends Component  {
    render(){
        const {favAnimals}  = this.props

        return(
            <ul>
            {favAnimals.map((animal,index)=>(
                <li key={index}>{animal}</li>
            ))}
            </ul>
        )
    }
}

export default UserFavoriteAnimal