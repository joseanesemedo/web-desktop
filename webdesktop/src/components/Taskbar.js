import React from "react";
import Clock from "react-live-clock";
import "./Taskbar.scss";

const Toolbar = ({ setEffect, effect }) => {
  return (
    <div className="toolbar">
      <button className="btn btn__start" type="button" aria-haspopup="menu">
        <img
          className="start__logo"
          src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"
          alt=""
        />
        <h3>Start</h3>
      </button>
      <div className="notification__area">
        <button
          className={`btn btn__effect ${effect ? "btn__effect--active" : null}`}
          onClick={() => setEffect(!effect)}
        ></button>
        <div className="date">
          <Clock format={"HH:mm"} ticking={true} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
