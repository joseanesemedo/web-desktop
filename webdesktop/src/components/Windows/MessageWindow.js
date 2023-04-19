import React from "react";
import Window from "./Window";
import "./MessageWindow.scss";

const MessageWindow = ({ title, stackNote }) => {
  return (
    <Window windowType={"message"} title={title} stackNote={stackNote}>
      <div className="message__container">
        <div className="message__text">dsdsd</div>
        <div className="buttons">
          <button className="btn btn__action">Yes</button>
          <button className="btn btn__action">No</button>
        </div>
      </div>
    </Window>
  );
};

export default MessageWindow;
