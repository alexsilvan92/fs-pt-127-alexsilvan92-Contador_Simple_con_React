export default function Counter({ centenas_mil, decenas_mil, unidades_mil, centenas, decenas, unidades, }) {
  return (
      <div className="counter mt-3 gap-2 d-flex justify-content-center bg-dark p-4">
        <div className="badge text-bg-secondary fs-1 rounded-circle">⌚</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{centenas_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{decenas_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{unidades_mil}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{centenas}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{decenas}</div>
        <div className="badge text-bg-secondary fs-1 rounded-5">{unidades}</div>
      </div>
  );
}
