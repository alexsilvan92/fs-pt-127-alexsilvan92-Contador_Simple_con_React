export default function Contador({ centenas_mil, decenas_mil, unidades_mil, centenas, decenas, unidades, horas, minutos, segundos, onPause, onResume, onReset, pausado }) {
  return (
    <div className="container bg-dark p-4 rounded-pill">
      {/* Contador de segundos */}
      <div className="noselect gap-3 m-5 d-flex justify-content-center">
        <div className="badge text-bg-secondary fs-1 rounded-5">⌛</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{centenas_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{decenas_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{unidades_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{centenas}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{decenas}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{unidades}</div>
      </div>

      {/* Contador de horas: minutos: segundos */}
      <div className="noselect gap-3 m-5 d-flex justify-content-center fs-3 text-white">
        <div className="fs-1 fw-bold">⌚</div>
        <div className="fs-1 fw-bold">{horas}</div>
        <div className="fs-1 fw-bold">:</div>
        <div className="fs-1 fw-bold">{minutos}</div>
        <div className="fs-1 fw-bold">:</div>
        <div className="fs-1 fw-bold">{segundos}</div>
      </div>

      {/* Controles: Pausar, Play, Reiniciar */}
      <div className="d-flex justify-content-center gap-3 m-5">
        {pausado ? (
          <button className="btn btn-success btn-lg" onClick={onResume}>
            ▶️ Play
          </button>
        ) : (
          <button className="btn btn-warning btn-lg" onClick={onPause}>
            ⏸️ Pausar
          </button>
        )}
        <button className="btn btn-danger btn-lg" onClick={onReset}>
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
}
