import React, { useState } from "react";
import "./App.scss";

function App() {
  const [color, setColor] = useState("ffffff");
  const [backgroundColor, setBackgroundColor] = useState("000000");
  const [opacity, setOpacity] = useState(1);

  const calculateHexWithOpacity = (hex, backgroundHex) => {
    const newInteger = parseInt(hex, 16) * opacity;
    const newBackgroundInteger = parseInt(backgroundHex, 16) * (1 - opacity);

    let sum = newInteger + newBackgroundInteger;
    let newHex = Math.floor(sum).toString(16);

    if (sum < 16) {
      newHex = `0${newHex}`;
    }

    return newHex;
  };

  const calculateResultColor = () => {
    const redHex = color.substr(0, 2);
    const greenHex = color.substr(2, 2);
    const blueHex = color.substr(4, 2);

    const backgroundRedHex = backgroundColor.substr(0, 2);
    const backgroundGreenHex = backgroundColor.substr(2, 2);
    const backgroundBlueHex = backgroundColor.substr(4, 2);

    const newRedHex = calculateHexWithOpacity(redHex, backgroundRedHex);
    const newGreenHex = calculateHexWithOpacity(greenHex, backgroundGreenHex);
    const newBlueHex = calculateHexWithOpacity(blueHex, backgroundBlueHex);

    return `${newRedHex}${newGreenHex}${newBlueHex}`;
  };

  const resultingColor = calculateResultColor();

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-4">
          <h1>Color Converter</h1>
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
              <div className="swatch" style={{ background: `#${color}` }} />
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
              <div
                className="swatch"
                style={{ background: `#${backgroundColor}` }}
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

            <hr />

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
              <div
                className="swatch"
                style={{ background: `#${resultingColor}` }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
