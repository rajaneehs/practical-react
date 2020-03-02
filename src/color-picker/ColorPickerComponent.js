import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPickerComponent() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setshowColorPicker] = useState(false);

  return (
    <div>
      <button
        onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? `Close color picker` : `Pick a color`}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updatedColor => setColor(updatedColor.hex)}
        />
      )}
      <h3>You picked {color}</h3>
    </div>
  );
}

export default ColorPickerComponent;
