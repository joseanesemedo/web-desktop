import React from "react";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((items, index) => (
        <li className="menu__items" key={index}>
          <button
            className="menu__btn"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={() => setDropdown((prev) => !prev)}
          >
            <div>
              <img
                className="menu__item_img"
                src={items.imgURL}
                alt={items.imgAlt}
              />
              {items.title}
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
