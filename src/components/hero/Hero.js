import React, { useState } from "react";
import "./HeroStyles.css";
import Modal from "../Portal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="over">
            <h1>Fryckowe&nbsp;</h1>
            <h2 className="blue"> lato</h2>
          </div>
          <h2>w&nbsp;Szafarnii</h2>
          <div>
            <button onClick={() => Toggle()}>Więcej</button>
          </div>
          <Modal
            show={modal}
            close={Toggle}
            title="Fryderyk Chopin na Ziemi Dobrzyńskiej i Chełmińskiej"
          >
            <p>
              "Po ukończeniu IV klasy Liceum Warszawskiego czternastoletni
              Fryderyk został zaproszony przez rodziców Dominika Dziewanowskiego
              do ich majątku – Szafarni, znajdującego się wtedy blisko granicy
              zaboru pruskiego, obecnie w powiecie golubsko- dobrzyńskim, około
              7 km od Golubia – Dobrzynia. Państwo Chopinowie chętnie wyrazili
              zgodę na wyjazd chłopca tym bardziej, że uzyskali zapewnienie
              siostry Juliana Dziewanowskiego – Ludwiki – iż będzie dbać o wątłe
              zdrowie ich syna. O zniecierpliwieniu tą opieką domownicy mogli
              dowiedzieć się z listów, które im wysyłał. Najbardziej narzekał na
              zakaz spożywania wiejskiego chleba, jednak mimo to ściśle
              przestrzegał zaleceń lekarza. Posłusznie jadł specjalnie dla niego
              pieczone bułeczki, pił wywary ziołowe i kawę żołędziową, łykał
              przywiezione ze sobą lekarstwa."
            </p>
            <br />
            <p>
              <em>https://szafarnia.art.pl/chopin-u-nas/</em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
