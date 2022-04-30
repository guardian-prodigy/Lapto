import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [pa, setP] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setP(!pa)}>
          {pa ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{pa ? info : ""}</p>
    </article>
  );
};

export default Question;
