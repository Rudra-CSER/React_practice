import React from "react";
import ThemeContext from "../ThemeContext";

const Navbar = () => {
  const { theme } = React.useContext(ThemeContext);
//by toogleing change the theme in the navbar

  return (
    <div className={`navbar ${theme}`} style={{ color: theme === "light" ? "black" : "white" }}>
      <h1>My App</h1>
    </div>
  );
};

export default Navbar;