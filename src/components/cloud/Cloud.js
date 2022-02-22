import React, { useState } from "react";
import "./CloudStyles.css";
import Modal from "../Portal/Modal";

const Cloud = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="cloud">
      <div className="container">
        <div className="content">
          <h2>
            <span>Wakacje </span>w Żelazowej Woli
          </h2>
          <p>
            "Podczas wizyt kompozytora w&nbsp;majątku Skarbków fortepian
            wynoszono do ogrodu, gdzie pod lipami Fryderyk dawał koncerty.
            Zgromadzeni goście i&nbsp;rodzina nie byli jedynymi słuchaczami –
            dźwięki fortepianu przyciągały mieszkańców pobliskich wsi (jak
            wspominał Antoni Krysiak, chłop z&nbsp;Żelazowej Woli
            i&nbsp;rówieśnik Fryderyka Chopina).
            <br />
            <br /> Latem 1830 Fryderyk Chopin przyjechał do Żelazowej Woli,
            gdzie cała rodzina Chopinów przebywała na letnim wypoczynku. Wówczas
            kompozytor był tu po raz ostatni."
          </p>
          <em>(pl.wikipedia.org/wiki/Dom_Urodzenia_Fryderyka_Chopina)</em>
          <div>
            <button onClick={() => Toggle()}>Czytaj</button>
          </div>
          <Modal show={modal} close={Toggle} title="Dzieciństwo Chopina">
            <p>
              "Data narodzin Fryderyka Chopina była tematem wielu rozpraw
              naukowych. Wciąż nie jest jasne, czy przyszedł na świat 22 lutego
              czy 1 marca 1810 r. W dokumentach brochowskiego kościoła, gdzie
              Justyna i Mikołaj Chopinowie chrzcili syna, zapisano datę 22
              lutego, jednak późniejsza korespondencja członków rodziny i
              przyjaciół wskazuje raczej na tę drugą wersję. Nieścisłości w
              metryce Fryderyka nie należy się dziwić, gdyż podobne pomyłki w
              aktach metrykalnych były w owych czasach zjawiskiem bardzo
              częstym. Mimo tej rozbieżności uznawana jest data, którą
              celebrował sam kompozytor i jego rodzina, czyli pierwszy dzień
              marca."
            </p>
            <br />
            <p>
              <em>
                kultura.gazetaprawna.pl/muzyka/artykuly/8259595,dziecinstwo-chopina.html
              </em>
              <br />
              <em>
                psmopole.pl/witamy/aktualnosci/ogolne-informacje/wokol-daty-urodzenia-fryderyka-chopina
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
