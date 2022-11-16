import logo from "./logo.svg";
import "./App.css";

import { HelloFC, HelloCC, CustomBox } from "lib-react-synergy";

function App() {
  return (
    <div className="App">
      <CustomBox content="Synergy" bgColor="blue" height="200px" width="400px" />
      <HelloFC name="Tu" />
      <HelloCC name="Andres" lastname="Leon" />
    </div>
  );
}

export default App;
