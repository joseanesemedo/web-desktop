import React from "react";
import Clock from "react-live-clock";
import { menuData } from "./menuData";
import "./Taskbar.scss";
import MenuItems from "./MenuItems";

const Toolbar = ({ setCrtEffect, crtEffect }) => {
  const depthLevel = 0;

  return (
    <div className="taskbar flex__center">
      <ul className="menus">
        {menuData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>

      {/* <button
        className={`btn btn__start flex__center ${
          dropdown ? "btn__active" : ""
        }`}
        type="button"
        aria-label="start button"
        aria-pressed={dropdown ? "true" : "false"}
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <img
          className="start__logo"
          src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
          alt="windows 98 logo"
        />
        <h3>Start</h3>
      </button> */}
      <div className="notification__area flex__center">
        <div className="crt flex__center">
          <span>CRT</span>
          <button
            aria-label="toggle crt effect button"
            aria-pressed={crtEffect}
            className={`btn btn__effect ${
              crtEffect ? "btn__effect--active" : null
            }`}
            onClick={() => setCrtEffect(!crtEffect)}
          ></button>
        </div>
        <div className="date">
          <Clock format={"HH:mm"} ticking={true} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
