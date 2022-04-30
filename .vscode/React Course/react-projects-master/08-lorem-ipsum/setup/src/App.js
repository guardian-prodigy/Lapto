import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault()
    let number = parseInt(count)
    if (count <= 0) {
      number = 1
    }
    if (count > data.length) {
      number = data.length - 1;
    }
    setText(data.slice(0, number))
  };
  return (
    <section className="section-center">
      <h3>tired of text?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" id="amount" name="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((para, index) => {
            return (
              <p key={index}>{para}</p>
            )
          })
        }
      </article>
    </section>
  );
}

export default App;
