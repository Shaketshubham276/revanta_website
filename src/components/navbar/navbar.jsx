import React from 'react'
import './navbar.css'

const Navbar = () => {
  const onclickMenu = () => {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
  };

  return (
    <div>
      <div id="navigation">
        <div id="menu" onClick={onclickMenu}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <ul className="nav" id="nav">
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">gallery</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
