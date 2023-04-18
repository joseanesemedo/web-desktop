import React from "react";
import Draggable from "react-draggable";
import "./Window.scss";

const Window = () => {
  function handleOnClick(e) {
    e.preventDefault();
  }

  return (
    <Draggable bounds=".main" tabIndex="-1" onMouseDown={handleOnClick}>
      <div className="window">sdd</div>
    </Draggable>
  );
};

export default Window;
