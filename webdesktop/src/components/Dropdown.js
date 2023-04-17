import React from "react";

const Dropdown = ({ submenus, dropdown, setDropdown }) => {
  return (
    <div className={`menu__container ${dropdown ? "show" : ""}`}>
      <span>
        <h1>Webdesktop</h1>
      </span>
      <ul className="menu">
        {submenus.map((items, index) => (
          <li className="menu__items" key={index}>
            <button
              className="menu__btn"
              type="button"
              onClick={() => setDropdown(false)}
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
    </div>
  );
};

export default Dropdown;
