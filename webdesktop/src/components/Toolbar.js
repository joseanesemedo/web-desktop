import React from "react";
import "./Toolbar.scss";
import Clock from "react-live-clock";

const Toolbar = () => {
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
      <div className="date">
        <Clock format={"HH:mm"} ticking={true} timezone={"EU"} />
      </div>
    </div>
  );
};

export default Toolbar;
