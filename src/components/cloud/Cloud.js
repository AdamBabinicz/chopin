import React from "react";
import "./CloudStyles.css";

const Cloud = () => {
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
            <button>Czytaj</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
