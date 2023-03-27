import "./App.scss";
import Toolbar from "./components/Toolbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <div className="overlay"></div>
      <Main />
      <Toolbar />
    </div>
  );
}

export default App;
