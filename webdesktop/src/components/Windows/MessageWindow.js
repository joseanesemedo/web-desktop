import React, { useRef } from "react";
import Draggable from "react-draggable";
import "./MessageWindow.scss";

const MessageWindow = ({ title, children, stackNote }) => {
  const noteRef = useRef();

  function handleOnClick(e) {
    e.preventDefault();
    stackNote(noteRef);
  }

  return (
    <Draggable
      bounds=".main"
      handle=".title__bar"
      tabIndex="-1"
      onMouseDown={handleOnClick}
    >
      <div className="window" ref={noteRef}>
        <div className="title__bar flex__center">
          <div className="title__bar__name flex__center">
            <h1>{title}</h1>
          </div>
          <div className="buttons__container">
            <button className="btn " aria-label="close button">
              <span className="icon">X</span>
            </button>
          </div>
        </div>
        <div className="message__container">
          <div className="message__text">dsdsd</div>
          <div className="buttons">
            <button className="btn btn__action">Yes</button>
            <button className="btn btn__action">No</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MessageWindow;
