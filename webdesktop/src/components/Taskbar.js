import React, { useState } from "react";
import Clock from "react-live-clock";
import { menuItems } from "./menuData";
import "./Taskbar.scss";
import Dropdown from "./Dropdown";

const Toolbar = ({ setCrtEffect, crtEffect }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="taskbar flex__center">
      <button
        className="btn btn__start flex__center"
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
        <Dropdown submenus={menuItems} dropdown={dropdown} />
      </button>
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
