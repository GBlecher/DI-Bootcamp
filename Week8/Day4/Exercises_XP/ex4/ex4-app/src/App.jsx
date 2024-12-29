import React from 'react'

import './App.css'

function App() {

  const postData = async () => {
    const url = "https://webhook.site/642f4740-ad4a-4cee-8807-7be100679185"

    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    try {
      const res = await fetch(url,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!res.ok) {
        throw new Error("Error fetching API");
        
      }
      const jsonRes = await res.json()
      console.log('Response from server:', jsonRes)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <button onClick={postData}>Press me to post some data</button>
     
    </>
  )
}

export default App
