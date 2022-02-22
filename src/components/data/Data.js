import React, { useState } from "react";
import "./DataStyles.css";
import Modal from "../Portal/Modal";

const Data = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="data">
      <div className="container">
        <div className="content">
          <h2>
            <span>Duszniki </span>
          </h2>
          <p>
            "Zapewne za namową przyjaciół państwo Chopinowie zadecydowali się
            wysłać syna latem 1826 r., zaraz po ukończeniu Liceum Warszawskiego,
            na kurację do Dusznik.
            <br />
            <br /> 3 sierpnia 1826 r. kompozytor razem z matką zatrzymał się w
            Domu Bürgla, pensjonacie, który niestety nie zachował się do naszych
            czasów. Fryderyk musiał zgodnie z zaleceniami lekarzy stosować
            przepisaną kurację. Polegała ona głównie na spacerach i piciu wód
            zdrojowych w określonych porach. Zabiegi te przyniosły efekt, a
            kompozytor pisał do rodziny, że dzięki temu jest „całkiem inny niż w
            Warszawie”.
            <br /> <br />W czasie pobytu w uzdrowisku Fryderyk dał nieplanowany
            wcześniej charytatywny koncert. Nie było to dla niego łatwe zadanie,
            ze względu na brak dobrego instrumentu. Donosił o tym z rozżaleniem
            swojemu nauczycielowi, Józefowi Elsnerowi, pisząc: „instrumenty,
            które widziałem, sprawiają mi więcej przykrości niż przyjemności”."
          </p>
          <em>(chopin.nifc.pl)</em>
          <div>
            <button onClick={() => Toggle()}>Czytaj</button>
          </div>
          <Modal
            show={modal}
            close={Toggle}
            title="O pobycie Fryderyka Chopina w Dusznikach-Zdroju"
          >
            <p>
              ""Świeże powietrze i serwatka, którą pijam skwapliwie, tak mię
              postawiły na nogi, że jestem całkiem inny niż w Warszawie.
              Wspaniałe widoki, jakie roztacza Śląsk, czarują i zachwycają
              mnie”. Tak w liście do swojego przyjaciela Józefa Elsnera pisał o
              Dusznikach-Zdroju Fryderyk Chopina. Nie wspomniał w nim co prawda
              o tym, że na zbyt długie spacery mu nie pozwalano, ale swoje
              zobaczył. Pobyt Chopina w tym mieście był krótki. Trwał od 3
              sierpnia do 8 września 1826 roku. Chopin miał wówczas 16 lat i
              przyjechał w towarzystwie matki i siostry. Przyjechał, by leczyć
              swoje suchoty. Wszystko zaczyna się w roku 1818, kiedy to na
              kuracji w Bad Reinerz (niemiecka nazwa miasta) przebywał
              znamienity muzyk i nauczyciel Fryderyka Chopina - Józef Elsner."
            </p>
            <br />
            <p>
              <em>
                dusznikizdroj.naszemiasto.pl/o-pobycie-fryderyka-chopina-w-dusznikach-zdroju/ar/c13-4261571
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Data;
