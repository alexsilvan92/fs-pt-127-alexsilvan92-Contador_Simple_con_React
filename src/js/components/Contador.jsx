export default function Contador({
  centenas_mil,
  decenas_mil,
  unidades_mil,
  centenas,
  decenas,
  unidades,
  horas,
  minutos,
  segundos,
  onPause,
  onResume,
  onReset,
  pausado,
}) {
  return (
    <div className="container bg-dark p-3 m-4 rounded-5">

      {/* Contador de segundos */}
      <div className="noselect gap-2 gap-md-3 m-3 m-md-5 d-flex flex-wrap justify-content-center">
        <div className="badge text-bg-secondary col-12 col-sm-auto fs-3 fs-md-1 rounded-4 px-3 px-md-4">
          ⌛
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {centenas_mil}
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {decenas_mil}
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {unidades_mil}
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {centenas}
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {decenas}
        </div>
        <div className="badge text-bg-secondary col-1 col-sm-auto fs-3 fs-md-1 rounded-4 ">
          {unidades}
        </div>
      </div>
      
      {/* Contador de horas: minutos: segundos */}
      <div className="noselect gap-2 gap-md-3 m-3 m-md-5 d-flex flex-wrap justify-content-center text-white">
        <div className="fs-3 fs-md-1 fw-bold">⌚</div>
        <div className="fs-3 fs-md-1 fw-bold">{horas}</div>
        <div className="fs-3 fs-md-1 fw-bold">:</div>
        <div className="fs-3 fs-md-1 fw-bold">{minutos}</div>
        <div className="fs-3 fs-md-1 fw-bold">:</div>
        <div className="fs-3 fs-md-1 fw-bold">{segundos}</div>
      </div>
      
      {/* Controles: Pausar, Play, Reiniciar */}
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 m-3 m-md-5">
        {pausado ? (
          <button
            className="btn btn-success btn-lg w-100 w-sm-auto"
            onClick={onResume}
          >
            ▶️ Play
          </button>
        ) : (
          <button
            className="btn btn-warning btn-lg w-100 w-sm-auto"
            onClick={onPause}
          >
            ⏸️ Pausar
          </button>
        )}
        <button
          className="btn btn-danger btn-lg w-100 w-sm-auto"
          onClick={onReset}
        >
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
}
