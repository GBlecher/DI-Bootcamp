import { useState } from 'react'
import './App.css'


function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])
  const voteForLanguage = (languageName) => {
    setLanguages((OGLanguages)=>
    OGLanguages.map((language =>
      language.name ===languageName 
      ?{...language,votes: language.votes +1} 
      : language
    )))
  }

  return (
    <>
      <div>
        <h1>Vote for Your Favorite Language</h1>
        <ul style={{ padding: 0}}>
          {languages.map(language=>(
            <li key={language.name} 
            style={{
              listStyleType: 'none',
              border: '2px solid black',
              backgroundColor:'beige',
              padding: '10px',
              margin:'5px 0',
              display: 'flex',
              justifyContent: 'space-evenly'
              

            }}>
              <p>{language.votes} </p> <p>{language.name}</p>
              <button onClick={()=> voteForLanguage(language.name)}>click Here</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
