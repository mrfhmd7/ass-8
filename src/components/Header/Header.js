import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>Knowledge Cafe</h2>
      <div className="header-anchor">
        <a href="">Coding</a>
        <a href="">Intern</a>
        <a href="">Job</a>
      </div>
    </nav>
  );
};

export default Header;
