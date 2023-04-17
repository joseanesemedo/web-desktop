import React from "react";

const Menu = ({ menuData, dropdown, setDropdown }) => {
  const handleOnClick = () => {
    console.log("sdsd");
    setDropdown(false);
  };

  return (
    <div className={`menu__container ${dropdown ? "show" : ""}`}>
      <span>
        <h1>Webdesktop</h1>
      </span>
      <ul className="menu">
        {menuData.map((items, index) => (
          <li className="menu__items" key={index}>
            <button className="menu__btn" type="button" onClick={handleOnClick}>
              <img
                className="menu__item_img"
                src={items.imgURL}
                alt={items.imgAlt}
              />
              {items.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
