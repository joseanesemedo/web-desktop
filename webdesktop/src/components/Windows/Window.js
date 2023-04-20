import React, { useRef } from "react";
import Draggable from "react-draggable";
import "./Window.scss";

const Window = ({ title, classes, children, stackNote, windowType, x, y }) => {
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

  // let x, y;

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  // x = getRandomInt(50);
  // y = getRandomInt(700);

  return (
    <Draggable
      bounds=".main"
      handle=".title__bar"
      tabIndex="-1"
      onMouseDown={handleOnClick}
      defaultPosition={{ x: 0, y: 0 }}
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
                <button className="btn " aria-label="close button">
                  <span className="icon">_</span>
                </button>
                <button className="btn " aria-label="close button">
                  <span className="icon">X</span>
                </button>
              </>
            )}

            <button className="btn " aria-label="close button">
              <span className="icon">X</span>
            </button>
          </div>
        </div>
        {children}
      </div>
    </Draggable>
  );
};

export default Window;
