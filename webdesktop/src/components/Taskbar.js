import React, { useState, useEffect, useRef } from "react";
import Clock from "react-live-clock";
import Dropdown from "./Dropdown";
import { menuData } from "./menuData";
import "./Taskbar.scss";

const Toolbar = ({ setCrtEffect, crtEffect }) => {
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
    <div className="taskbar flex__center">
      <button
        ref={ref}
        className={`btn btn__start flex__center ${
          dropdown ? "btn__active" : ""
        }`}
        type="button"
        aria-label="start button"
        aria-pressed={dropdown ? "true" : "false"}
        aria-haspopup="menu"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <img
          className="start__logo"
          src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
          alt="windows 98 logo"
        />
        <h3>Start</h3>
      </button>

      <div>
        <Dropdown
          submenus={menuData}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
      </div>

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
