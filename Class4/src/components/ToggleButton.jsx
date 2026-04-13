import React from "react";
import ThemeContext from "../ThemeContext";

const ToggleButton = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ToggleButton;