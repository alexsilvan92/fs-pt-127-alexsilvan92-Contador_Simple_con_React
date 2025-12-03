import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import Counter from "./components/Counter";

let contador = -1;

setInterval(() => {
  contador++;
  const unidades = Math.floor((contador / 1) % 10);
  const decenas = Math.floor((contador / 10) % 10);
  const centenas = Math.floor((contador / 100) % 10);
  const unidades_mil = Math.floor((contador / 1000) % 10);
  const decenas_mil = Math.floor((contador / 10000) % 10);
  const centenas_mil = Math.floor(contador / 100000);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Counter
      centenas_mil={centenas_mil}
      decenas_mil={decenas_mil}
      unidades_mil={unidades_mil}
      centenas={centenas}
      decenas={decenas}
      unidades={unidades}
    />
  );
}, 1000);
