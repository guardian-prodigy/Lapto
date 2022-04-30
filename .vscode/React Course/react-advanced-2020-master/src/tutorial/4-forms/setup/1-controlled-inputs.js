import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, SetFirstName] = useState("");
  const [Email, SetEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && Email) {
      const person = {id: new Date().getTime().toString(),  firstName, Email };
      setPeople([...people, person]);
      SetFirstName('')
      SetEmail('')
    }
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => SetFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="firstName"
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {
          people.map((person) => {
            const { id, firstName, Email } = person;
            return (
              <div key={id} className="item">
                <h4>{ firstName}</h4>
                <p>{ Email}</p>
              </div>
            )
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
