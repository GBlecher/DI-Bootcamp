import React from "react";
import data from "../data.json";

class Example3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: data.Experiences,
    };
  }
  render() {
    return (
      <div>
        {this.state.experiences.map((experience, index) => (
          <div key={index}>
            <img src={experience.logo} /><br />
            <a href={experience.url}>{experience.companyName}</a>
            {experience.roles.map((role,roleIndex)=>(
                <div key={roleIndex}>
                    <h3>{role.title}</h3>
                    <p>{role.startDate} {role.location}</p>
                    <p>{role.description}</p>
                </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
