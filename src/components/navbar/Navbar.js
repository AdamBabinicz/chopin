import React, { useState } from "react";
import "./NavbarStyles.css";
import { CgPiano } from "react-icons/cg";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../Portal/Modal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
          <button onClick={() => Toggle()}>Czytaj</button>
        </ul>
        <Modal show={modal} close={Toggle} title="Kurier Szafarski">
          <p>
            Młody Chopin starannie notował wydarzenia z wiejskiej codzienności i
            swoje wspomnienia zapisał w postaci wakacyjnej gazetki zatytułowanej
            “Kurier Szafarski”, redagowanej na wzór stołecznego “Kuriera
            Warszawskiego”. W całości zachowały się jedynie cztery numery
            “Kuriera Szafarskiego” oraz dwa inne fragmenty. Chopin oznaczał
            każde wydanie datą dzienną i roczną, a także dodawał wymyślone przez
            siebie wspomnienie z historii Szafarni. „Kurier” to nic innego jak
            korespondencja z bliskimi, w satyryczny sposób przedstawiająca życie
            wiejskie na dworze i w jego okolicach.
          </p>
          <br />
          <p>
            <em>https://szafarnia.art.pl/chopin-u-nas/</em>
          </p>
        </Modal>
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
