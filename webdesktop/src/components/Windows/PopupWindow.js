import React from "react";
import Window from "./Window";
import "./PopupWindow.scss";

const PopupWindow = ({ title, children, stackNote, windowType, x, y }) => {
  return (
    <Window
      classes={"popup__window"}
      windowType={windowType}
      title={title}
      stackNote={stackNote}
      x={x}
      y={y}
    >
      <div className="menu__bar"></div>
      <div className="media__container">{children}</div>
      <div className="menu__bar"></div>
    </Window>
  );
};

export default PopupWindow;
