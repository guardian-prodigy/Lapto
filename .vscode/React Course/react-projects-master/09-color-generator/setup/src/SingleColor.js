import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, SetAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      SetAlert(false);
    }, 2000);
    return () => clearTimeout(timeout)
  });
  return (
    <article
      onClick={() => {
        SetAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
      }}
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex ? hex : `#${hexColor}`}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
