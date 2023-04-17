import "./styles/App.scss";
import Toolbar from "./components/Taskbar/Taskbar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [crtEffect, setCrtEffect] = useState(true);

  return (
    <div
      className="app"
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("Right Click");
      }}
    >
      {crtEffect ? (
        <>
          <div className="noise"></div>
          <div className="overlay"></div>
        </>
      ) : null}
      <Main />
      <Toolbar setCrtEffect={setCrtEffect} crtEffect={crtEffect} />
    </div>
  );
}

export default App;
