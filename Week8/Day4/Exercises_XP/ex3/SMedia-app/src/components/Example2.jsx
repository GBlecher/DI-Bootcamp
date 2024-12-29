import React from "react";
import data from "../data.json";

class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: data.Skills,
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.skills.map((skillSet, index) => (
             <div key={index}>
                <h3>{skillSet.Area}</h3>
                <ul>
                    {skillSet.SkillSet.map((skill, skillIndex)=>(
                        <li key={skillIndex}>
                            {skill.Name}
                        </li>
                    ))}
                </ul>

            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
