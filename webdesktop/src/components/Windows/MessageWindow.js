import React from "react";
import Window from "./Window";
import "./MessageWindow.scss";

const MessageWindow = ({ title, stackNote }) => {
  return (
    <Window
      classes={"message__window"}
      windowType={"message"}
      title={title}
      stackNote={stackNote}
    >
      <div className="message__container">
        <div className="message__text__container flex__center">
          <img
            className="message__icon"
            src="https://win98icons.alexmeub.com/icons/png/msg_warning_inv-0.png"
            alt=""
          />
          <span className="message__text">Critical error</span>
        </div>
        <div className="buttons">
          <button className="btn btn__action">Yes</button>
          <button className="btn btn__action">Ok</button>
        </div>
      </div>
    </Window>
  );
};

export default MessageWindow;
