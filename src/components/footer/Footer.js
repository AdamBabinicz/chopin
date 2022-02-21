import React from "react";
import "./FooterStyles.css";
import { GiGrandPiano } from "react-icons/gi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiMail, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <GiGrandPiano className="icon" />
            <h2>Fryderyk Chopin</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Filmy</h3>
            <p>
              <a
                href="https://www.youtube.com/watch?v=938FVnYfHa8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Młodość
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=P145ULbuzLw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Szafarnia
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=x9UGkxg9vo8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chopin
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=s2_coVXj9bI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Warszawa
              </a>
            </p>
          </div>
          <div className="col">
            <h3>Artykuły</h3>
            <p>
              <a
                href="http://fryderykchopin.weebly.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Życie i twórczość
              </a>
            </p>
            <p>
              <a
                href="https://muzykachopina.wordpress.com/mlodosc-chopina"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nauka
              </a>
            </p>
            <p>
              <a
                href="https://www.lazienki-krolewskie.pl/pl/edukacja/baza-wiedzy/tworczosc-fryderyka-chopina"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mały Chopinek
              </a>
            </p>
            <p>
              <a
                href="https://chopin.nifc.pl/pl/chopin/etap-zycia/6_warszawa-lata-mlodosci"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lata młodości
              </a>
            </p>
          </div>
          <div className="col">
            <h3>Linki</h3>
            <p>
              <a
                href="https://muzeum.nifc.pl/pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Muzeum
              </a>
            </p>
            <p>
              <a
                href="https://www.nck.pl/patronaty/patronaty-honorowe/chopin-point-galeria-art"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chopin Point
              </a>
            </p>
            <p>
              <a
                href="https://culture.pl/pl/galeria/chopin-na-piec-fortepianow-w-pekinie-galeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galeria
              </a>
            </p>
            <p>
              <a
                href="https://chopin.edu.pl/galeria-zdjec"
                target="_blank"
                rel="noopener noreferrer"
              >
                UMFC
              </a>
            </p>
          </div>
          <div className="col">
            <h3>Książki</h3>
            <p>
              <a
                href="https://lubimyczytac.pl/ksiazka/4988180/siudmak-chopin?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Siudmak. Chopin
              </a>
            </p>
            <p>
              <a
                href="https://lubimyczytac.pl/ksiazka/4953544/ksztalt-milosci?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kształt miłości
              </a>
            </p>

            <p>
              <a
                href="https://lubimyczytac.pl/ksiazka/122472/fryckowe-lato"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fryckowe lato
              </a>
            </p>
            <p>
              <a
                href="https://lubimyczytac.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chopinowskie igrzysko
              </a>
            </p>
          </div>
          <form>
            <h3>Media</h3>
            {/* <input type="email" placeholder="Email" /> */}
            <div className="out">
              <FiMail className="mail-icon" />
              <p>
                <a href="mailto:puaro@vp.pl">puaro@vp.pl</a>
              </p>
            </div>
            <div className="social-group">
              <a
                href="https://www.instagram.com/chopininstitute/?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="social-icon" />
              </a>
              <a
                href="https://pl-pl.facebook.com/instytut.chopina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="social-icon" />
              </a>
              <a
                href="https://pl.pinterest.com/claudiapriv/chopin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="social-icon" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
