import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Nav({ handleInputChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleInputChange={handleInputChange} />
      </div>
    </nav>
  );
}
export default Nav;
