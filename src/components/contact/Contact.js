import React, { useState } from "react";
import "./ContactStyles.css";
import Modal from "../Portal/Modal";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
            <button onClick={() => Toggle()}>Więcej</button>
          </div>
          <Modal show={modal} close={Toggle} title="Złote dziecko">
            <p>
              "Fryderyk Chopin zaczął komponować już w wieku kilku lat. Na
              początku były to polonezy. Szybko zyskał sławę w Warszawie.
              Uchodził za złote dziecko. Jako siedmiolatek zagrał przed księciem
              Konstantym. Wtedy też do druku wszedł jego pierwszy utwór: Polonez
              w tonacji g-moll. W 1822 r., gdy Fryderyk Chopin miał niespełna 12
              lat, "Pamiętnik Warszawski" opisał go jako muzycznego geniusza,
              przedstawiając go jako wybitnego fortepianistę oraz kompozytora
              wariacji i tańców. Gdy w 1825 r. Fryderyk Chopin wystąpił przed
              carem Aleksandrem I, ten był tak zachwycony, że ofiarował mu
              bardzo drogi pierścień. Młody muzyk później go sprzedał. Odrzucił
              też ofertę zostania nadwornym kompozytorem carskim."
            </p>
            <br />
            <p>
              <em>
                wiadomosci.onet.pl/kraj/fryderyk-chopin-zyciorys-dziela-zycie-prywatne/jsvy9sm
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://chopin.nifc.pl/pl/chopin/etap-zycia/1_fryderyk-franciszek-chopin
