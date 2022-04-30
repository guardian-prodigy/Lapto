import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  if (action.type === "test") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  throw new Error("eror")
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "test" });
    } else {
      console.log("failed");
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
