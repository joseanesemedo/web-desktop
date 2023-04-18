import React from "react";
import "./Main.scss";
// import { useGlitch } from "react-powerglitch";

const Main = () => {
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
    <div className="main">
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
    </div>
  );
};

export default Main;
