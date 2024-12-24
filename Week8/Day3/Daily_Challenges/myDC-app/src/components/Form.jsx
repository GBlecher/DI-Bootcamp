import React, { useState } from "react";


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        select: '',
        nuts: false,
        lactose: false,
        vegan: false,
      });

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const select = e.target.select.value;
    const nuts = e.target.nuts.checked;
    const lactose = e.target.lactose.checked;
    const vegan = e.target.vegan.checked;

    setFormData({
        firstName,
        lastName,
        age,
        gender,
        select,
        nuts,
        lactose,
        vegan,
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input placeholder="First Name" name="firstName" required/>
        <br/>
        <input placeholder="Last Name" name="lastName" required/>
        <br/>
        <input placeholder="Age" name="age" required/>
        <br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            required
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            required
          />
          Female
        </label>
        <br/>
        <h3>Select your destination:</h3>
        <select name="select" required>
            <option value="" disabled selected>Please choose a destination</option>
          <option value={"london"}>London</option>
          <option value={"paris"}>Paris</option>
          <option value={"jerusalem"}>Jerusalem</option>
        </select>
        <br/>
        <input type="checkbox" name="nuts"/>
        Nuts free
        <br/>
        <input type="checkbox" name="lactose"/>
        Lactose free
        <br/>
        <input type="checkbox" name="vegan"/>
        Vegan
        <br/>
        <input type="submit" value="Submit"/>
      </form>

      <article>
        <h2>Entered info:</h2>
        <p>
          Your name: {formData.firstName} {formData.astName}
        </p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender === "male" ? "male" : "female"}</p>
        <p>Your destination: {formData.select}</p>
        <br/>
        <strong><p>Your Dietary restrictions:</p>
        </strong>
        <p>**Nuts Free: {formData.nuts ? "Yes" :" No"}</p>
        <p>**Lactose Free: {formData.lactose ? "Yes" :" No"}</p>
        <p>**vegan: {formData.vegan  ? "Yes" :" No"}</p>
      </article>
    </>
  );
};
export default Form;
