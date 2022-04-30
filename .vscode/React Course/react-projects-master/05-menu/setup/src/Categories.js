import React from "react";

const Categories = ({ filter, cats }) => {
  return (
    <div className="btn-container">
      {cats.map((category, index) => {
        return (
          <button key={index}
            className="filter-btn"
            onClick={() => {
              filter(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
