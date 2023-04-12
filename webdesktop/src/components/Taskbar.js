import React from "react";
import Clock from "react-live-clock";
import "./Taskbar.scss";

const Toolbar = ({ setCrtEffect, crtEffect }) => {
  return (
    <div className="taskbar flex__center">
      <button
        className="btn btn__start flex__center"
        type="button"
        aria-pressed="false"
        aria-haspopup="menu"
        aria-label="start button"
      >
        <img
          className="start__logo"
          src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
          alt=""
        />
        <h3>Start</h3>
      </button>
      <div className="notification__area flex__center">
        <div className="crt flex__center">
          <span>CRT</span>
          <button
            aria-label="toggle crt effect button"
            type="button"
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
