import React, { useRef } from "react";
import Draggable from "react-draggable";
import "./Window.scss";

const Window = ({ title, classes, children, stackNote, windowType }) => {
  const noteRef = useRef();

  function handleOnClick(e) {
    e.preventDefault();
    stackNote(noteRef);
    console.log(e);
  }

  const types = [
    {
      type: "image",
      src: "https://win98icons.alexmeub.com/icons/png/paint_file-2.png",
    },
    {
      type: "text",
      src: "https://win98icons.alexmeub.com/icons/png/template_empty-0.png",
    },
    {
      type: "music",
      src: "https://win98icons.alexmeub.com/icons/png/cd_audio_cd_a-3.png",
    },
  ];

  const windowImg = types.find((t) => t.type === windowType)?.src;

  return (
    <Draggable
      bounds=".main"
      handle=".title__bar"
      tabIndex="-1"
      onMouseDown={handleOnClick}
      positionOffset={{ x: "50%", y: "50%" }}
    >
      <div className={`window ${classes}`} ref={noteRef}>
        <div className="title__bar flex__center">
          <div className="title__bar__name flex__center">
            {windowType === "message" ? null : (
              <img src={windowImg} alt="" className="icon" />
            )}
            <h1>{title}</h1>
          </div>
          <div className="buttons__container">
            {windowType === "message" ? null : (
              <>
                <button className="btn " aria-label="minimize button">
                  <img
                    src="https://assets.codepen.io/7237686/minimize.png?format=auto"
                    alt="minimize window"
                    className="icon"
                  />
                </button>
                <button className="btn " aria-label="maximize button">
                  <img
                    src="https://assets.codepen.io/7237686/maximize_1.png?format=auto"
                    alt="maximize window"
                    className="icon"
                  />
                </button>
              </>
            )}

            <button className="btn " aria-label="close button">
              <img
                src="https://assets.codepen.io/7237686/close.png?format=auto"
                alt="close window"
                className="icon"
              />
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Window;
