import React, { useState, useEffect, useRef } from "react";
import Clock from "react-live-clock";
import Menu from "./Menu";
import "./Taskbar.scss";

const Toolbar = ({ setCrtEffect, crtEffect }) => {
  const [openMenu, setOpenMenu] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (openMenu && ref.current && !ref.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [openMenu]);

  return (
    <div className="taskbar flex__center" ref={ref}>
      <button
        className={`btn btn__start flex__center ${
          openMenu && "btn__start__active"
        }`}
        type="button"
        aria-label="start button"
        aria-pressed={openMenu}
        aria-haspopup="menu"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <img
          className="start__logo"
          src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
          alt="windows 98 logo"
        />
        <h1>Start</h1>
      </button>

      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="notification__area flex__center">
        <div className="crt__btn flex__center">
          <span>CRT</span>
          <button
            aria-label="toggle crt effect button"
            aria-pressed={crtEffect}
            className={`btn btn__effect ${crtEffect && "btn__effect--active"}`}
            onClick={() => setCrtEffect(!crtEffect)}
          ></button>
        </div>
        <div className="date flex__center">
          <img
            className="date__img"
            src="https://win98icons.alexmeub.com/icons/png/clock-1.png"
            alt="clock"
          />
          <Clock format={"HH:mm"} ticking={true} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
