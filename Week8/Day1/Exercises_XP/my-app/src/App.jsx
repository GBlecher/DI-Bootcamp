import React from 'react';
import './App.css';
import UserFavoriteAnimals from './components/UserFavoriteAnimal'
import Exercise from './components/Exercise3';


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey'],
}

const App = () => {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  

  return (
    
      <div>
          <h1>Hello World</h1>
          {myelement}
          <p>React is {sum} times better with JSX</p>
          <h3> {user.firstName}</h3>
          <h3> {user.lastName}</h3>
          <UserFavoriteAnimals favAnimals={user.favAnimals} />
          <Exercise />
      </div>
    
  )
}

export default App
