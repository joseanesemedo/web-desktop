import "./App.scss";
import Toolbar from "./components/Toolbar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [effect, setEffect] = useState(true);

  return (
    <div className="app">
      {effect ? (
        <>
          <div className="noise"></div>
          <div className="overlay"></div>
        </>
      ) : null}

      <Main />
      <Toolbar />
    </div>
  );
}

export default App;
