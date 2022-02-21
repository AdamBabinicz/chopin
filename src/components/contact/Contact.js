import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <h2>
            <span>Dzieciństwo</span>
          </h2>
          <p>
            "Od najwcześniejszych lat życia Fryderyk miał styczność z muzyką.
            Matka grała na fortepianie i śpiewała, ojciec towarzyszył na flecie
            i skrzypcach, siostra Ludwika od najmłodszych lat wykazywała talent
            muzyczny i uczyła się gry na fortepianie. Atmosfera domu rodzinnego
            była ciepła i serdeczna. To właśnie dom – prowadzony przez rodziców
            starannie, według najlepszych wzorów polskiej arystokracji –
            pozostanie dla Chopina symbolem spokoju, bezpieczeństwa i miłości,
            swoistą arkadią wcześnie utraconą, (...).
            <br />
            <br /> Najprawdopodobniej pierwszy kontakt z fortepianem miał Chopin
            we wczesnym dzieciństwie, gdy słuchał gry matki. Pierwsze
            samodzielne próby podejmował pod okiem Ludwiki, a w wieku lat
            sześciu rozpoczął regularną naukę gry u prywatnego nauczyciela
            muzyki, Wojciecha Żywnego (1756–1842). Ten szybko zorientował się w
            niezwykłym talencie młodziutkiego ucznia i z oddaniem wprowadzał go
            w świat wielkich mistrzów, głównie Bacha i Mozarta, bacznie
            obserwując jego postępy pianistyczne i swobodę improwizacji."
          </p>
          <em>(chopin.nifc.pl)</em>
          <div>
            <button>Więcej</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://chopin.nifc.pl/pl/chopin/etap-zycia/1_fryderyk-franciszek-chopin
