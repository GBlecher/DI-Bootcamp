import User from './components/User'
import './App.css'
import users from './users.json'

function App() {
  return (
    <>
     
      {
        users.map((item,index) => {
          return <User key = {index} info={item}/>
         
      })
    }
    </>
  )
}

export default App
