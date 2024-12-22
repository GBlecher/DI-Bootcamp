// PART I:

// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.

import { Component } from 'react'

class Exercise extends Component {
    render(){
        return(
        
            <div>
                <h1>THis is a Header</h1>
                <p>This is a paragragh</p>
                <a href="https://pointerpointer.com/">This is a link</a>
                <form >
                    <label htmlFor="">This is a form</label>
                    <input type="text" />
                    <button type = "submit">Submit</button>
                </form>
                <img src="https://monomousumi.com/wp-content/uploads/react.png" alt="something or other" />
                <ul>This is a List
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                </ul>
            </div>
        )
    }
    
}

export default Exercise