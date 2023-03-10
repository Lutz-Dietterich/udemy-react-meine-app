import React from "react";
import "./index.css";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let name = "React";
  const [zahl, setZahl] = useState(1);
  const [karte, setKarte] = useState(false);

  return (
    <div className="center container paper">
      <Header name={name} />
      <div className="row">
        <button
          onClick={() => setZahl(zahl + 1)}
          className="btn-success-outline"
        >
          +1
        </button>
        <button
          onClick={() => setZahl(zahl - 1)}
          className="btn-success-outline"
        >
          -1
        </button>
        <button onClick={() => setKarte(!karte)} className="btn-danger-outline">
          Karte
        </button>
      </div>
      <Main nummer={zahl} inhalt="Guybrush" karte={karte} />
      <Main nummer="2" inhalt="LeChuck" karte={karte} />
      <Main karte={karte} />
    </div>
  );
}

export default App;
