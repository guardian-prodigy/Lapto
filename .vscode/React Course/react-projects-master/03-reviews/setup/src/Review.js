import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);
  if (index > people.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = people.length - 1;
  }
  const Random = () => {
    let RandomIndex = Math.floor(Math.random() * people.length);
    if (RandomIndex === index) {
      RandomIndex = index + 1;
    }
    if (index > people.length) {
      return 0;
    }
    setIndex(RandomIndex);
  };
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={Random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
