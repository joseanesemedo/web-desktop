import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

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
            className="menu__btn"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div>
              <img
                className="menu__item_img"
                src={items.imgURL}
                alt={items.imgAlt}
              />
              {items.title}
            </div>
            {depthLevel > 0 ? <span>&raquo;</span> : null}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            setDropdown={setDropdown}
          />
        </>
      ) : (
        <button className="menu__btn" type="button">
          <div>
            <img
              className="menu__item_img"
              src={items.imgURL}
              alt={items.imgAlt}
            />
            {items.title}
          </div>
        </button>
      )}
    </li>
  );
};

export default MenuItems;
