import React, { useState } from "react";
import "./Main.scss";
import PopupWindow from "./Windows/PopupWindow";
import MessageWindow from "./Windows/MessageWindow";
// import { useGlitch } from "react-powerglitch";

const Main = () => {
  const [zIndex, setZindex] = useState(1);

  const stackNote = (ref) => {
    ref.current.style.zIndex = zIndex;
    setZindex((zIndex) => zIndex + 1);
  };

  // const glitch = useGlitch({
  //   createContainers: true,
  //   hideOverflow: false,
  //   timing: {
  //     duration: 3250,
  //     iterations: 1,
  //   },
  //   glitchTimeSpan: {
  //     start: 0,
  //     end: 1,
  //   },
  //   shake: {
  //     velocity: 15,
  //     amplitudeX: 0.2,
  //     amplitudeY: 0.2,
  //   },
  //   slice: {
  //     count: 6,
  //     velocity: 15,
  //     minHeight: 0.02,
  //     maxHeight: 0.15,
  //     hueRotate: true,
  //   },
  //   pulse: false,
  // });

  return (
    <main className="main">
      <div className="section__icons">
        {/* <div className="test" ref={glitch.ref}>
          <img
            className="test__img"
            src="https://www.windows93.net/c/sys/skins/w93/documents.png"
            alt=""
          />
          <span>Documents</span>
        </div> */}
      </div>
      <PopupWindow stackNote={stackNote} title={"Kirby"} windowType={"image"}>
        <img
          src={
            "https://i.pinimg.com/originals/34/73/40/347340d292eb9a2a2f69dcb74d0fadaf.gif"
          }
          alt=""
        />
      </PopupWindow>
      <PopupWindow stackNote={stackNote} title={"Kirby"} windowType={"image"}>
        <img
          src={
            "https://i.pinimg.com/originals/54/93/75/549375f924b4929c79fea5f552c98f38.gif"
          }
          alt=""
        />
      </PopupWindow>
      <MessageWindow
        stackNote={stackNote}
        title={"Base error"}
        windowType={"image"}
      >
        dsd
      </MessageWindow>
    </main>
  );
};

export default Main;
