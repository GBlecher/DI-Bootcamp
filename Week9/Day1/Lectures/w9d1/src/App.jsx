import { useState } from 'react'
import Display from './component/Display'
import Action from './component/Action'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
            <Display count={count} />
            <Action setCount={setCount} />
        </div>

    </>
  )
}

export default App


/**
 Instructions:

1. App Component:
Create the App component with a count state starting at 0.
Add a setCount function to update the count.
Pass count and setCount as props to child components.

2. Display Component:

Create Display to show the current count.
Inside it, add ShowCounter, which receives count as a prop and displays it.

3. Action Component:
Create Action to hold a Button component.
The Button will have an onClick handler that calls setCount 
to increase the count.

App - setState - count, setCount
 |_ Display
         |_ ShowCouter - count
 |_ Action
        |_Button - => add
 
 */
