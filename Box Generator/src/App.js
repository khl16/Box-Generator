import React, { useState } from "react";
import './App.css';
import ColorfulComponent from "./components/ColorfulComponent";
import { useInputHook } from "./hooks/useInputHook";

function App() {
  const [colorsList, setColorsList] = useState([])
  const inputColor = useInputHook();
  const myInput = useInputHook();

  function addColor(e) {
    setColorsList([...colorsList, inputColor.value])
  }
  function handleRemove(color) {
    setColorsList(colorsList.filter(c => color !== c))
  }
  return (
    <div className="App">
      <br />
      <div>
        <label>Enter color:&nbsp;</label>
        <input {...inputColor} />&nbsp;
        <button onClick={addColor}>Add Color</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colorsList.map((color, index) => <ColorfulComponent key={color} color={color} handleRemove={() => handleRemove(color)} />)}
      </div>
    </div>
  );
}

export default App;
