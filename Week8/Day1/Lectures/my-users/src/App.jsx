// import User from './components/User'
// import './App.css'
// import users from './users.json'

// function App() {
//   return (
//     <>
     
//       {
//         users.map((item,index) => {
//           return <User key = {index} info={item}/>
         
//       })
//     }
//     </>
//   )
// }

// export default App


import "./App.css";
import { useState } from "react";

function App() {
  // state = {}

  // let users = [{name:'Jonn', id:1}]
  /**
   * state - users
   * setState - setUsers
   */
  const [users, setUsers] = useState([{id:1, name:'aaa'}]);
const [textInput,setTextInput] = useState("abc")
  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      
      setUsers(data)
    
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     console.log(users);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const handleInput = (e) => {
    console.log("hello from input", e.target.value);
    setTextInput(e.target.value)
  };

  console.log(users);
  return (
    <>
      <h2>Events,State,Class vs. Function</h2>
      <button onClick={() => handleClick()}>Click!</button>
      <input onChange={(e) => handleInput(e)} placeholder='Search...' />
      <h2>Users</h2>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <h2>Display here the input value</h2>
      <h3>{textInput}</h3>
    </>
  );
}

export default App;