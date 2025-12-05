import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import Contador from "./components/Contador";

// ========== ESTADO GLOBAL DEL CONTADOR ==========
let contador = 0;
let interval = null;
let pausado = false;

// ========== FUNCIÓN PARA RENDERIZAR ==========
function renderContador() {
  const unidades = Math.floor((contador / 1) % 10);
  const decenas = Math.floor((contador / 10) % 10);
  const centenas = Math.floor((contador / 100) % 10);
  const unidades_mil = Math.floor((contador / 1000) % 10);
  const decenas_mil = Math.floor((contador / 10000) % 10);
  const centenas_mil = Math.floor(contador / 100000);
  const horas = Math.floor(contador / 3600).toLocaleString("es-ES", {
    minimumIntegerDigits: 2,
  });
  const minutos = Math.floor((contador % 3600) / 60).toLocaleString("es-ES", {
    minimumIntegerDigits: 2,
  });
  const segundos = String(contador % 60).padStart(2, "0");
  ReactDOM.createRoot(document.getElementById("root")).render(
    <>
      {/* ========== CONTADOR ========== */}
      <Contador
        centenas_mil={centenas_mil}
        decenas_mil={decenas_mil}
        unidades_mil={unidades_mil}
        centenas={centenas}
        decenas={decenas}
        unidades={unidades}
        horas={horas}
        minutos={minutos}
        segundos={segundos}
        onPause={pausarContador}
        onResume={resumeContador}
        onReset={resetContador}
        pausado={pausado}
      />
      {/* ========== CUENTA ATRÁS ========== */}
      <div className="container  d-flex bg-dark gap-2 p-3 m-4 rounded-5">
        <span class="input-group-text text-bg-secondary col-2 rounded-5 fw-bold justify-content-center">CUENTA ATRÁS</span>
        <input
          id="inputCuentaAtras"
          type="number"
          className="form-control rounded-5"
          placeholder="Introduce segundos a contar."
          onClick={() => {
            pausarContador();
          }}
        />
        <button
          className="btn btn-success fw-bold col-2 rounded-5"
          type="button"
          onClick={cuentaAtras}
        >
          Empezar
        </button>
      </div>
      {/* ========== ALERTA ========== */}
      <div className="container d-flex bg-dark gap-2 p-3 m-4 rounded-5">
        <span className="input-group-text text-bg-secondary col-2 rounded-5 fw-bold justify-content-center">ALERTA</span>
        <input
          id="inputAlerta"
          type="number"
          className="form-control rounded-5"
          placeholder="Introduce segundos para la alerta."
          onClick={() => {
            pausarContador();
          }}
        />
        <button
          className="btn btn-success fw-bold col-2 rounded-5"
          type="button"
          onClick={cuentaAlerta}
        >
          Activar
        </button>
      </div>
    </>
  );
}

// ========== FUNCIÓN PARA ACTUALIZAR EL CONTADOR ==========
function actualizarContador() {
  contador++;
  renderContador();
}
// ========== FUNCIÓN PARA ACTUALIZAR EL CONTADOR CUENTA ATRAS ==========
function actualizarCuentaAtrasContador() {
  contador--;
  renderContador();
}

// ========== FUNCIÓN PARA PAUSAR ==========
function pausarContador() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pausado = true;
    renderContador();
  }
}

// ========== FUNCIÓN PARA PLAY ==========
function resumeContador() {
  if (!interval) {
    interval = setInterval(actualizarContador, 1000);
    pausado = false;
    renderContador();
  }
}
// ========== FUNCIÓN PARA PLAY CUENTA ATRÁS ==========
function playCuentaAtrasContador() {
  if (!interval) {
    interval = setInterval(actualizarCuentaAtrasContador, 1000);
    pausado = false;
    renderContador();
  }
}

// ========== FUNCIÓN PARA REINICIAR ==========
function resetContador() {
  pausarContador();
  contador = 0;
  renderContador();
}

// ========== FUNCIÓN PARA CUENTA ATRÁS ==========
function cuentaAtras() {
  const inputCuentaAtras = document.getElementById("inputCuentaAtras").value;
  if (isNaN(inputCuentaAtras) || inputCuentaAtras < 0) {
    alert("Por favor, ingrese un número válido para la cuenta atrás.");
    return;
  }
  contador = parseInt(inputCuentaAtras, 10);
  playCuentaAtrasContador();
}

// ========== FUNCIÓN PARA ALERTA ==========
function cuentaAlerta() {
  const inputAlerta = document.getElementById("inputAlerta").value; 
  if (isNaN(inputAlerta) || inputAlerta < 0) {
    alert("Por favor, ingrese un número válido para la alerta.");
    return;
  }
  resetContador();
  resumeContador();
  const alertaTiempo = parseInt(inputAlerta, 10);
  setTimeout(() => {
    alert(`¡Alerta! Han pasado ${alertaTiempo} segundos.`);
  }, alertaTiempo * 1000);
}

// ========== INICIO DEL CONTADOR ==========
renderContador(); // Renderizado inicial
interval = setInterval(actualizarContador, 1000); // Iniciar contador
