import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    if (newPeople.length < 1) {
      console.log("hello");
      return (
        <>
        <div><h4>hello</h4></div>
        </>
      )
    }
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>clear item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
