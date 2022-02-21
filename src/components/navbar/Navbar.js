import React, { useState } from "react";
import "./NavbarStyles.css";
import { CgPiano } from "react-icons/cg";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <CgPiano className="icon" />
          <h2>Fryderyk Chopin</h2>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={handleNav}>
              Start
            </Link>
          </li>
          <li>
            <Link to="/szafarnia" onClick={handleNav}>
              Szafarnia
            </Link>
          </li>
          <li>
            <Link to="/zelazowa-wola" onClick={handleNav}>
              Żelazowa Wola
            </Link>
          </li>
          <li>
            <Link to="/dziecinstwo" onClick={handleNav}>
              Dzieciństwo
            </Link>
          </li>
          <button>Czytaj</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <AiOutlineAlignRight className="icon" />
          ) : (
            <BsX className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
