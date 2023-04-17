import React from "react";
// import "./Menu.scss";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`menu ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu__items">
          <a href={submenu.url}>
            <img
              className="menu__item_img"
              src={submenu.imgURL}
              alt={submenu.imgAlt}
            />
            <span>{submenu.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
