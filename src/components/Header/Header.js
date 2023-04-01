import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>Knowledge Cafe</h2>
      <div className="header-anchor">
        <a href="/coding">Coding</a>
        <a href="/intern">Intern</a>
        <a href="/job">Job</a>
      </div>
    </nav>
  );
};

export default Header;