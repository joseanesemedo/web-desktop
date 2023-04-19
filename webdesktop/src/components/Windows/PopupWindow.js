import React from "react";
import Window from "./Window";
import "./PopupWindow.scss";

const PopupWindow = ({ title, children, stackNote, windowType }) => {
  return (
    <Window
      classes={"popup__window"}
      windowType={windowType}
      title={title}
      stackNote={stackNote}
    >
      <div className="menu__bar"></div>
      <div className="media__container">{children}</div>
      <div className="menu__bar"></div>
    </Window>
  );
};

export default PopupWindow;
