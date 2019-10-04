import React, { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("ffffff");
  const [backgroundColor, setBackgroundColor] = useState("000000");
  const [opacity, setOpacity] = useState(1);

  function calculateResultColor() {
    const redHex = color.substr(0, 2);
    const blueHex = color.substr(2, 2);
    const greenHex = color.substr(4, 2);

    const newRedHex = Math.floor(parseInt(redHex, 16) * opacity).toString(16);
    const newBlueHex = Math.floor(parseInt(blueHex, 16) * opacity).toString(16);
    const newGreenHex = Math.floor(parseInt(greenHex, 16) * opacity).toString(
      16
    );

    return `${newRedHex}${newBlueHex}${newGreenHex}`;
  }

  const resultingColor = calculateResultColor();

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Hex Color with Opacity to Hex Converter</h1>
          <form>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                className="form-control"
                type="text"
                name="color"
                id="color"
                placeholder="RRGGBB"
                onChange={e => setColor(e.target.value)}
                value={color}
              />
            </div>

            <div className="form-group">
              <label htmlFor="backgroundColor">Background Color</label>
              <input
                className="form-control"
                type="text"
                name="backgroundColor"
                id="backgroundColor"
                placeholder="RRGGBB"
                onChange={e => setBackgroundColor(e.target.value)}
                value={backgroundColor}
              />
            </div>

            <div className="form-group">
              <label htmlFor="opacity">Opacity</label>
              <input
                className="form-control"
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={e => setOpacity(e.target.value)}
                value={opacity}
              />
              <input
                className="form-control"
                type="text"
                onChange={e => setOpacity(e.target.value)}
                value={opacity}
              />
            </div>

            <div className="form-group">
              <label htmlFor="result">Resulting Color</label>
              <input
                className="form-control"
                type="text"
                name="result"
                id="result"
                placeholder="RRGGBB"
                value={resultingColor}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
