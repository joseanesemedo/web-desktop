import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import "./MenuItems.scss";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu__items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <img
              className="menu__item_img"
              src={items.imgURL}
              alt={items.imgAlt}
            />
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <a href={items.url}>
          <img
            className="menu__item_img"
            src={items.imgURL}
            alt={items.imgAlt}
          />
          <span>{items.title}</span>
        </a>
      )}
    </li>
  );
};

export default MenuItems;
