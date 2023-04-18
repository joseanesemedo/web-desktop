import React from "react";
import Draggable from "react-draggable";
import "./Window.scss";

const Window = ({ title, children, windowType }) => {
  function handleOnClick(e) {
    e.preventDefault();
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
    >
      <div className="window">
        <div className="title__bar">
          <div className="title__bar__name flex__center">
            <img src={windowImg} alt="" className="icon" />
            <h1>{title}</h1>
          </div>
        </div>
        <div className="menu__bar"></div>
        <div className="media__container">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
