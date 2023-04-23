import React from "react";

const Menu = ({ openMenu, setOpenMenu }) => {
  const handleOnClick = (windownName) => {
    console.log(windownName);
    setOpenMenu(false);
  };

  return (
    <div className={`menu__container ${openMenu && "show"}`}>
      <span>
        <h1>Windows 99</h1>
      </span>
      <ul className="menu">
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("documents")}
          >
            <img
              className="menu__item_img"
              src="https://assets.codepen.io/7237686/folder.png?format=auto"
              alt=""
            />
            Documents
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("blog")}
          >
            <img
              className="menu__item_img"
              src="https://win98icons.alexmeub.com/icons/png/shell_window6-0.png"
              alt=""
            />
            Blog
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("explorer")}
          >
            <img
              className="menu__item_img"
              src="https://win98icons.alexmeub.com/icons/png/world-3.png"
              alt=""
            />
            Explorer
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("???")}
          >
            <img
              className="menu__item_img"
              src="https://win98icons.alexmeub.com/icons/png/msagent_file-1.png"
              alt=""
            />
            ???
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("gallery")}
          >
            <img
              className="menu__item_img"
              src="https://assets.codepen.io/7237686/gallery.png?format=auto"
              alt=""
            />
            Gallery
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("help")}
          >
            <img
              className="menu__item_img"
              src="https://www.windows93.net/c/sys/skins/w93/help.png"
              alt=""
            />
            Help
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("about")}
          >
            <img
              className="menu__item_img"
              src="https://win98icons.alexmeub.com/icons/png/help_question_mark-0.png"
              alt=""
            />
            About
          </button>
        </li>
        <li className="menu__items">
          <button
            className="menu__item"
            type="button"
            onClick={() => handleOnClick("fullscreen")}
          >
            <img
              className="menu__item_img"
              src="https://assets.codepen.io/7237686/pc.png?format=auto"
              alt=""
            />
            Fullscreen
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
