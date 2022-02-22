import React, { useState } from "react";
import "./RecoveryStyles.css";
import Modal from "../Portal/Modal";

const Recovery = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="recovery">
      <div className="container">
        <div className="content">
          <h2>
            <span>Pobyt</span> w Szafarni
          </h2>
          <p>
            Pobyt Fryderyka w Szafarni nie ograniczał się jedynie do spotkań
            towarzyskich i zabaw. Młody wirtuoz miał możliwość gry na
            fortepianie, ponieważ instrument ten stawał się coraz bardziej
            nieodzownym elementem wyposażenia ówczesnych dworów ziemiańskich.
            Wakacje spędzone w Szafarni w 1824 i 1825 r. były również czasem
            kształtowała się wrażliwości artystycznej młodego kompozytora, m.in.
            poprzez bezpośredni kontakt z autentyczną muzyką ludową, której echa
            z łatwością znajdujemy w jego twórczości.
            <br />
            <br /> Fryderyk spisywał teksty zasłyszanych piosenek, brał udział w
            wiejskich zabawach, a nawet grał z wiejskimi muzykantami, o czym
            pisze do rodziny w liście z 26 sierpnia 1825 r.: „Już była prawie
            11-nasta, gdy Frycowa basetlę przynosi, gorszą od skrzypcy, o jednej
            tylko stronie. Dorwawszy się zakurzonego smyka jak zacznę bassować,
            takiem tęgo dudlił, że się wszyscy zlecieli patrzeć na dwóch Fryców,
            jednego śpiący na skrzypkach, drugiego na jednostronnej,
            monokordycznej, zakurzonej (...) rzępolącego basetli (…)”.
          </p>
          <em>(chopin.nifc.pl)</em>
          <div>
            <button onClick={() => Toggle()}>Więcej</button>
          </div>
          <Modal show={modal} close={Toggle} title="Szafarnia">
            <p>
              "Dzięki „Kuryerom” rodzice Fryderyka mogli dowiedzieć się jak
              wolny czas spędza ich syn. W relacji z datą 16 sierpnia 1824 r. w
              „Wiadomości Krayowych” czytamy: „Dnia 11 Sierpnia r. b. odbywał
              J.P. Fryderyk Chopin kursa na dzielnym koniu i ubiegał się, do
              mety: a lubo po kilkakroć pieszo idąc Panią Dziewanowską wyścignąć
              nie mógł (w czem nie iego, lecz konia wina była) otrzymał iednak
              zwycięztwo nad Panną Ludwiką, która iuż dość blisko mety piechotą
              doszła. – J.P. Franciszek Chopin wyieżdża codzień na spacer, z
              takimi iednak honorami, iż zawsze na tyle siada. J.P. Jakób Chopin
              wypiia na dzień sześć filiżanek kawy żołędziowej, Mikołaiek zaś co
              dzień cztery bułeczki ziada, notebene prócz potężnego obiadu i
              trzypotrawney kolacyjki”."
            </p>
            <br />
            <p>
              <em>
                greatcomposers.nifc.pl/pl/chopin/catalogs/places/121_szafarnia
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
