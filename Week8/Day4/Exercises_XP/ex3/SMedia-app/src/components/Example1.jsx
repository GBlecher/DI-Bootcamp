import React from "react";
import data from "../data.json";

class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialMedias: data.SocialMedias,
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.socialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li> 
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
