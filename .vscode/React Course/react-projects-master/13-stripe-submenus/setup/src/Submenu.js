import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { submenu, location, text } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${submenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      {sublinks.map((item, index) => {
        sublinks.filter((link) => {
          return console.log(text===link.page);
        })
      })}
    </aside>
  );
};

export default Submenu;
