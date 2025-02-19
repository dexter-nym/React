import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#121215");

  function changeColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color {color}</p>
      </div>
      <label>Select a color</label>
      <input type="color" value={color} onChange={(e) => changeColor(e)} />
    </div>
  );
}
export default ColorPicker;
