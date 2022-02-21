import React from "react";
import "./DataStyles.css";

const Data = () => {
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
            <button>Czytaj</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
